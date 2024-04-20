import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDAOEvents, NounsDAOEventsInterface } from "../../../../contracts/governance/NounsDAOInterfaces.sol/NounsDAOEvents";
declare type NounsDAOEventsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NounsDAOEvents__factory extends ContractFactory {
    constructor(...args: NounsDAOEventsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDAOEvents>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDAOEvents;
    connect(signer: Signer): NounsDAOEvents__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220d70e4b9a3cdd83d06ad287594094da256929f597597942c03b9c6005be52365a64736f6c63430008130033";
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
    static createInterface(): NounsDAOEventsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDAOEvents;
}
export {};
