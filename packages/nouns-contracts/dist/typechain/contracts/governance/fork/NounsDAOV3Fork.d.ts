import type { BaseContract, BigNumber, BigNumberish, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface NounsDAOV3ForkInterface extends utils.Interface {
    functions: {};
    events: {
        "DAONounsSupplyIncreasedFromEscrow(uint256,address)": EventFragment;
        "DAOWithdrawNounsFromEscrow(uint256[],address)": EventFragment;
        "EscrowedToFork(uint32,address,uint256[],uint256[],string)": EventFragment;
        "ExecuteFork(uint32,address,address,uint256,uint256)": EventFragment;
        "JoinFork(uint32,address,uint256[],uint256[],string)": EventFragment;
        "WithdrawFromForkEscrow(uint32,address,uint256[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DAONounsSupplyIncreasedFromEscrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DAOWithdrawNounsFromEscrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EscrowedToFork"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecuteFork"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "JoinFork"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawFromForkEscrow"): EventFragment;
}
export interface DAONounsSupplyIncreasedFromEscrowEventObject {
    numTokens: BigNumber;
    to: string;
}
export declare type DAONounsSupplyIncreasedFromEscrowEvent = TypedEvent<[
    BigNumber,
    string
], DAONounsSupplyIncreasedFromEscrowEventObject>;
export declare type DAONounsSupplyIncreasedFromEscrowEventFilter = TypedEventFilter<DAONounsSupplyIncreasedFromEscrowEvent>;
export interface DAOWithdrawNounsFromEscrowEventObject {
    tokenIds: BigNumber[];
    to: string;
}
export declare type DAOWithdrawNounsFromEscrowEvent = TypedEvent<[
    BigNumber[],
    string
], DAOWithdrawNounsFromEscrowEventObject>;
export declare type DAOWithdrawNounsFromEscrowEventFilter = TypedEventFilter<DAOWithdrawNounsFromEscrowEvent>;
export interface EscrowedToForkEventObject {
    forkId: number;
    owner: string;
    tokenIds: BigNumber[];
    proposalIds: BigNumber[];
    reason: string;
}
export declare type EscrowedToForkEvent = TypedEvent<[
    number,
    string,
    BigNumber[],
    BigNumber[],
    string
], EscrowedToForkEventObject>;
export declare type EscrowedToForkEventFilter = TypedEventFilter<EscrowedToForkEvent>;
export interface ExecuteForkEventObject {
    forkId: number;
    forkTreasury: string;
    forkToken: string;
    forkEndTimestamp: BigNumber;
    tokensInEscrow: BigNumber;
}
export declare type ExecuteForkEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber,
    BigNumber
], ExecuteForkEventObject>;
export declare type ExecuteForkEventFilter = TypedEventFilter<ExecuteForkEvent>;
export interface JoinForkEventObject {
    forkId: number;
    owner: string;
    tokenIds: BigNumber[];
    proposalIds: BigNumber[];
    reason: string;
}
export declare type JoinForkEvent = TypedEvent<[
    number,
    string,
    BigNumber[],
    BigNumber[],
    string
], JoinForkEventObject>;
export declare type JoinForkEventFilter = TypedEventFilter<JoinForkEvent>;
export interface WithdrawFromForkEscrowEventObject {
    forkId: number;
    owner: string;
    tokenIds: BigNumber[];
}
export declare type WithdrawFromForkEscrowEvent = TypedEvent<[
    number,
    string,
    BigNumber[]
], WithdrawFromForkEscrowEventObject>;
export declare type WithdrawFromForkEscrowEventFilter = TypedEventFilter<WithdrawFromForkEscrowEvent>;
export interface NounsDAOV3Fork extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsDAOV3ForkInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "DAONounsSupplyIncreasedFromEscrow(uint256,address)"(numTokens?: null, to?: null): DAONounsSupplyIncreasedFromEscrowEventFilter;
        DAONounsSupplyIncreasedFromEscrow(numTokens?: null, to?: null): DAONounsSupplyIncreasedFromEscrowEventFilter;
        "DAOWithdrawNounsFromEscrow(uint256[],address)"(tokenIds?: null, to?: null): DAOWithdrawNounsFromEscrowEventFilter;
        DAOWithdrawNounsFromEscrow(tokenIds?: null, to?: null): DAOWithdrawNounsFromEscrowEventFilter;
        "EscrowedToFork(uint32,address,uint256[],uint256[],string)"(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null, proposalIds?: null, reason?: null): EscrowedToForkEventFilter;
        EscrowedToFork(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null, proposalIds?: null, reason?: null): EscrowedToForkEventFilter;
        "ExecuteFork(uint32,address,address,uint256,uint256)"(forkId?: BigNumberish | null, forkTreasury?: null, forkToken?: null, forkEndTimestamp?: null, tokensInEscrow?: null): ExecuteForkEventFilter;
        ExecuteFork(forkId?: BigNumberish | null, forkTreasury?: null, forkToken?: null, forkEndTimestamp?: null, tokensInEscrow?: null): ExecuteForkEventFilter;
        "JoinFork(uint32,address,uint256[],uint256[],string)"(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null, proposalIds?: null, reason?: null): JoinForkEventFilter;
        JoinFork(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null, proposalIds?: null, reason?: null): JoinForkEventFilter;
        "WithdrawFromForkEscrow(uint32,address,uint256[])"(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null): WithdrawFromForkEscrowEventFilter;
        WithdrawFromForkEscrow(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null): WithdrawFromForkEscrowEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
