import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDAOProxyStorage, NounsDAOProxyStorageInterface } from "../../../../contracts/governance/NounsDAOInterfaces.sol/NounsDAOProxyStorage";
declare type NounsDAOProxyStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NounsDAOProxyStorage__factory extends ContractFactory {
    constructor(...args: NounsDAOProxyStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDAOProxyStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDAOProxyStorage;
    connect(signer: Signer): NounsDAOProxyStorage__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060c98061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063267822471460415780635c60da1b14606f578063f851a440146081575b600080fd5b6001546053906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6002546053906001600160a01b031681565b6000546053906001600160a01b03168156fea2646970667358221220a229a9935817d79ccba0faad16f3c6634bf462315cb5590290a18ad226b499cc64736f6c63430008130033";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): NounsDAOProxyStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDAOProxyStorage;
}
export {};
