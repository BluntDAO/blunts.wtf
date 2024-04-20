import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDAOV3DynamicQuorum, NounsDAOV3DynamicQuorumInterface } from "../../../contracts/governance/NounsDAOV3DynamicQuorum";
declare type NounsDAOV3DynamicQuorumConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NounsDAOV3DynamicQuorum__factory extends ContractFactory {
    constructor(...args: NounsDAOV3DynamicQuorumConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDAOV3DynamicQuorum>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDAOV3DynamicQuorum;
    connect(signer: Signer): NounsDAOV3DynamicQuorum__factory;
    static readonly bytecode = "0x61027a61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063af7d88eb1461003a575b600080fd5b61004d610048366004610131565b61005f565b60405190815260200160405180910390f35b6000808361006f866127106101f8565b610079919061020f565b90506000620f424082856040015163ffffffff1661009791906101f8565b6100a1919061020f565b9050600081856000015161ffff166100b99190610231565b905060006100cf866020015161ffff16836100e7565b90506100db8188610101565b98975050505050505050565b60008183106100f657816100f8565b825b90505b92915050565b600061271061011084846101f8565b6100f8919061020f565b803561ffff8116811461012c57600080fd5b919050565b600080600083850360a081121561014757600080fd5b84359350602085013592506060603f198201121561016457600080fd5b506040516060810181811067ffffffffffffffff8211171561019657634e487b7160e01b600052604160045260246000fd5b80604052506101a76040860161011a565b81526101b56060860161011a565b6020820152608085013563ffffffff811681146101d157600080fd5b604082015292959194509192509050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176100fb576100fb6101e2565b60008261022c57634e487b7160e01b600052601260045260246000fd5b500490565b808201808211156100fb576100fb6101e256fea26469706673582212207b2747d47e9eeec7b0431d384e0a12e45a2fc01c8460037eb30fa5d8e6ead97f64736f6c63430008130033";
    static readonly abi: ({
        inputs: never[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): NounsDAOV3DynamicQuorumInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDAOV3DynamicQuorum;
}
export {};
