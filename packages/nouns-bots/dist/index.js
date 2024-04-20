"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const clients_1 = require("./clients");
const subgraph_1 = require("./subgraph");
const cache_1 = require("./cache");
const config_1 = require("./config");
const twitter_1 = require("./handlers/twitter");
const discord_1 = require("./handlers/discord");
const proposals_1 = require("./utils/proposals");
const ramda_1 = __importDefault(require("ramda"));
/**
 * Create configured `IAuctionLifecycleHandler`s
 */
const auctionLifecycleHandlers = [];
if (config_1.config.twitterEnabled) {
    auctionLifecycleHandlers.push(new twitter_1.TwitterAuctionLifecycleHandler());
}
if (config_1.config.discordEnabled) {
    auctionLifecycleHandlers.push(new discord_1.DiscordAuctionLifecycleHandler([clients_1.internalDiscordWebhook, clients_1.publicDiscordWebhook]));
}
/**
 * Seed cache the current auction id
 */
function setupAuction() {
    return __awaiter(this, void 0, void 0, function* () {
        const lastAuctionBids = yield (0, subgraph_1.getLastAuctionBids)();
        const lastAuctionId = lastAuctionBids.id;
        yield (0, cache_1.updateAuctionCache)(lastAuctionId);
    });
}
/**
 * Process the last auction, update cache and push socials if new auction or respective bid is discovered
 */
function processAuctionTick() {
    return __awaiter(this, void 0, void 0, function* () {
        const cachedAuctionId = yield (0, cache_1.getAuctionCache)();
        const cachedBidId = yield (0, cache_1.getBidCache)();
        const cachedAuctionEndingSoon = yield (0, cache_1.getAuctionEndingSoonCache)();
        const lastAuctionBids = yield (0, subgraph_1.getLastAuctionBids)();
        const lastAuctionId = lastAuctionBids.id;
        console.log(`processAuctionTick: cachedAuctionId(${cachedAuctionId}) lastAuctionId(${lastAuctionId})`);
        // check if new auction discovered
        if (cachedAuctionId < lastAuctionId) {
            yield (0, clients_1.incrementCounter)((0, utils_1.buildCounterName)(`auctions_discovered`));
            yield (0, cache_1.updateAuctionCache)(lastAuctionId);
            yield Promise.all(auctionLifecycleHandlers.map(h => h.handleNewAuction(lastAuctionId)));
            yield (0, clients_1.incrementCounter)((0, utils_1.buildCounterName)('auction_cache_updates'));
        }
        yield (0, clients_1.incrementCounter)((0, utils_1.buildCounterName)('auction_process_last_auction'));
        // check if new bid discovered
        if (lastAuctionBids.bids.length > 0 && cachedBidId != lastAuctionBids.bids[0].id) {
            const bid = lastAuctionBids.bids[0];
            yield (0, cache_1.updateBidCache)(bid.id);
            yield Promise.all(auctionLifecycleHandlers.map(h => h.handleNewBid(lastAuctionId, bid)));
        }
        // check if auction ending soon (within 20 min)
        const currentTimestamp = ~~(Date.now() / 1000); // second timestamp utc
        const endTime = lastAuctionBids.endTime;
        const secondsUntilAuctionEnds = endTime - currentTimestamp;
        if (secondsUntilAuctionEnds < 20 * 60 && cachedAuctionEndingSoon < lastAuctionId) {
            yield (0, cache_1.updateAuctionEndingSoonCache)(lastAuctionId);
            yield Promise.all(auctionLifecycleHandlers.map(h => { var _a; return (_a = h.handleAuctionEndingSoon) === null || _a === void 0 ? void 0 : _a.call(h, lastAuctionId); }));
        }
    });
}
/**
 * Seed cache with current proposals
 */
function setupGovernance() {
    return __awaiter(this, void 0, void 0, function* () {
        const proposals = yield (0, subgraph_1.getAllProposals)();
        yield Promise.all(proposals.map(p => (0, cache_1.updateProposalCache)(p)));
    });
}
function processGovernanceTick() {
    return __awaiter(this, void 0, void 0, function* () {
        const proposals = yield (0, subgraph_1.getAllProposals)();
        console.log(`processGovernanceTick: all proposal ids(${proposals.map(p => p.id).join(',')})`);
        ramda_1.default.map((proposal) => __awaiter(this, void 0, void 0, function* () {
            const cachedProposal = yield (0, cache_1.getProposalCache)(proposal.id);
            if (cachedProposal === null) {
                // New proposal
                yield Promise.all(auctionLifecycleHandlers.map(h => { var _a; return (_a = h.handleNewProposal) === null || _a === void 0 ? void 0 : _a.call(h, proposal); }));
            }
            else {
                // Proposal has changed status
                if (cachedProposal.status !== proposal.status) {
                    yield Promise.all(auctionLifecycleHandlers.map(h => { var _a; return (_a = h.handleUpdatedProposalStatus) === null || _a === void 0 ? void 0 : _a.call(h, proposal); }));
                }
                const newVotes = (0, proposals_1.extractNewVotes)(cachedProposal, proposal);
                ramda_1.default.map((newVote) => __awaiter(this, void 0, void 0, function* () {
                    // New proposal votes
                    yield Promise.all(auctionLifecycleHandlers.map(h => { var _a; return (_a = h.handleGovernanceVote) === null || _a === void 0 ? void 0 : _a.call(h, proposal, newVote); }));
                }), newVotes);
                // Proposal is at-risk of expiry
                if ((0, proposals_1.isAtRiskOfExpiry)(proposal) && !(yield (0, cache_1.hasWarnedOfExpiry)(proposal.id))) {
                    yield Promise.all(auctionLifecycleHandlers.map(h => { var _a; return (_a = h.handleProposalAtRiskOfExpiry) === null || _a === void 0 ? void 0 : _a.call(h, proposal); }));
                    yield (0, cache_1.setProposalExpiryWarningSent)(proposal.id);
                }
            }
            yield (0, cache_1.updateProposalCache)(proposal);
        }), proposals);
    });
}
setInterval(() => __awaiter(void 0, void 0, void 0, function* () { return processAuctionTick(); }), 30000);
setInterval(() => __awaiter(void 0, void 0, void 0, function* () { return processGovernanceTick(); }), 60000);
setupAuction().then(() => 'setupAuction');
setupGovernance().then(() => 'setupGovernance');
