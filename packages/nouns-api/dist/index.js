"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = require("./server");
const api_1 = require("./api");
dotenv_1.default.config();
const app = (0, api_1.createAPI)();
(0, server_1.createServer)(app);
