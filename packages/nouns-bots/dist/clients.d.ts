import Redis from 'ioredis';
import TwitterApi from 'twitter-api-v2';
import { Contract, providers } from 'ethers';
import Discord from 'discord.js';
/**
 * Redis Client
 */
export declare const redis: Redis.Redis;
/**
 * Twitter Client
 */
export declare const twitter: TwitterApi;
/**
 * Ethers JSON RPC Provider
 */
export declare const jsonRpcProvider: providers.JsonRpcProvider;
/**
 * Nouns ERC721 Token Contract
 */
export declare const nounsTokenContract: Contract;
/**
 * Discord webhook client for sending messages to the private
 * Discord channel
 */
export declare const internalDiscordWebhook: Discord.WebhookClient;
/**
 * Discord webhook client for sending messages to the public
 * Discord channel
 */
export declare const publicDiscordWebhook: Discord.WebhookClient;
/**
 * Increment one of the Nouns infra counters
 * @param counterName counter name to increment
 * @returns
 */
export declare const incrementCounter: (counterName: string) => Promise<import("axios").AxiosResponse<any>>;
