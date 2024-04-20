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
exports.DiscordAuctionLifecycleHandler = void 0;
const discord_js_1 = __importDefault(require("discord.js"));
const utils_1 = require("../utils");
class DiscordAuctionLifecycleHandler {
    constructor(discordClients) {
        this.discordClients = discordClients;
    }
    /**
     * Send Discord message with an image of the current noun alerting users
     * @param auctionId The current auction ID
     */
    handleNewAuction(auctionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const png = yield (0, utils_1.getNounPngBuffer)(auctionId.toString());
            if (png) {
                const attachmentName = `Auction-${auctionId}.png`;
                const attachment = new discord_js_1.default.MessageAttachment(png, attachmentName);
                const message = new discord_js_1.default.MessageEmbed()
                    .setTitle(`New Auction Discovered`)
                    .setDescription(`An auction has started for Noun #${auctionId}`)
                    .setURL('https://nouns.wtf')
                    .addField('Noun ID', auctionId, true)
                    .attachFiles([attachment])
                    .setImage(`attachment://${attachmentName}`)
                    .setTimestamp();
                yield Promise.all(this.discordClients.map(c => c.send(message)));
            }
            console.log(`processed discord new auction ${auctionId}`);
        });
    }
    /**
     * Send Discord message with new bid event data
     * @param auctionId Noun auction number
     * @param bid Bid amount and ID
     */
    handleNewBid(auctionId, bid) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = new discord_js_1.default.MessageEmbed()
                .setTitle(`New Bid Placed`)
                .setURL('https://nouns.wtf')
                .setDescription(yield (0, utils_1.formatBidMessageText)(auctionId, bid))
                .setTimestamp();
            yield Promise.all(this.discordClients.map(c => c.send(message)));
            console.log(`processed discord new bid ${auctionId}:${bid.id}`);
        });
    }
    handleNewProposal(proposal) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = new discord_js_1.default.MessageEmbed()
                .setTitle(`New Governance Proposal`)
                .setURL(`https://nouns.wtf/vote/${proposal.id}`)
                .setDescription((0, utils_1.formatNewGovernanceProposalText)(proposal))
                .setTimestamp();
            yield Promise.all(this.discordClients.map(c => c.send(message)));
            console.log(`processed discord new proposal ${proposal.id}`);
        });
    }
    handleUpdatedProposalStatus(proposal) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = new discord_js_1.default.MessageEmbed()
                .setTitle(`Proposal Status Update`)
                .setURL(`https://nouns.wtf/vote/${proposal.id}`)
                .setDescription((0, utils_1.formatUpdatedGovernanceProposalStatusText)(proposal))
                .setTimestamp();
            yield Promise.all(this.discordClients.map(c => c.send(message)));
            console.log(`processed discord proposal update ${proposal.id}`);
        });
    }
    handleProposalAtRiskOfExpiry(proposal) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = new discord_js_1.default.MessageEmbed()
                .setTitle(`Proposal At-Risk of Expiry`)
                .setURL(`https://nouns.wtf/vote/${proposal.id}`)
                .setDescription((0, utils_1.formatProposalAtRiskOfExpiryText)(proposal))
                .setTimestamp();
            yield Promise.all(this.discordClients.map(c => c.send(message)));
            console.log(`processed discord proposal expiry warning ${proposal.id}`);
        });
    }
    handleGovernanceVote(proposal, vote) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = new discord_js_1.default.MessageEmbed()
                .setTitle(`New Proposal Vote`)
                .setURL(`https://nouns.wtf/vote/${proposal.id}`)
                .setDescription(yield (0, utils_1.formatNewGovernanceVoteText)(proposal, vote))
                .setTimestamp();
            yield Promise.all(this.discordClients.map(c => c.send(message)));
            console.log(`processed discord new vote for proposal ${proposal.id};${vote.id}`);
        });
    }
}
exports.DiscordAuctionLifecycleHandler = DiscordAuctionLifecycleHandler;
