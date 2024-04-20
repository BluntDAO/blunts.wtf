"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementCounter = exports.publicDiscordWebhook = exports.internalDiscordWebhook = exports.nounsTokenContract = exports.jsonRpcProvider = exports.twitter = exports.redis = void 0;
const config_1 = require("./config");
const ioredis_1 = __importDefault(require("ioredis"));
const twitter_api_v2_1 = __importDefault(require("twitter-api-v2"));
const ethers_1 = require("ethers");
const contracts_1 = require("@nouns/contracts");
const discord_js_1 = __importDefault(require("discord.js"));
const axios_1 = __importDefault(require("axios"));
/**
 * Redis Client
 */
exports.redis = new ioredis_1.default(config_1.config.redisPort, config_1.config.redisHost, {
    db: config_1.config.redisDb,
    password: config_1.config.redisPassword,
});
/**
 * Twitter Client
 */
exports.twitter = new twitter_api_v2_1.default({
    appKey: config_1.config.twitterAppKey,
    appSecret: config_1.config.twitterAppSecret,
    accessToken: config_1.config.twitterAccessToken,
    accessSecret: config_1.config.twitterAccessSecret,
});
/**
 * Ethers JSON RPC Provider
 */
exports.jsonRpcProvider = new ethers_1.providers.JsonRpcProvider(config_1.config.jsonRpcUrl);
/**
 * Nouns ERC721 Token Contract
 */
exports.nounsTokenContract = new ethers_1.Contract(config_1.config.nounsTokenAddress, contracts_1.NounsTokenABI, exports.jsonRpcProvider);
/**
 * Discord webhook client for sending messages to the private
 * Discord channel
 */
exports.internalDiscordWebhook = new discord_js_1.default.WebhookClient(config_1.config.discordWebhookId, config_1.config.discordWebhookToken);
/**
 * Discord webhook client for sending messages to the public
 * Discord channel
 */
exports.publicDiscordWebhook = new discord_js_1.default.WebhookClient(config_1.config.discordPublicWebhookId, config_1.config.discordPublicWebhookToken);
/**
 * Increment one of the Nouns infra counters
 * @param counterName counter name to increment
 * @returns
 */
const incrementCounter = (counterName) => axios_1.default.post(`https://simple-counter.nouns.tools/count/inc/${counterName}`);
exports.incrementCounter = incrementCounter;
