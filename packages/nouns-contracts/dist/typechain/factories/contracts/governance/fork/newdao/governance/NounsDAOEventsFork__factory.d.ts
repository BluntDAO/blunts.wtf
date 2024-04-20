import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDAOEventsFork, NounsDAOEventsForkInterface } from "../../../../../../contracts/governance/fork/newdao/governance/NounsDAOEventsFork";
declare type NounsDAOEventsForkConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NounsDAOEventsFork__factory extends ContractFactory {
    constructor(...args: NounsDAOEventsForkConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDAOEventsFork>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDAOEventsFork;
    connect(signer: Signer): NounsDAOEventsFork__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220ad65d77c108c2e7728dc2a4569125da417f939b2bde1ef6f06bd237c1a8cc10564736f6c63430008130033";
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
    static createInterface(): NounsDAOEventsForkInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDAOEventsFork;
}
export {};
