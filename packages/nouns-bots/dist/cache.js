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
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasWarnedOfExpiry = exports.setProposalExpiryWarningSent = exports.getProposalCache = exports.updateProposalCache = exports.getAuctionCache = exports.updateAuctionEndingSoonCache = exports.getAuctionEndingSoonCache = exports.updateAuctionReplyTweetId = exports.getAuctionReplyTweetId = exports.updateBidCache = exports.getBidCache = exports.updateAuctionCache = exports.getProposalExpiryWarningSentCacheKeyPrefix = exports.getProposalCacheKeyPrefix = exports.getAuctionEndingSoonCacheKey = exports.getReplyTweetIdKey = exports.getBidCacheKey = exports.getAuctionCacheKey = void 0;
const clients_1 = require("./clients");
/**
 * Key mapped to the current auction
 */
exports.getAuctionCacheKey = 'NOUNS_AUCTION_CACHE';
/**
 * Key mapped to the last processed bid
 */
exports.getBidCacheKey = 'NOUNS_BID_CACHE';
/**
 * Key mapped to the tweet id to reply updates to
 */
exports.getReplyTweetIdKey = 'NOUNS_REPLY_TWEET_ID';
/**
 * Key mapped to the latest auction id processed for auction ending soon
 */
exports.getAuctionEndingSoonCacheKey = 'NOUNS_AUCTION_ENDING_SOON_CACHE';
/**
 * Key prefix for caching proposal records
 */
exports.getProposalCacheKeyPrefix = 'NOUNS_PROPOSAL_';
/**
 * Key prefix for caching proposal expiry warning sent records
 */
exports.getProposalExpiryWarningSentCacheKeyPrefix = 'NOUNS_PROPOSAL_EXPIRY_WARNING_SENT_';
/**
 * Update the auction cache with `id`
 * @param id
 */
function updateAuctionCache(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield clients_1.redis.set(exports.getAuctionCacheKey, id);
    });
}
exports.updateAuctionCache = updateAuctionCache;
/**
 * Get the contents of the bid cache
 * @returns The bid cache id or null
 */
function getBidCache() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        return (_a = (yield clients_1.redis.get(exports.getBidCacheKey))) !== null && _a !== void 0 ? _a : '';
    });
}
exports.getBidCache = getBidCache;
/**
 * Update the bid cache with an id
 * @param id The bid id to place in the cache
 */
function updateBidCache(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield clients_1.redis.set(exports.getBidCacheKey, id);
    });
}
exports.updateBidCache = updateBidCache;
/**
 * Get the current tweet id to reply bids to or null
 * @returns The current tweet id to reply to or null
 */
function getAuctionReplyTweetId() {
    return __awaiter(this, void 0, void 0, function* () {
        return clients_1.redis.get(exports.getReplyTweetIdKey);
    });
}
exports.getAuctionReplyTweetId = getAuctionReplyTweetId;
/**
 * Update the cache with the id_str of the tweet to reply to next
 * @param id The id_str of the tweet
 */
function updateAuctionReplyTweetId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield clients_1.redis.set(exports.getReplyTweetIdKey, id);
    });
}
exports.updateAuctionReplyTweetId = updateAuctionReplyTweetId;
/**
 * Get the last auction id processed for ending soon
 * @returns The last auction to be processed for ending soon
 */
function getAuctionEndingSoonCache() {
    return __awaiter(this, void 0, void 0, function* () {
        const auctionId = yield clients_1.redis.get(exports.getAuctionEndingSoonCacheKey);
        if (auctionId) {
            return Number(auctionId);
        }
        return 0;
    });
}
exports.getAuctionEndingSoonCache = getAuctionEndingSoonCache;
/**
 * Update the auction ending soon cache with `id`
 * @param id The auction id
 */
function updateAuctionEndingSoonCache(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield clients_1.redis.set(exports.getAuctionEndingSoonCacheKey, id);
    });
}
exports.updateAuctionEndingSoonCache = updateAuctionEndingSoonCache;
/**
 * Get the current cache contents or 0 if empty
 * @returns The current cache contents as number or 0 if null
 */
function getAuctionCache() {
    return __awaiter(this, void 0, void 0, function* () {
        const auctionId = yield clients_1.redis.get(exports.getAuctionCacheKey);
        if (auctionId) {
            return Number(auctionId);
        }
        return 0;
    });
}
exports.getAuctionCache = getAuctionCache;
/**
 * Proposal functions
 */
/**
 * Build the proposal cache redis key
 * @param id Proposal ID
 * @returns Proposal cache redis key
 */
const proposalCacheKey = (id) => `${exports.getProposalCacheKeyPrefix}${id}`;
/**
 * Build the proposal expiry warning sent cache redis key
 * @param id Proposal ID
 * @returns Proposal expiry warning sent cache redis key
 */
// prettier-ignore
const proposalExpiryWarningSentCacheKey = (id) => `${exports.getProposalExpiryWarningSentCacheKeyPrefix}${id}`;
/**
 * Store a proposal into the redis cache
 * @param proposal Proposal to store
 * @returns "OK" | null
 */
const updateProposalCache = (proposal) => __awaiter(void 0, void 0, void 0, function* () {
    const cacheKey = proposalCacheKey(proposal.id);
    return yield clients_1.redis.set(cacheKey, JSON.stringify(proposal));
});
exports.updateProposalCache = updateProposalCache;
/**
 * Attempt to fetch a proposal from the redis cache
 * @param id ID of the proposal to fetch
 * @returns Proposal | null
 */
const getProposalCache = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const cacheKey = proposalCacheKey(id);
    const proposal = yield clients_1.redis.get(cacheKey);
    if (proposal) {
        return JSON.parse(proposal);
    }
    return null;
});
exports.getProposalCache = getProposalCache;
/**
 * Store a proposal expiry notification receipt in the redis cache
 * @param id ID of the at-risk proposal
 * @returns "OK" | null
 */
const setProposalExpiryWarningSent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const cacheKey = proposalExpiryWarningSentCacheKey(id);
    return clients_1.redis.set(cacheKey, 1);
});
exports.setProposalExpiryWarningSent = setProposalExpiryWarningSent;
/**
 * Determine if an expiry warning has been sent for a specific proposal id
 * @param id ID of the at-risk proposal
 * @returns boolean
 */
const hasWarnedOfExpiry = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const cacheKey = proposalExpiryWarningSentCacheKey(id);
    return Boolean(yield clients_1.redis.exists(cacheKey));
});
exports.hasWarnedOfExpiry = hasWarnedOfExpiry;
