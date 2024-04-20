import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDAOEventsV3, NounsDAOEventsV3Interface } from "../../../../contracts/governance/NounsDAOInterfaces.sol/NounsDAOEventsV3";
declare type NounsDAOEventsV3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NounsDAOEventsV3__factory extends ContractFactory {
    constructor(...args: NounsDAOEventsV3ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDAOEventsV3>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDAOEventsV3;
    connect(signer: Signer): NounsDAOEventsV3__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212201b6bc710638931ae6e3a0b0b663acfe491d6efb4ac25194c2af35c0b0d13f6bb64736f6c63430008130033";
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
    static createInterface(): NounsDAOEventsV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDAOEventsV3;
}
export {};
