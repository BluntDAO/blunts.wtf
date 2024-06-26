"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISVGRenderer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "bytes",
                                name: "image",
                                type: "bytes",
                            },
                            {
                                internalType: "bytes",
                                name: "palette",
                                type: "bytes",
                            },
                        ],
                        internalType: "struct ISVGRenderer.Part[]",
                        name: "parts",
                        type: "tuple[]",
                    },
                    {
                        internalType: "string",
                        name: "background",
                        type: "string",
                    },
                ],
                internalType: "struct ISVGRenderer.SVGParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "generateSVG",
        outputs: [
            {
                internalType: "string",
                name: "svg",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes",
                        name: "image",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "palette",
                        type: "bytes",
                    },
                ],
                internalType: "struct ISVGRenderer.Part",
                name: "part",
                type: "tuple",
            },
        ],
        name: "generateSVGPart",
        outputs: [
            {
                internalType: "string",
                name: "partialSVG",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes",
                        name: "image",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "palette",
                        type: "bytes",
                    },
                ],
                internalType: "struct ISVGRenderer.Part[]",
                name: "parts",
                type: "tuple[]",
            },
        ],
        name: "generateSVGParts",
        outputs: [
            {
                internalType: "string",
                name: "partialSVG",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class ISVGRenderer__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISVGRenderer__factory = ISVGRenderer__factory;
ISVGRenderer__factory.abi = _abi;
