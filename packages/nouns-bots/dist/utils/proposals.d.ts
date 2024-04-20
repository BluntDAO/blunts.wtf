import { Proposal, ProposalSubgraphResponse, Vote } from '../types';
/**
 * Parse Proposal Subgraph Response into usable types
 * @param psgRes Response from Proposal Subgraph query
 * @returns Array of Proposals parsed as Numbers, etc
 */
export declare const parseProposalSubgraphResponse: (psgRes: ProposalSubgraphResponse) => Proposal[];
/**
 * Coerce Proposal into the correct types
 * @param proposal Proposal or proposal-like object
 * @returns Parsed Proposal object
 */
export declare const parseProposal: (proposal: Proposal) => Proposal;
/**
 * Coerce Vote object into correct type
 * @param vote Vote or vote-like object
 * @returns Parsed Vote object
 */
export declare const parseVote: (vote: Vote) => Vote;
/**
 * Extract new votes between two proposal records
 * @param proposalBefore Previous proposal record
 * @param proposalAfter Current proposal record
 * @returns New votes present in the current record and not the previous record
 */
export declare const extractNewVotes: (proposalBefore: Proposal, proposalAfter: Proposal) => Vote[];
/**
 * Extract the title from a proposal's description
 * @param proposal Proposal object
 * @returns Title extracted from description (first line)
 */
export declare const extractProposalTitle: (proposal: Proposal) => string;
/**
 * Determine if the passed proposal is at-risk of expiry
 * @param proposal Proposal object
 */
export declare const isAtRiskOfExpiry: (proposal: Proposal) => boolean;
