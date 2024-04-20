import { AuctionBids, Proposal } from './types';
/**
 * Query the subgraph and return the last auction id and bid created.
 * @returns The last auction id and bid from the subgraph.
 */
export declare function getLastAuctionBids(): Promise<AuctionBids>;
/**
 * Query the subgraph and return all proposals and votes
 * @returns All proposals and votes from the subgraph
 */
export declare function getAllProposals(): Promise<Proposal[]>;
