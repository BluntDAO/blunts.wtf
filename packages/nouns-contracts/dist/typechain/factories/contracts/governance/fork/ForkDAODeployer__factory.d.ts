import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ForkDAODeployer, ForkDAODeployerInterface } from "../../../../contracts/governance/fork/ForkDAODeployer";
declare type ForkDAODeployerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ForkDAODeployer__factory extends ContractFactory {
    constructor(...args: ForkDAODeployerConstructorParams);
    deploy(tokenImpl_: string, auctionImpl_: string, governorImpl_: string, treasuryImpl_: string, delayedGovernanceMaxDuration_: BigNumberish, initialVotingPeriod_: BigNumberish, initialVotingDelay_: BigNumberish, initialProposalThresholdBPS_: BigNumberish, initialQuorumVotesBPS_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ForkDAODeployer>;
    getDeployTransaction(tokenImpl_: string, auctionImpl_: string, governorImpl_: string, treasuryImpl_: string, delayedGovernanceMaxDuration_: BigNumberish, initialVotingPeriod_: BigNumberish, initialVotingDelay_: BigNumberish, initialProposalThresholdBPS_: BigNumberish, initialQuorumVotesBPS_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ForkDAODeployer;
    connect(signer: Signer): ForkDAODeployer__factory;
    static readonly bytecode = "0x6101a060405234801561001157600080fd5b50604051620017a3380380620017a383398101604081905261003291610091565b6001600160a01b0398891660805296881660a05294871660e0529290951660c0526101005261012093909352610140929092526101609190915261018052610116565b80516001600160a01b038116811461008c57600080fd5b919050565b60008060008060008060008060006101208a8c0312156100b057600080fd5b6100b98a610075565b98506100c760208b01610075565b97506100d560408b01610075565b96506100e360608b01610075565b955060808a0151945060a08a0151935060c08a0151925060e08a015191506101008a015190509295985092959850929598565b60805160a05160c05160e05161010051610120516101405161016051610180516115df620001c46000396000818160fb0152610c270152600081816101aa0152610c060152600081816101d20152610be50152600081816101fa0152610bc401526000818161015a0152610cb501526000818160b6015261033b015260008181610182015261039601526000818161013201526102de01526000818161025a015261028101526115df6000f3fe60806040523480156200001157600080fd5b5060043610620000ab5760003560e01c80636291ada6116200006e5780636291ada614620001a4578063b478513914620001cc578063cdc409bc14620001f4578063fb146943146200021c578063ffc4992f146200025457600080fd5b8063264aa22a14620000b05780633baae2e014620000f5578063428eb538146200012c5780634d2fc98814620001545780634dfbbdaa146200017c575b600080fd5b620000d87f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6200011d7f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001620000ec565b620000d87f000000000000000000000000000000000000000000000000000000000000000081565b6200011d7f000000000000000000000000000000000000000000000000000000000000000081565b620000d87f000000000000000000000000000000000000000000000000000000000000000081565b6200011d7f000000000000000000000000000000000000000000000000000000000000000081565b6200011d7f000000000000000000000000000000000000000000000000000000000000000081565b6200011d7f000000000000000000000000000000000000000000000000000000000000000081565b620002336200022d36600462000d62565b6200027c565b604080516001600160a01b03938416815292909116602083015201620000ec565b620000d87f000000000000000000000000000000000000000000000000000000000000000081565b6000807f0000000000000000000000000000000000000000000000000000000000000000604051620002ae9062000d3b565b620002ba919062000d95565b604051809103906000f080158015620002d7573d6000803e3d6000fd5b50905060007f00000000000000000000000000000000000000000000000000000000000000006040516200030b9062000d3b565b62000317919062000d95565b604051809103906000f08015801562000334573d6000803e3d6000fd5b50905060007f0000000000000000000000000000000000000000000000000000000000000000604051620003689062000d3b565b62000374919062000d95565b604051809103906000f08015801562000391573d6000803e3d6000fd5b5090507f0000000000000000000000000000000000000000000000000000000000000000604051620003c39062000d3b565b620003cf919062000d95565b604051809103906000f080158015620003ec573d6000803e3d6000fd5b5093506000620003fc8662000954565b905060006200040b8762000a2a565b9050846001600160a01b031663d6e9fe4687868a8b6001600160a01b031663d7e53db06040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200045e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000484919062000db8565b6200048f8862000ad3565b8d6001600160a01b031663aa34213b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015620004ce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004f4919062000de0565b6040516001600160e01b031960e089901b1681526001600160a01b039687166004820152948616602486015294909216604484015263ffffffff166064830152608482015260a481019190915260c481018b905260e401600060405180830381600087803b1580156200056657600080fd5b505af11580156200057b573d6000803e3d6000fd5b50505050836001600160a01b03166360fca2598787856001600160a01b0316633fc8cef36040518163ffffffff1660e01b8152600401602060405180830381865afa158015620005cf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005f5919062000e0c565b866001600160a01b031663ec91f2a46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000634573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200065a919062000de0565b876001600160a01b031663db2e1eed6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000699573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006bf919062000de0565b886001600160a01b031663b296024d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015620006fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000724919062000e2c565b896001600160a01b0316630fb5a6b46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000763573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000789919062000de0565b6040516001600160e01b031960e08a901b1681526001600160a01b03978816600482015295871660248701529590931660448501526064840191909152608483015260ff1660a482015260c481019190915260e401600060405180830381600087803b158015620007f957600080fd5b505af11580156200080e573d6000803e3d6000fd5b50505050620008208387878462000b48565b856001600160a01b031663cd6dc68784836001600160a01b0316636a42b8f86040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200086f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000895919062000de0565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015620008dc57600080fd5b505af1158015620008f1573d6000803e3d6000fd5b5050604080516001600160a01b0389811682528881166020830152878116828401528a16606082015290517ff11e5aab072e2cc757196bc832963c0379cd33b72bc31255118228d22aaa76909350908190036080019150a1505050509250929050565b600080826001600160a01b031663ced9481f6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000996573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620009bc919062000e0c565b9050806001600160a01b031663075461726040518163ffffffff1660e01b8152600401602060405180830381865afa158015620009fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000a23919062000e0c565b9392505050565b600080826001600160a01b031663ced9481f6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000a6c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000a92919062000e0c565b9050806001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015620009fd573d6000803e3d6000fd5b600080826001600160a01b0316637d9f6db56040518163ffffffff1660e01b815260040160c060405180830381865afa15801562000b15573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000b3b919062000e51565b5093979650505050505050565b6000816001600160a01b031663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000b89573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000baf919062000e0c565b9050846001600160a01b031663f56ac09c85857f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000886001600160a01b031663c37522d46040518163ffffffff1660e01b8152600401600060405180830381865afa15801562000c85573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000caf919081019062000ecf565b62000cdb7f00000000000000000000000000000000000000000000000000000000000000004262000fa2565b6040518963ffffffff1660e01b815260040162000d0098979695949392919062000fca565b600060405180830381600087803b15801562000d1b57600080fd5b505af115801562000d30573d6000803e3d6000fd5b505050505050505050565b610552806200105883390190565b6001600160a01b038116811462000d5f57600080fd5b50565b6000806040838503121562000d7657600080fd5b82359150602083013562000d8a8162000d49565b809150509250929050565b6001600160a01b0391909116815260406020820181905260009082015260600190565b60006020828403121562000dcb57600080fd5b815163ffffffff8116811462000a2357600080fd5b60006020828403121562000df357600080fd5b5051919050565b805162000e078162000d49565b919050565b60006020828403121562000e1f57600080fd5b815162000a238162000d49565b60006020828403121562000e3f57600080fd5b815160ff8116811462000a2357600080fd5b60008060008060008060c0878903121562000e6b57600080fd5b86519550602087015194506040870151935060608701519250608087015162000e948162000d49565b60a0880151909250801515811462000eab57600080fd5b809150509295509295509295565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121562000ee357600080fd5b825167ffffffffffffffff8082111562000efc57600080fd5b818501915085601f83011262000f1157600080fd5b81518181111562000f265762000f2662000eb9565b8060051b604051601f19603f8301168101818110858211171562000f4e5762000f4e62000eb9565b60405291825284820192508381018501918883111562000f6d57600080fd5b938501935b8285101562000f965762000f868562000dfa565b8452938501939285019262000f72565b98975050505050505050565b8082018082111562000fc457634e487b7160e01b600052601160045260246000fd5b92915050565b600061010080830160018060a01b03808d1685526020818d16818701528b60408701528a60608701528960808701528860a08701528360c0870152829350875180845261012087019450818901935060005b818110156200103c5784518416865294820194938201936001016200101c565b505050505060e092909201929092529897505050505050505056fe6080604052604051610552380380610552833981016040819052610022916102f8565b61004d60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd6103c6565b60008051602061050b83398151915214610069576100696103e7565b6100758282600061007c565b505061044c565b610085836100a8565b6000825111806100925750805b156100a3576100a183836100e8565b505b505050565b6100b181610116565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606061010d838360405180606001604052806027815260200161052b602791396101ae565b90505b92915050565b803b61017f5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b60008051602061050b83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060833b61020d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610176565b600080856001600160a01b03168560405161022891906103fd565b600060405180830381855af49150503d8060008114610263576040519150601f19603f3d011682016040523d82523d6000602084013e610268565b606091505b509092509050610279828286610285565b925050505b9392505050565b6060831561029457508161027e565b8251156102a45782518084602001fd5b8160405162461bcd60e51b81526004016101769190610419565b634e487b7160e01b600052604160045260246000fd5b60005b838110156102ef5781810151838201526020016102d7565b50506000910152565b6000806040838503121561030b57600080fd5b82516001600160a01b038116811461032257600080fd5b60208401519092506001600160401b038082111561033f57600080fd5b818501915085601f83011261035357600080fd5b815181811115610365576103656102be565b604051601f8201601f19908116603f0116810190838211818310171561038d5761038d6102be565b816040528281528860208487010111156103a657600080fd5b6103b78360208301602088016102d4565b80955050505050509250929050565b8181038181111561011057634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052600160045260246000fd5b6000825161040f8184602087016102d4565b9190910192915050565b60208152600082518060208401526104388160408501602087016102d4565b601f01601f19169190910160400192915050565b60b18061045a6000396000f3fe608060405236601057600e6013565b005b600e5b601f601b6021565b6058565b565b600060537f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156076573d6000f35b3d6000fdfea2646970667358221220faa26b8ef9de19fcbd3483f70b51efb12f1b5fb1257f68f5ad4e4be7ca86c42164736f6c63430008130033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212208da2acd66bd3b31dd5510095c2d5904f61b051d93f11f2172ee225aeb2e797df64736f6c63430008130033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): ForkDAODeployerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ForkDAODeployer;
}
export {};
