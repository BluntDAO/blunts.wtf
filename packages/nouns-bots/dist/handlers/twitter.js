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
exports.TwitterAuctionLifecycleHandler = void 0;
const cache_1 = require("../cache");
const clients_1 = require("../clients");
const utils_1 = require("../utils");
class TwitterAuctionLifecycleHandler {
    /**
     * Tweet an image of the current noun alerting users
     * to the new auction and update the tweet reply id cache
     * @param auctionId The current auction ID
     */
    handleNewAuction(auctionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const png = yield (0, utils_1.getNounPngBuffer)(auctionId.toString());
            if (png) {
                console.log(`handleNewAuction tweeting discovered auction id ${auctionId}`);
                const mediaId = yield clients_1.twitter.v1.uploadMedia(png, { type: 'png' });
                const tweet = yield clients_1.twitter.v1.tweet((0, utils_1.formatAuctionStartedTweetText)(auctionId), {
                    media_ids: mediaId,
                });
                yield (0, cache_1.updateAuctionReplyTweetId)(tweet.id_str);
            }
            console.log(`processed twitter new auction ${auctionId}`);
        });
    }
    /**
     * Tweet a reply with new bid information to the reply id cache
     * We intentionally update the bid cache before safety checks to ensure we do not double tweet a bid
     * @param auctionId The current auction id
     * @param bid The current bid
     */
    handleNewBid(auctionId, bid) {
        return __awaiter(this, void 0, void 0, function* () {
            const tweetReplyId = yield (0, cache_1.getAuctionReplyTweetId)();
            if (!tweetReplyId) {
                console.error(`handleNewBid no reply tweet id exists: auction(${auctionId}) bid(${bid.id})`);
                return;
            }
            const tweet = yield clients_1.twitter.v1.reply(yield (0, utils_1.formatBidMessageText)(auctionId, bid), tweetReplyId);
            yield (0, cache_1.updateAuctionReplyTweetId)(tweet.id_str);
            console.log(`processed twitter new bid ${bid.id}:${auctionId}`);
        });
    }
    /**
     * Tweet a reply informing observers that the auction is ending soon
     * @param auctionId The current auction id
     */
    handleAuctionEndingSoon(auctionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const tweetReplyId = yield (0, cache_1.getAuctionReplyTweetId)();
            if (!tweetReplyId) {
                console.error(`handleAuctionEndingSoon no reply tweet id exists for auction ${auctionId}`);
                return;
            }
            const tweet = yield clients_1.twitter.v1.reply((0, utils_1.getAuctionEndingSoonTweetText)(), tweetReplyId);
            yield (0, cache_1.updateAuctionReplyTweetId)(tweet.id_str);
            console.log(`processed twitter auction ending soon update for auction ${auctionId}`);
        });
    }
}
exports.TwitterAuctionLifecycleHandler = TwitterAuctionLifecycleHandler;
