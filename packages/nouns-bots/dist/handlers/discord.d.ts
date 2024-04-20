import Discord from 'discord.js';
import { Bid, IAuctionLifecycleHandler, Proposal, Vote } from '../types';
export declare class DiscordAuctionLifecycleHandler implements IAuctionLifecycleHandler {
    readonly discordClients: Discord.WebhookClient[];
    constructor(discordClients: Discord.WebhookClient[]);
    /**
     * Send Discord message with an image of the current noun alerting users
     * @param auctionId The current auction ID
     */
    handleNewAuction(auctionId: number): Promise<void>;
    /**
     * Send Discord message with new bid event data
     * @param auctionId Noun auction number
     * @param bid Bid amount and ID
     */
    handleNewBid(auctionId: number, bid: Bid): Promise<void>;
    handleNewProposal(proposal: Proposal): Promise<void>;
    handleUpdatedProposalStatus(proposal: Proposal): Promise<void>;
    handleProposalAtRiskOfExpiry(proposal: Proposal): Promise<void>;
    handleGovernanceVote(proposal: Proposal, vote: Vote): Promise<void>;
}
