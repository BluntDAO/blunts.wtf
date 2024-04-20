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
exports.getAllProposals = exports.getLastAuctionBids = void 0;
const graphql_request_1 = require("graphql-request");
const config_1 = require("./config");
const proposals_1 = require("./utils/proposals");
/**
 * Query the subgraph and return the last auction id and bid created.
 * @returns The last auction id and bid from the subgraph.
 */
function getLastAuctionBids() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield (0, graphql_request_1.request)(config_1.config.nounsSubgraph, (0, graphql_request_1.gql) `
      query {
        auctions(orderBy: startTime, orderDirection: desc, first: 1) {
          id
          endTime
          bids(orderBy: blockNumber, orderDirection: desc, first: 1) {
            id
            amount
            bidder {
              id
            }
          }
        }
      }
    `);
        return res.auctions[0];
    });
}
exports.getLastAuctionBids = getLastAuctionBids;
/**
 * Query the subgraph and return all proposals and votes
 * @returns All proposals and votes from the subgraph
 */
function getAllProposals() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield (0, graphql_request_1.request)(config_1.config.nounsSubgraph, (0, graphql_request_1.gql) `
      {
        proposals {
          id
          proposer {
            id
          }
          description
          status
          quorumVotes
          proposalThreshold
          startBlock
          endBlock
          executionETA
          votes {
            id
            voter {
              id
            }
            votes
            supportDetailed
            reason
          }
        }
      }
    `);
        return (0, proposals_1.parseProposalSubgraphResponse)(res);
    });
}
exports.getAllProposals = getAllProposals;
