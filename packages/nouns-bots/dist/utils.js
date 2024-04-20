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
exports.buildCounterName = exports.getNounPngBuffer = exports.formatNewGovernanceVoteText = exports.formatProposalAtRiskOfExpiryText = exports.formatUpdatedGovernanceProposalStatusText = exports.formatNewGovernanceProposalText = exports.getAuctionEndingSoonTweetText = exports.formatBidMessageText = exports.formatAuctionStartedTweetText = exports.resolveEnsOrFormatAddress = void 0;
const ethers_1 = require("ethers");
const sharp_1 = __importDefault(require("sharp"));
const ts_try_1 = require("ts-try");
const clients_1 = require("./clients");
const types_1 = require("./types");
const proposals_1 = require("./utils/proposals");
const shortAddress = (address) => `${address.substr(0, 4)}...${address.substr(address.length - 4)}`;
const voteDirectionToText = (direction) => {
    const map = {
        [types_1.VoteDirection.FOR]: 'for',
        [types_1.VoteDirection.AGAINST]: 'against',
        [types_1.VoteDirection.ABSTAIN]: 'to abstain on',
    };
    return map[direction];
};
/**
 * Try to reverse resolve an ENS domain and return it for display,
 * If no result truncate the address and return it
 * @param address The address to ENS lookup or format
 * @returns The resolved ENS lookup domain or a formatted address
 */
function resolveEnsOrFormatAddress(address) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield ethers_1.ethers.getDefaultProvider().lookupAddress(address)) || shortAddress(address);
    });
}
exports.resolveEnsOrFormatAddress = resolveEnsOrFormatAddress;
/**
 * Get tweet text for auction started.
 * @param auctionId The started auction id.
 * @param durationSeconds The duration of the auction in seconds.
 * @returns Text to be used in tweet when auction starts.
 */
function formatAuctionStartedTweetText(auctionId) {
    return `＊Bleep Bloop Blop＊
        
 An auction has started for Noun #${auctionId}
 Learn more at https://nouns.wtf`;
}
exports.formatAuctionStartedTweetText = formatAuctionStartedTweetText;
/**
 * Get the formatted text for a new bid.
 * @param id The auction/noun id
 * @param bid The amount of the current bid
 * @returns The bid update tweet text
 */
function formatBidMessageText(id, bid) {
    return __awaiter(this, void 0, void 0, function* () {
        const bidder = yield resolveEnsOrFormatAddress(bid.bidder.id);
        return `Noun ${id} has received a bid of Ξ${ethers_1.ethers.utils.formatEther(bid.amount)} from ${bidder}`;
    });
}
exports.formatBidMessageText = formatBidMessageText;
/**
 * Get the tweet text for an auction ending soon.
 * @returns The auction ending soon text
 */
function getAuctionEndingSoonTweetText() {
    return `This auction is ending soon! Bid now at https://nouns.wtf`;
}
exports.getAuctionEndingSoonTweetText = getAuctionEndingSoonTweetText;
function formatNewGovernanceProposalText(proposal) {
    return `A new NounsDAO proposal (#${proposal.id}) has been created: ${(0, proposals_1.extractProposalTitle)(proposal)}`;
}
exports.formatNewGovernanceProposalText = formatNewGovernanceProposalText;
function formatUpdatedGovernanceProposalStatusText(proposal) {
    return `Nouns DAO proposal #${proposal.id} (${(0, proposals_1.extractProposalTitle)(proposal)}) has changed to status: ${proposal.status.toLocaleLowerCase()}`;
}
exports.formatUpdatedGovernanceProposalStatusText = formatUpdatedGovernanceProposalStatusText;
function formatProposalAtRiskOfExpiryText(proposal) {
    return `Nouns DAO proposal #${proposal.id} (${(0, proposals_1.extractProposalTitle)(proposal)}) expires in less than two days. Please execute it immediately!`;
}
exports.formatProposalAtRiskOfExpiryText = formatProposalAtRiskOfExpiryText;
function formatNewGovernanceVoteText(proposal, vote) {
    return __awaiter(this, void 0, void 0, function* () {
        return `${yield resolveEnsOrFormatAddress(vote.voter.id)} has voted ${voteDirectionToText(vote.supportDetailed)} Proposal #${proposal.id} (${(0, proposals_1.extractProposalTitle)(proposal)})${vote.reason ? `\n\nReason: ${vote.reason}` : ''}`;
    });
}
exports.formatNewGovernanceVoteText = formatNewGovernanceVoteText;
/**
 * Get the PNG buffer data of a Noun
 * @param tokenId The ERC721 token id
 * @returns The png buffer of the Noun or undefined
 */
function getNounPngBuffer(tokenId) {
    return __awaiter(this, void 0, void 0, function* () {
        const dataURI = yield (0, ts_try_1.tryF)(() => clients_1.nounsTokenContract.dataURI(tokenId));
        if ((0, ts_try_1.isError)(dataURI)) {
            console.error(`Error fetching dataURI for token ID ${tokenId}: ${dataURI.message}`);
            return;
        }
        const data = JSON.parse(Buffer.from(dataURI.substring(29), 'base64').toString('ascii'));
        const svg = Buffer.from(data.image.substring(26), 'base64');
        return (0, sharp_1.default)(svg).png().toBuffer();
    });
}
exports.getNounPngBuffer = getNounPngBuffer;
/**
 * Generate a counter name with the appropriate
 * prefix
 * @param counterName Counter name to prefix
 * @returns Prefixed counter name
 */
const buildCounterName = (counterName) => `bots_${counterName}`;
exports.buildCounterName = buildCounterName;
