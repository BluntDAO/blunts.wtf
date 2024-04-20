/// <reference types="node" />
import { Bid, Proposal, Vote } from './types';
/**
 * Try to reverse resolve an ENS domain and return it for display,
 * If no result truncate the address and return it
 * @param address The address to ENS lookup or format
 * @returns The resolved ENS lookup domain or a formatted address
 */
export declare function resolveEnsOrFormatAddress(address: string): Promise<string>;
/**
 * Get tweet text for auction started.
 * @param auctionId The started auction id.
 * @param durationSeconds The duration of the auction in seconds.
 * @returns Text to be used in tweet when auction starts.
 */
export declare function formatAuctionStartedTweetText(auctionId: number): string;
/**
 * Get the formatted text for a new bid.
 * @param id The auction/noun id
 * @param bid The amount of the current bid
 * @returns The bid update tweet text
 */
export declare function formatBidMessageText(id: number, bid: Bid): Promise<string>;
/**
 * Get the tweet text for an auction ending soon.
 * @returns The auction ending soon text
 */
export declare function getAuctionEndingSoonTweetText(): string;
export declare function formatNewGovernanceProposalText(proposal: Proposal): string;
export declare function formatUpdatedGovernanceProposalStatusText(proposal: Proposal): string;
export declare function formatProposalAtRiskOfExpiryText(proposal: Proposal): string;
export declare function formatNewGovernanceVoteText(proposal: Proposal, vote: Vote): Promise<string>;
/**
 * Get the PNG buffer data of a Noun
 * @param tokenId The ERC721 token id
 * @returns The png buffer of the Noun or undefined
 */
export declare function getNounPngBuffer(tokenId: string): Promise<Buffer | undefined>;
/**
 * Generate a counter name with the appropriate
 * prefix
 * @param counterName Counter name to prefix
 * @returns Prefixed counter name
 */
export declare const buildCounterName: (counterName: string) => string;
