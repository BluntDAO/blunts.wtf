import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDAOEventsV2, NounsDAOEventsV2Interface } from "../../../../contracts/governance/NounsDAOInterfaces.sol/NounsDAOEventsV2";
declare type NounsDAOEventsV2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NounsDAOEventsV2__factory extends ContractFactory {
    constructor(...args: NounsDAOEventsV2ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDAOEventsV2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDAOEventsV2;
    connect(signer: Signer): NounsDAOEventsV2__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220b2fa18c08b68fc60c61d1c291d09b31904b6f87f5b089f3144764d8000d1c60364736f6c63430008130033";
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
    static createInterface(): NounsDAOEventsV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDAOEventsV2;
}
export {};
