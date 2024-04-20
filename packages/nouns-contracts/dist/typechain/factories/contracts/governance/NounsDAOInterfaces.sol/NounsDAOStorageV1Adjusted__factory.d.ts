import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDAOStorageV1Adjusted, NounsDAOStorageV1AdjustedInterface } from "../../../../contracts/governance/NounsDAOInterfaces.sol/NounsDAOStorageV1Adjusted";
declare type NounsDAOStorageV1AdjustedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NounsDAOStorageV1Adjusted__factory extends ContractFactory {
    constructor(...args: NounsDAOStorageV1AdjustedConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDAOStorageV1Adjusted>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDAOStorageV1Adjusted;
    connect(signer: Signer): NounsDAOStorageV1Adjusted__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610209806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80635c60da1b116100715780635c60da1b1461014557806383cce0e114610158578063d33219b414610161578063d8bff44014610174578063da35c66414610187578063f851a4401461019057600080fd5b806302a251a3146100b957806314a67ea4146100d557806317977c61146100de57806326782247146100fe5780632de45f18146101295780633932abb11461013c575b600080fd5b6100c260055481565b6040519081526020015b60405180910390f35b6100c260065481565b6100c26100ec3660046101a3565b600c6020526000908152604090205481565b600154610111906001600160a01b031681565b6040516001600160a01b0390911681526020016100cc565b600a54610111906001600160a01b031681565b6100c260045481565b600254610111906001600160a01b031681565b6100c260075481565b600954610111906001600160a01b031681565b600354610111906001600160a01b031681565b6100c260085481565b600054610111906001600160a01b031681565b6000602082840312156101b557600080fd5b81356001600160a01b03811681146101cc57600080fd5b939250505056fea26469706673582212202105ca51c5860247787a7a2b381e73deee6ca668473b8ba1b8154c0334cb992a64736f6c63430008130033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): NounsDAOStorageV1AdjustedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDAOStorageV1Adjusted;
}
export {};
