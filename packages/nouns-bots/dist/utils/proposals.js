"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAtRiskOfExpiry = exports.extractProposalTitle = exports.extractNewVotes = exports.parseVote = exports.parseProposal = exports.parseProposalSubgraphResponse = void 0;
const ramda_1 = __importDefault(require("ramda"));
const SECONDS_IN_DAY = 60 * 60 * 24;
/**
 * Parse Proposal Subgraph Response into usable types
 * @param psgRes Response from Proposal Subgraph query
 * @returns Array of Proposals parsed as Numbers, etc
 */
const parseProposalSubgraphResponse = (psgRes) => ramda_1.default.map(exports.parseProposal, psgRes.proposals);
exports.parseProposalSubgraphResponse = parseProposalSubgraphResponse;
/**
 * Coerce Proposal into the correct types
 * @param proposal Proposal or proposal-like object
 * @returns Parsed Proposal object
 */
const parseProposal = (proposal) => (Object.assign(Object.assign({}, proposal), { id: Number(proposal.id), quorumVotes: Number(proposal.quorumVotes), proposalThreshold: Number(proposal.proposalThreshold), startBlock: Number(proposal.startBlock), endBlock: Number(proposal.endBlock), executionETA: Number(proposal.executionETA), votes: ramda_1.default.map(exports.parseVote, proposal.votes) }));
exports.parseProposal = parseProposal;
/**
 * Coerce Vote object into correct type
 * @param vote Vote or vote-like object
 * @returns Parsed Vote object
 */
const parseVote = (vote) => (Object.assign(Object.assign({}, vote), { votes: Number(vote.votes) }));
exports.parseVote = parseVote;
/**
 * Extract new votes between two proposal records
 * @param proposalBefore Previous proposal record
 * @param proposalAfter Current proposal record
 * @returns New votes present in the current record and not the previous record
 */
const extractNewVotes = (proposalBefore, proposalAfter) => {
    const previousStateVoteIds = ramda_1.default.map(ramda_1.default.prop('id'), proposalBefore.votes);
    return proposalAfter.votes.filter(vote => previousStateVoteIds.indexOf(vote.id) === -1 && vote.votes > 0);
};
exports.extractNewVotes = extractNewVotes;
/**
 * Extract the title from a proposal's description
 * @param proposal Proposal object
 * @returns Title extracted from description (first line)
 */
const extractProposalTitle = (proposal) => proposal.description.split('\n')[0].replace(/^#\s*/, '');
exports.extractProposalTitle = extractProposalTitle;
/**
 * Determine if the passed proposal is at-risk of expiry
 * @param proposal Proposal object
 */
const isAtRiskOfExpiry = (proposal) => {
    if (proposal.status !== 'QUEUED') {
        return false;
    }
    const expiresAt = proposal.executionETA + SECONDS_IN_DAY * 14;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const secondsUntilExpiry = expiresAt - currentTimestamp;
    // Proposals are at-risk of expiry if within 2 days of the 14 day limit
    return secondsUntilExpiry > 0 && secondsUntilExpiry <= SECONDS_IN_DAY * 2;
};
exports.isAtRiskOfExpiry = isAtRiskOfExpiry;
