import { Proposal } from './types';
/**
 * Key mapped to the current auction
 */
export declare const getAuctionCacheKey = "NOUNS_AUCTION_CACHE";
/**
 * Key mapped to the last processed bid
 */
export declare const getBidCacheKey = "NOUNS_BID_CACHE";
/**
 * Key mapped to the tweet id to reply updates to
 */
export declare const getReplyTweetIdKey = "NOUNS_REPLY_TWEET_ID";
/**
 * Key mapped to the latest auction id processed for auction ending soon
 */
export declare const getAuctionEndingSoonCacheKey = "NOUNS_AUCTION_ENDING_SOON_CACHE";
/**
 * Key prefix for caching proposal records
 */
export declare const getProposalCacheKeyPrefix = "NOUNS_PROPOSAL_";
/**
 * Key prefix for caching proposal expiry warning sent records
 */
export declare const getProposalExpiryWarningSentCacheKeyPrefix = "NOUNS_PROPOSAL_EXPIRY_WARNING_SENT_";
/**
 * Update the auction cache with `id`
 * @param id
 */
export declare function updateAuctionCache(id: number): Promise<void>;
/**
 * Get the contents of the bid cache
 * @returns The bid cache id or null
 */
export declare function getBidCache(): Promise<string>;
/**
 * Update the bid cache with an id
 * @param id The bid id to place in the cache
 */
export declare function updateBidCache(id: string): Promise<void>;
/**
 * Get the current tweet id to reply bids to or null
 * @returns The current tweet id to reply to or null
 */
export declare function getAuctionReplyTweetId(): Promise<string | null>;
/**
 * Update the cache with the id_str of the tweet to reply to next
 * @param id The id_str of the tweet
 */
export declare function updateAuctionReplyTweetId(id: string): Promise<void>;
/**
 * Get the last auction id processed for ending soon
 * @returns The last auction to be processed for ending soon
 */
export declare function getAuctionEndingSoonCache(): Promise<number>;
/**
 * Update the auction ending soon cache with `id`
 * @param id The auction id
 */
export declare function updateAuctionEndingSoonCache(id: number): Promise<void>;
/**
 * Get the current cache contents or 0 if empty
 * @returns The current cache contents as number or 0 if null
 */
export declare function getAuctionCache(): Promise<number>;
/**
 * Store a proposal into the redis cache
 * @param proposal Proposal to store
 * @returns "OK" | null
 */
export declare const updateProposalCache: (proposal: Proposal) => Promise<"OK" | null>;
/**
 * Attempt to fetch a proposal from the redis cache
 * @param id ID of the proposal to fetch
 * @returns Proposal | null
 */
export declare const getProposalCache: (id: number) => Promise<Proposal | null>;
/**
 * Store a proposal expiry notification receipt in the redis cache
 * @param id ID of the at-risk proposal
 * @returns "OK" | null
 */
export declare const setProposalExpiryWarningSent: (id: number) => Promise<"OK" | null>;
/**
 * Determine if an expiry warning has been sent for a specific proposal id
 * @param id ID of the at-risk proposal
 * @returns boolean
 */
export declare const hasWarnedOfExpiry: (id: number) => Promise<boolean>;
