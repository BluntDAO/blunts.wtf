import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MaliciousBidder, MaliciousBidderInterface } from "../../../contracts/test/MaliciousBidder";
declare type MaliciousBidderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MaliciousBidder__factory extends ContractFactory {
    constructor(...args: MaliciousBidderConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MaliciousBidder>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MaliciousBidder;
    connect(signer: Signer): MaliciousBidder__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610106806100206000396000f3fe60806040526004361060205760003560e01c806359d667a514602b57600080fd5b36602657fe5b600080fd5b603a6036366004609a565b603c565b005b60405163196774ad60e21b8152600481018290526001600160a01b0383169063659dd2b49034906024016000604051808303818588803b158015607e57600080fd5b505af11580156091573d6000803e3d6000fd5b50505050505050565b6000806040838503121560ac57600080fd5b82356001600160a01b038116811460c257600080fd5b94602093909301359350505056fea26469706673582212201c6401ab2d1272997572c5ea8dbefa99b84ea9b46b876053d95c047f37a813fa64736f6c63430008130033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): MaliciousBidderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MaliciousBidder;
}
export {};
