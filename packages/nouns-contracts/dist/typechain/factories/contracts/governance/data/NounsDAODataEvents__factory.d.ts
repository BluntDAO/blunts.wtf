import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDAODataEvents, NounsDAODataEventsInterface } from "../../../../contracts/governance/data/NounsDAODataEvents";
declare type NounsDAODataEventsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NounsDAODataEvents__factory extends ContractFactory {
    constructor(...args: NounsDAODataEventsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDAODataEvents>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDAODataEvents;
    connect(signer: Signer): NounsDAODataEvents__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212206ac1a93eec8143d02ace7eaed14fb0ef0dc7ec78d0bcd49ad2695f058ac4ec4c64736f6c63430008130033";
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): NounsDAODataEventsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDAODataEvents;
}
export {};
