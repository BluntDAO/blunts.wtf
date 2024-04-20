import { IAuctionLifecycleHandler, Bid } from '../types';
export declare class TwitterAuctionLifecycleHandler implements IAuctionLifecycleHandler {
    /**
     * Tweet an image of the current noun alerting users
     * to the new auction and update the tweet reply id cache
     * @param auctionId The current auction ID
     */
    handleNewAuction(auctionId: number): Promise<void>;
    /**
     * Tweet a reply with new bid information to the reply id cache
     * We intentionally update the bid cache before safety checks to ensure we do not double tweet a bid
     * @param auctionId The current auction id
     * @param bid The current bid
     */
    handleNewBid(auctionId: number, bid: Bid): Promise<void>;
    /**
     * Tweet a reply informing observers that the auction is ending soon
     * @param auctionId The current auction id
     */
    handleAuctionEndingSoon(auctionId: number): Promise<void>;
}
