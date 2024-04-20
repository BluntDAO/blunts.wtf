"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    redisPort: Number((_a = process.env.REDIS_PORT) !== null && _a !== void 0 ? _a : 6379),
    redisHost: (_b = process.env.REDIS_HOST) !== null && _b !== void 0 ? _b : 'localhost',
    redisDb: Number((_c = process.env.REDIS_DB) !== null && _c !== void 0 ? _c : 0),
    redisPassword: process.env.REDIS_PASSWORD,
    nounsSubgraph: (_d = process.env.NOUNS_SUBGRAPH_URL) !== null && _d !== void 0 ? _d : 'https://api.goldsky.com/api/public/project_cldf2o9pqagp43svvbk5u3kmo/subgraphs/nouns/0.1.0/gn',
    twitterEnabled: process.env.TWITTER_ENABLED === 'true',
    twitterAppKey: (_e = process.env.TWITTER_APP_KEY) !== null && _e !== void 0 ? _e : '',
    twitterAppSecret: (_f = process.env.TWITTER_APP_SECRET) !== null && _f !== void 0 ? _f : '',
    twitterAccessToken: (_g = process.env.TWITTER_ACCESS_TOKEN) !== null && _g !== void 0 ? _g : '',
    twitterAccessSecret: (_h = process.env.TWITTER_ACCESS_SECRET) !== null && _h !== void 0 ? _h : '',
    nounsTokenAddress: (_j = process.env.NOUNS_TOKEN_ADDRESS) !== null && _j !== void 0 ? _j : '0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03',
    jsonRpcUrl: (_k = process.env.JSON_RPC_URL) !== null && _k !== void 0 ? _k : 'http://localhost:8545',
    discordEnabled: process.env.DISCORD_ENABLED === 'true',
    discordWebhookToken: (_l = process.env.DISCORD_WEBHOOK_TOKEN) !== null && _l !== void 0 ? _l : '',
    discordWebhookId: (_m = process.env.DISCORD_WEBHOOK_ID) !== null && _m !== void 0 ? _m : '',
    discordPublicWebhookToken: (_o = process.env.DISCORD_PUBLIC_WEBHOOK_TOKEN) !== null && _o !== void 0 ? _o : '',
    discordPublicWebhookId: (_p = process.env.DISCORD_PUBLIC_WEBHOOK_ID) !== null && _p !== void 0 ? _p : '',
    pinataEnabled: process.env.PINATA_ENABLED === 'true',
    pinataApiKey: (_q = process.env.PINATA_API_KEY) !== null && _q !== void 0 ? _q : '',
    pinataApiSecretKey: (_r = process.env.PINATA_API_SECRET_KEY) !== null && _r !== void 0 ? _r : '',
};
