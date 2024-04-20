import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace NounsDAOStorageV3 {
    type DynamicQuorumParamsStruct = {
        minQuorumVotesBPS: BigNumberish;
        maxQuorumVotesBPS: BigNumberish;
        quorumCoefficient: BigNumberish;
    };
    type DynamicQuorumParamsStructOutput = [number, number, number] & {
        minQuorumVotesBPS: number;
        maxQuorumVotesBPS: number;
        quorumCoefficient: number;
    };
    type ReceiptStruct = {
        hasVoted: boolean;
        support: BigNumberish;
        votes: BigNumberish;
    };
    type ReceiptStructOutput = [boolean, number, BigNumber] & {
        hasVoted: boolean;
        support: number;
        votes: BigNumber;
    };
    type NounsDAOParamsStruct = {
        votingPeriod: BigNumberish;
        votingDelay: BigNumberish;
        proposalThresholdBPS: BigNumberish;
        lastMinuteWindowInBlocks: BigNumberish;
        objectionPeriodDurationInBlocks: BigNumberish;
        proposalUpdatablePeriodInBlocks: BigNumberish;
    };
    type NounsDAOParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number,
        number
    ] & {
        votingPeriod: BigNumber;
        votingDelay: BigNumber;
        proposalThresholdBPS: BigNumber;
        lastMinuteWindowInBlocks: number;
        objectionPeriodDurationInBlocks: number;
        proposalUpdatablePeriodInBlocks: number;
    };
    type ProposalCondensedStruct = {
        id: BigNumberish;
        proposer: string;
        proposalThreshold: BigNumberish;
        quorumVotes: BigNumberish;
        eta: BigNumberish;
        startBlock: BigNumberish;
        endBlock: BigNumberish;
        forVotes: BigNumberish;
        againstVotes: BigNumberish;
        abstainVotes: BigNumberish;
        canceled: boolean;
        vetoed: boolean;
        executed: boolean;
        totalSupply: BigNumberish;
        creationBlock: BigNumberish;
        signers: string[];
        updatePeriodEndBlock: BigNumberish;
        objectionPeriodEndBlock: BigNumberish;
        executeOnTimelockV1: boolean;
    };
    type ProposalCondensedStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        string[],
        BigNumber,
        BigNumber,
        boolean
    ] & {
        id: BigNumber;
        proposer: string;
        proposalThreshold: BigNumber;
        quorumVotes: BigNumber;
        eta: BigNumber;
        startBlock: BigNumber;
        endBlock: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        abstainVotes: BigNumber;
        canceled: boolean;
        vetoed: boolean;
        executed: boolean;
        totalSupply: BigNumber;
        creationBlock: BigNumber;
        signers: string[];
        updatePeriodEndBlock: BigNumber;
        objectionPeriodEndBlock: BigNumber;
        executeOnTimelockV1: boolean;
    };
    type ProposerSignatureStruct = {
        sig: BytesLike;
        signer: string;
        expirationTimestamp: BigNumberish;
    };
    type ProposerSignatureStructOutput = [string, string, BigNumber] & {
        sig: string;
        signer: string;
        expirationTimestamp: BigNumber;
    };
    type DynamicQuorumParamsCheckpointStruct = {
        fromBlock: BigNumberish;
        params: NounsDAOStorageV3.DynamicQuorumParamsStruct;
    };
    type DynamicQuorumParamsCheckpointStructOutput = [
        number,
        NounsDAOStorageV3.DynamicQuorumParamsStructOutput
    ] & {
        fromBlock: number;
        params: NounsDAOStorageV3.DynamicQuorumParamsStructOutput;
    };
}
export declare namespace NounsDAOStorageV2 {
    type ProposalCondensedStruct = {
        id: BigNumberish;
        proposer: string;
        proposalThreshold: BigNumberish;
        quorumVotes: BigNumberish;
        eta: BigNumberish;
        startBlock: BigNumberish;
        endBlock: BigNumberish;
        forVotes: BigNumberish;
        againstVotes: BigNumberish;
        abstainVotes: BigNumberish;
        canceled: boolean;
        vetoed: boolean;
        executed: boolean;
        totalSupply: BigNumberish;
        creationBlock: BigNumberish;
    };
    type ProposalCondensedStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        id: BigNumber;
        proposer: string;
        proposalThreshold: BigNumber;
        quorumVotes: BigNumber;
        eta: BigNumber;
        startBlock: BigNumber;
        endBlock: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        abstainVotes: BigNumber;
        canceled: boolean;
        vetoed: boolean;
        executed: boolean;
        totalSupply: BigNumber;
        creationBlock: BigNumber;
    };
}
export interface NounsDAOLogicV3HarnessInterface extends utils.Interface {
    functions: {
        "MAX_PROPOSAL_THRESHOLD_BPS()": FunctionFragment;
        "MAX_VOTING_DELAY()": FunctionFragment;
        "MAX_VOTING_PERIOD()": FunctionFragment;
        "MIN_PROPOSAL_THRESHOLD_BPS()": FunctionFragment;
        "MIN_VOTING_DELAY()": FunctionFragment;
        "MIN_VOTING_PERIOD()": FunctionFragment;
        "_acceptAdmin()": FunctionFragment;
        "_acceptVetoer()": FunctionFragment;
        "_burnVetoPower()": FunctionFragment;
        "_setDynamicQuorumParams(uint16,uint16,uint32)": FunctionFragment;
        "_setErc20TokensToIncludeInFork(address[])": FunctionFragment;
        "_setForkDAODeployer(address)": FunctionFragment;
        "_setForkEscrow(address)": FunctionFragment;
        "_setForkParams(address,address,address[],uint256,uint256)": FunctionFragment;
        "_setForkPeriod(uint256)": FunctionFragment;
        "_setForkThresholdBPS(uint256)": FunctionFragment;
        "_setLastMinuteWindowInBlocks(uint32)": FunctionFragment;
        "_setMaxQuorumVotesBPS(uint16)": FunctionFragment;
        "_setMinQuorumVotesBPS(uint16)": FunctionFragment;
        "_setObjectionPeriodDurationInBlocks(uint32)": FunctionFragment;
        "_setPendingAdmin(address)": FunctionFragment;
        "_setPendingVetoer(address)": FunctionFragment;
        "_setProposalThresholdBPS(uint256)": FunctionFragment;
        "_setProposalUpdatablePeriodInBlocks(uint32)": FunctionFragment;
        "_setQuorumCoefficient(uint32)": FunctionFragment;
        "_setTimelocksAndAdmin(address,address,address)": FunctionFragment;
        "_setVoteSnapshotBlockSwitchProposalId()": FunctionFragment;
        "_setVotingDelay(uint256)": FunctionFragment;
        "_setVotingPeriod(uint256)": FunctionFragment;
        "_withdraw()": FunctionFragment;
        "adjustedTotalSupply()": FunctionFragment;
        "cancel(uint256)": FunctionFragment;
        "cancelSig(bytes)": FunctionFragment;
        "castRefundableVote(uint256,uint8)": FunctionFragment;
        "castRefundableVoteWithReason(uint256,uint8,string)": FunctionFragment;
        "castVote(uint256,uint8)": FunctionFragment;
        "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)": FunctionFragment;
        "castVoteWithReason(uint256,uint8,string)": FunctionFragment;
        "dynamicQuorumVotes(uint256,uint256,(uint16,uint16,uint32))": FunctionFragment;
        "erc20TokensToIncludeInFork()": FunctionFragment;
        "escrowToFork(uint256[],uint256[],string)": FunctionFragment;
        "execute(uint256)": FunctionFragment;
        "executeFork()": FunctionFragment;
        "executeOnTimelockV1(uint256)": FunctionFragment;
        "forkDAODeployer()": FunctionFragment;
        "forkEndTimestamp()": FunctionFragment;
        "forkEscrow()": FunctionFragment;
        "forkPeriod()": FunctionFragment;
        "forkThreshold()": FunctionFragment;
        "forkThresholdBPS()": FunctionFragment;
        "getActions(uint256)": FunctionFragment;
        "getDynamicQuorumParamsAt(uint256)": FunctionFragment;
        "getReceipt(uint256,address)": FunctionFragment;
        "initialize(address,address,address,address,address,(uint256,uint256,uint256,uint32,uint32,uint32),(uint16,uint16,uint32))": FunctionFragment;
        "joinFork(uint256[],uint256[],string)": FunctionFragment;
        "lastMinuteWindowInBlocks()": FunctionFragment;
        "latestProposalIds(address)": FunctionFragment;
        "maxQuorumVotes()": FunctionFragment;
        "minQuorumVotes()": FunctionFragment;
        "nouns()": FunctionFragment;
        "numTokensInForkEscrow()": FunctionFragment;
        "objectionPeriodDurationInBlocks()": FunctionFragment;
        "pendingVetoer()": FunctionFragment;
        "proposalCount()": FunctionFragment;
        "proposalMaxOperations()": FunctionFragment;
        "proposalThreshold()": FunctionFragment;
        "proposalThresholdBPS()": FunctionFragment;
        "proposalUpdatablePeriodInBlocks()": FunctionFragment;
        "proposals(uint256)": FunctionFragment;
        "proposalsV3(uint256)": FunctionFragment;
        "propose(address[],uint256[],string[],bytes[],string)": FunctionFragment;
        "proposeBySigs((bytes,address,uint256)[],address[],uint256[],string[],bytes[],string)": FunctionFragment;
        "proposeOnTimelockV1(address[],uint256[],string[],bytes[],string)": FunctionFragment;
        "queue(uint256)": FunctionFragment;
        "quorumParamsCheckpoints()": FunctionFragment;
        "quorumParamsCheckpoints(uint256)": FunctionFragment;
        "quorumVotes(uint256)": FunctionFragment;
        "quorumVotesBPS()": FunctionFragment;
        "state(uint256)": FunctionFragment;
        "timelock()": FunctionFragment;
        "timelockV1()": FunctionFragment;
        "updateProposal(uint256,address[],uint256[],string[],bytes[],string,string)": FunctionFragment;
        "updateProposalBySigs(uint256,(bytes,address,uint256)[],address[],uint256[],string[],bytes[],string,string)": FunctionFragment;
        "updateProposalDescription(uint256,string,string)": FunctionFragment;
        "updateProposalTransactions(uint256,address[],uint256[],string[],bytes[],string)": FunctionFragment;
        "veto(uint256)": FunctionFragment;
        "vetoer()": FunctionFragment;
        "voteSnapshotBlockSwitchProposalId()": FunctionFragment;
        "votingDelay()": FunctionFragment;
        "votingPeriod()": FunctionFragment;
        "withdrawDAONounsFromEscrowIncreasingTotalSupply(uint256[],address)": FunctionFragment;
        "withdrawDAONounsFromEscrowToTreasury(uint256[])": FunctionFragment;
        "withdrawFromForkEscrow(uint256[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MAX_PROPOSAL_THRESHOLD_BPS" | "MAX_VOTING_DELAY" | "MAX_VOTING_PERIOD" | "MIN_PROPOSAL_THRESHOLD_BPS" | "MIN_VOTING_DELAY" | "MIN_VOTING_PERIOD" | "_acceptAdmin" | "_acceptVetoer" | "_burnVetoPower" | "_setDynamicQuorumParams" | "_setErc20TokensToIncludeInFork" | "_setForkDAODeployer" | "_setForkEscrow" | "_setForkParams" | "_setForkPeriod" | "_setForkThresholdBPS" | "_setLastMinuteWindowInBlocks" | "_setMaxQuorumVotesBPS" | "_setMinQuorumVotesBPS" | "_setObjectionPeriodDurationInBlocks" | "_setPendingAdmin" | "_setPendingVetoer" | "_setProposalThresholdBPS" | "_setProposalUpdatablePeriodInBlocks" | "_setQuorumCoefficient" | "_setTimelocksAndAdmin" | "_setVoteSnapshotBlockSwitchProposalId" | "_setVotingDelay" | "_setVotingPeriod" | "_withdraw" | "adjustedTotalSupply" | "cancel" | "cancelSig" | "castRefundableVote" | "castRefundableVoteWithReason" | "castVote" | "castVoteBySig" | "castVoteWithReason" | "dynamicQuorumVotes" | "erc20TokensToIncludeInFork" | "escrowToFork" | "execute" | "executeFork" | "executeOnTimelockV1" | "forkDAODeployer" | "forkEndTimestamp" | "forkEscrow" | "forkPeriod" | "forkThreshold" | "forkThresholdBPS" | "getActions" | "getDynamicQuorumParamsAt" | "getReceipt" | "initialize" | "joinFork" | "lastMinuteWindowInBlocks" | "latestProposalIds" | "maxQuorumVotes" | "minQuorumVotes" | "nouns" | "numTokensInForkEscrow" | "objectionPeriodDurationInBlocks" | "pendingVetoer" | "proposalCount" | "proposalMaxOperations" | "proposalThreshold" | "proposalThresholdBPS" | "proposalUpdatablePeriodInBlocks" | "proposals" | "proposalsV3" | "propose" | "proposeBySigs" | "proposeOnTimelockV1" | "queue" | "quorumParamsCheckpoints()" | "quorumParamsCheckpoints(uint256)" | "quorumVotes" | "quorumVotesBPS" | "state" | "timelock" | "timelockV1" | "updateProposal" | "updateProposalBySigs" | "updateProposalDescription" | "updateProposalTransactions" | "veto" | "vetoer" | "voteSnapshotBlockSwitchProposalId" | "votingDelay" | "votingPeriod" | "withdrawDAONounsFromEscrowIncreasingTotalSupply" | "withdrawDAONounsFromEscrowToTreasury" | "withdrawFromForkEscrow"): FunctionFragment;
    encodeFunctionData(functionFragment: "MAX_PROPOSAL_THRESHOLD_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_VOTING_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_VOTING_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_PROPOSAL_THRESHOLD_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_VOTING_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_VOTING_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "_acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "_acceptVetoer", values?: undefined): string;
    encodeFunctionData(functionFragment: "_burnVetoPower", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setDynamicQuorumParams", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setErc20TokensToIncludeInFork", values: [string[]]): string;
    encodeFunctionData(functionFragment: "_setForkDAODeployer", values: [string]): string;
    encodeFunctionData(functionFragment: "_setForkEscrow", values: [string]): string;
    encodeFunctionData(functionFragment: "_setForkParams", values: [string, string, string[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setForkPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setForkThresholdBPS", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setLastMinuteWindowInBlocks", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setMaxQuorumVotesBPS", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setMinQuorumVotesBPS", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setObjectionPeriodDurationInBlocks", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setPendingAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "_setPendingVetoer", values: [string]): string;
    encodeFunctionData(functionFragment: "_setProposalThresholdBPS", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setProposalUpdatablePeriodInBlocks", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setQuorumCoefficient", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setTimelocksAndAdmin", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "_setVoteSnapshotBlockSwitchProposalId", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setVotingDelay", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setVotingPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_withdraw", values?: undefined): string;
    encodeFunctionData(functionFragment: "adjustedTotalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancel", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "cancelSig", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "castRefundableVote", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "castRefundableVoteWithReason", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "castVote", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "castVoteBySig", values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "castVoteWithReason", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "dynamicQuorumVotes", values: [
        BigNumberish,
        BigNumberish,
        NounsDAOStorageV3.DynamicQuorumParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "erc20TokensToIncludeInFork", values?: undefined): string;
    encodeFunctionData(functionFragment: "escrowToFork", values: [BigNumberish[], BigNumberish[], string]): string;
    encodeFunctionData(functionFragment: "execute", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeFork", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeOnTimelockV1", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "forkDAODeployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "forkEndTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "forkEscrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "forkPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "forkThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "forkThresholdBPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "getActions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDynamicQuorumParamsAt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getReceipt", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        string,
        string,
        string,
        string,
        string,
        NounsDAOStorageV3.NounsDAOParamsStruct,
        NounsDAOStorageV3.DynamicQuorumParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "joinFork", values: [BigNumberish[], BigNumberish[], string]): string;
    encodeFunctionData(functionFragment: "lastMinuteWindowInBlocks", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestProposalIds", values: [string]): string;
    encodeFunctionData(functionFragment: "maxQuorumVotes", values?: undefined): string;
    encodeFunctionData(functionFragment: "minQuorumVotes", values?: undefined): string;
    encodeFunctionData(functionFragment: "nouns", values?: undefined): string;
    encodeFunctionData(functionFragment: "numTokensInForkEscrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "objectionPeriodDurationInBlocks", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingVetoer", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalMaxOperations", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalThresholdBPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalUpdatablePeriodInBlocks", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposals", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposalsV3", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "propose", values: [string[], BigNumberish[], string[], BytesLike[], string]): string;
    encodeFunctionData(functionFragment: "proposeBySigs", values: [
        NounsDAOStorageV3.ProposerSignatureStruct[],
        string[],
        BigNumberish[],
        string[],
        BytesLike[],
        string
    ]): string;
    encodeFunctionData(functionFragment: "proposeOnTimelockV1", values: [string[], BigNumberish[], string[], BytesLike[], string]): string;
    encodeFunctionData(functionFragment: "queue", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "quorumParamsCheckpoints()", values?: undefined): string;
    encodeFunctionData(functionFragment: "quorumParamsCheckpoints(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "quorumVotes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "quorumVotesBPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
    encodeFunctionData(functionFragment: "timelockV1", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateProposal", values: [
        BigNumberish,
        string[],
        BigNumberish[],
        string[],
        BytesLike[],
        string,
        string
    ]): string;
    encodeFunctionData(functionFragment: "updateProposalBySigs", values: [
        BigNumberish,
        NounsDAOStorageV3.ProposerSignatureStruct[],
        string[],
        BigNumberish[],
        string[],
        BytesLike[],
        string,
        string
    ]): string;
    encodeFunctionData(functionFragment: "updateProposalDescription", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "updateProposalTransactions", values: [
        BigNumberish,
        string[],
        BigNumberish[],
        string[],
        BytesLike[],
        string
    ]): string;
    encodeFunctionData(functionFragment: "veto", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "vetoer", values?: undefined): string;
    encodeFunctionData(functionFragment: "voteSnapshotBlockSwitchProposalId", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawDAONounsFromEscrowIncreasingTotalSupply", values: [BigNumberish[], string]): string;
    encodeFunctionData(functionFragment: "withdrawDAONounsFromEscrowToTreasury", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "withdrawFromForkEscrow", values: [BigNumberish[]]): string;
    decodeFunctionResult(functionFragment: "MAX_PROPOSAL_THRESHOLD_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_VOTING_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_VOTING_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_PROPOSAL_THRESHOLD_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_VOTING_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_VOTING_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_acceptAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_acceptVetoer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_burnVetoPower", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setDynamicQuorumParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setErc20TokensToIncludeInFork", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setForkDAODeployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setForkEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setForkParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setForkPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setForkThresholdBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setLastMinuteWindowInBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setMaxQuorumVotesBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setMinQuorumVotesBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setObjectionPeriodDurationInBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPendingVetoer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setProposalThresholdBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setProposalUpdatablePeriodInBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setQuorumCoefficient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setTimelocksAndAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setVoteSnapshotBlockSwitchProposalId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setVotingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setVotingPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adjustedTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castRefundableVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castRefundableVoteWithReason", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteBySig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteWithReason", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dynamicQuorumVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "erc20TokensToIncludeInFork", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "escrowToFork", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeFork", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeOnTimelockV1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forkDAODeployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forkEndTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forkEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forkPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forkThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forkThresholdBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getActions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDynamicQuorumParamsAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReceipt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "joinFork", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastMinuteWindowInBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestProposalIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxQuorumVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minQuorumVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nouns", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numTokensInForkEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "objectionPeriodDurationInBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingVetoer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalMaxOperations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalThresholdBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalUpdatablePeriodInBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalsV3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeBySigs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeOnTimelockV1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorumParamsCheckpoints()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorumParamsCheckpoints(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorumVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorumVotesBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timelockV1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateProposalBySigs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateProposalDescription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateProposalTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "veto", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vetoer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voteSnapshotBlockSwitchProposalId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawDAONounsFromEscrowIncreasingTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawDAONounsFromEscrowToTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFromForkEscrow", data: BytesLike): Result;
    events: {
        "DAONounsSupplyIncreasedFromEscrow(uint256,address)": EventFragment;
        "DAOWithdrawNounsFromEscrow(uint256[],address)": EventFragment;
        "ERC20TokensToIncludeInForkSet(address[],address[])": EventFragment;
        "EscrowedToFork(uint32,address,uint256[],uint256[],string)": EventFragment;
        "ExecuteFork(uint32,address,address,uint256,uint256)": EventFragment;
        "ForkDAODeployerSet(address,address)": EventFragment;
        "ForkPeriodSet(uint256,uint256)": EventFragment;
        "ForkThresholdSet(uint256,uint256)": EventFragment;
        "JoinFork(uint32,address,uint256[],uint256[],string)": EventFragment;
        "LastMinuteWindowSet(uint32,uint32)": EventFragment;
        "MaxQuorumVotesBPSSet(uint16,uint16)": EventFragment;
        "MinQuorumVotesBPSSet(uint16,uint16)": EventFragment;
        "NewAdmin(address,address)": EventFragment;
        "NewImplementation(address,address)": EventFragment;
        "NewPendingAdmin(address,address)": EventFragment;
        "NewPendingVetoer(address,address)": EventFragment;
        "NewVetoer(address,address)": EventFragment;
        "ObjectionPeriodDurationSet(uint32,uint32)": EventFragment;
        "ProposalCanceled(uint256)": EventFragment;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)": EventFragment;
        "ProposalCreatedOnTimelockV1(uint256)": EventFragment;
        "ProposalCreatedWithRequirements(uint256,address,address[],address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,uint256,string)": EventFragment;
        "ProposalCreatedWithRequirements(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,string)": EventFragment;
        "ProposalDescriptionUpdated(uint256,address,string,string)": EventFragment;
        "ProposalExecuted(uint256)": EventFragment;
        "ProposalObjectionPeriodSet(uint256,uint256)": EventFragment;
        "ProposalQueued(uint256,uint256)": EventFragment;
        "ProposalThresholdBPSSet(uint256,uint256)": EventFragment;
        "ProposalTransactionsUpdated(uint256,address,address[],uint256[],string[],bytes[],string)": EventFragment;
        "ProposalUpdatablePeriodSet(uint32,uint32)": EventFragment;
        "ProposalUpdated(uint256,address,address[],uint256[],string[],bytes[],string,string)": EventFragment;
        "ProposalVetoed(uint256)": EventFragment;
        "QuorumCoefficientSet(uint32,uint32)": EventFragment;
        "QuorumVotesBPSSet(uint256,uint256)": EventFragment;
        "RefundableVote(address,uint256,bool)": EventFragment;
        "SignatureCancelled(address,bytes)": EventFragment;
        "TimelocksAndAdminSet(address,address,address)": EventFragment;
        "VoteCast(address,uint256,uint8,uint256,string)": EventFragment;
        "VoteSnapshotBlockSwitchProposalIdSet(uint256,uint256)": EventFragment;
        "VotingDelaySet(uint256,uint256)": EventFragment;
        "VotingPeriodSet(uint256,uint256)": EventFragment;
        "Withdraw(uint256,bool)": EventFragment;
        "WithdrawFromForkEscrow(uint32,address,uint256[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DAONounsSupplyIncreasedFromEscrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DAOWithdrawNounsFromEscrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ERC20TokensToIncludeInForkSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EscrowedToFork"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecuteFork"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ForkDAODeployerSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ForkPeriodSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ForkThresholdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "JoinFork"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LastMinuteWindowSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxQuorumVotesBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinQuorumVotesBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewImplementation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPendingAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPendingVetoer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewVetoer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ObjectionPeriodDurationSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreatedOnTimelockV1"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreatedWithRequirements(uint256,address,address[],address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,uint256,string)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreatedWithRequirements(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,string)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalDescriptionUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalObjectionPeriodSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalQueued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalThresholdBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalTransactionsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalUpdatablePeriodSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalVetoed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuorumCoefficientSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuorumVotesBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RefundableVote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignatureCancelled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TimelocksAndAdminSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteCast"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteSnapshotBlockSwitchProposalIdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingDelaySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingPeriodSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
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
export interface ERC20TokensToIncludeInForkSetEventObject {
    oldErc20Tokens: string[];
    newErc20tokens: string[];
}
export declare type ERC20TokensToIncludeInForkSetEvent = TypedEvent<[
    string[],
    string[]
], ERC20TokensToIncludeInForkSetEventObject>;
export declare type ERC20TokensToIncludeInForkSetEventFilter = TypedEventFilter<ERC20TokensToIncludeInForkSetEvent>;
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
export interface ForkDAODeployerSetEventObject {
    oldForkDAODeployer: string;
    newForkDAODeployer: string;
}
export declare type ForkDAODeployerSetEvent = TypedEvent<[
    string,
    string
], ForkDAODeployerSetEventObject>;
export declare type ForkDAODeployerSetEventFilter = TypedEventFilter<ForkDAODeployerSetEvent>;
export interface ForkPeriodSetEventObject {
    oldForkPeriod: BigNumber;
    newForkPeriod: BigNumber;
}
export declare type ForkPeriodSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ForkPeriodSetEventObject>;
export declare type ForkPeriodSetEventFilter = TypedEventFilter<ForkPeriodSetEvent>;
export interface ForkThresholdSetEventObject {
    oldForkThreshold: BigNumber;
    newForkThreshold: BigNumber;
}
export declare type ForkThresholdSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ForkThresholdSetEventObject>;
export declare type ForkThresholdSetEventFilter = TypedEventFilter<ForkThresholdSetEvent>;
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
export interface LastMinuteWindowSetEventObject {
    oldLastMinuteWindowInBlocks: number;
    newLastMinuteWindowInBlocks: number;
}
export declare type LastMinuteWindowSetEvent = TypedEvent<[
    number,
    number
], LastMinuteWindowSetEventObject>;
export declare type LastMinuteWindowSetEventFilter = TypedEventFilter<LastMinuteWindowSetEvent>;
export interface MaxQuorumVotesBPSSetEventObject {
    oldMaxQuorumVotesBPS: number;
    newMaxQuorumVotesBPS: number;
}
export declare type MaxQuorumVotesBPSSetEvent = TypedEvent<[
    number,
    number
], MaxQuorumVotesBPSSetEventObject>;
export declare type MaxQuorumVotesBPSSetEventFilter = TypedEventFilter<MaxQuorumVotesBPSSetEvent>;
export interface MinQuorumVotesBPSSetEventObject {
    oldMinQuorumVotesBPS: number;
    newMinQuorumVotesBPS: number;
}
export declare type MinQuorumVotesBPSSetEvent = TypedEvent<[
    number,
    number
], MinQuorumVotesBPSSetEventObject>;
export declare type MinQuorumVotesBPSSetEventFilter = TypedEventFilter<MinQuorumVotesBPSSetEvent>;
export interface NewAdminEventObject {
    oldAdmin: string;
    newAdmin: string;
}
export declare type NewAdminEvent = TypedEvent<[string, string], NewAdminEventObject>;
export declare type NewAdminEventFilter = TypedEventFilter<NewAdminEvent>;
export interface NewImplementationEventObject {
    oldImplementation: string;
    newImplementation: string;
}
export declare type NewImplementationEvent = TypedEvent<[
    string,
    string
], NewImplementationEventObject>;
export declare type NewImplementationEventFilter = TypedEventFilter<NewImplementationEvent>;
export interface NewPendingAdminEventObject {
    oldPendingAdmin: string;
    newPendingAdmin: string;
}
export declare type NewPendingAdminEvent = TypedEvent<[
    string,
    string
], NewPendingAdminEventObject>;
export declare type NewPendingAdminEventFilter = TypedEventFilter<NewPendingAdminEvent>;
export interface NewPendingVetoerEventObject {
    oldPendingVetoer: string;
    newPendingVetoer: string;
}
export declare type NewPendingVetoerEvent = TypedEvent<[
    string,
    string
], NewPendingVetoerEventObject>;
export declare type NewPendingVetoerEventFilter = TypedEventFilter<NewPendingVetoerEvent>;
export interface NewVetoerEventObject {
    oldVetoer: string;
    newVetoer: string;
}
export declare type NewVetoerEvent = TypedEvent<[string, string], NewVetoerEventObject>;
export declare type NewVetoerEventFilter = TypedEventFilter<NewVetoerEvent>;
export interface ObjectionPeriodDurationSetEventObject {
    oldObjectionPeriodDurationInBlocks: number;
    newObjectionPeriodDurationInBlocks: number;
}
export declare type ObjectionPeriodDurationSetEvent = TypedEvent<[
    number,
    number
], ObjectionPeriodDurationSetEventObject>;
export declare type ObjectionPeriodDurationSetEventFilter = TypedEventFilter<ObjectionPeriodDurationSetEvent>;
export interface ProposalCanceledEventObject {
    id: BigNumber;
}
export declare type ProposalCanceledEvent = TypedEvent<[
    BigNumber
], ProposalCanceledEventObject>;
export declare type ProposalCanceledEventFilter = TypedEventFilter<ProposalCanceledEvent>;
export interface ProposalCreatedEventObject {
    id: BigNumber;
    proposer: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    startBlock: BigNumber;
    endBlock: BigNumber;
    description: string;
}
export declare type ProposalCreatedEvent = TypedEvent<[
    BigNumber,
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    BigNumber,
    BigNumber,
    string
], ProposalCreatedEventObject>;
export declare type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;
export interface ProposalCreatedOnTimelockV1EventObject {
    id: BigNumber;
}
export declare type ProposalCreatedOnTimelockV1Event = TypedEvent<[
    BigNumber
], ProposalCreatedOnTimelockV1EventObject>;
export declare type ProposalCreatedOnTimelockV1EventFilter = TypedEventFilter<ProposalCreatedOnTimelockV1Event>;
export interface ProposalCreatedWithRequirements_uint256_address_address_array_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_uint256_string_EventObject {
    id: BigNumber;
    proposer: string;
    signers: string[];
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    startBlock: BigNumber;
    endBlock: BigNumber;
    updatePeriodEndBlock: BigNumber;
    proposalThreshold: BigNumber;
    quorumVotes: BigNumber;
    description: string;
}
export declare type ProposalCreatedWithRequirements_uint256_address_address_array_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_uint256_string_Event = TypedEvent<[
    BigNumber,
    string,
    string[],
    string[],
    BigNumber[],
    string[],
    string[],
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], ProposalCreatedWithRequirements_uint256_address_address_array_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_uint256_string_EventObject>;
export declare type ProposalCreatedWithRequirements_uint256_address_address_array_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_uint256_string_EventFilter = TypedEventFilter<ProposalCreatedWithRequirements_uint256_address_address_array_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_uint256_string_Event>;
export interface ProposalCreatedWithRequirements_uint256_address_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_string_EventObject {
    id: BigNumber;
    proposer: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    startBlock: BigNumber;
    endBlock: BigNumber;
    proposalThreshold: BigNumber;
    quorumVotes: BigNumber;
    description: string;
}
export declare type ProposalCreatedWithRequirements_uint256_address_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_string_Event = TypedEvent<[
    BigNumber,
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], ProposalCreatedWithRequirements_uint256_address_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_string_EventObject>;
export declare type ProposalCreatedWithRequirements_uint256_address_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_string_EventFilter = TypedEventFilter<ProposalCreatedWithRequirements_uint256_address_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_string_Event>;
export interface ProposalDescriptionUpdatedEventObject {
    id: BigNumber;
    proposer: string;
    description: string;
    updateMessage: string;
}
export declare type ProposalDescriptionUpdatedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    string
], ProposalDescriptionUpdatedEventObject>;
export declare type ProposalDescriptionUpdatedEventFilter = TypedEventFilter<ProposalDescriptionUpdatedEvent>;
export interface ProposalExecutedEventObject {
    id: BigNumber;
}
export declare type ProposalExecutedEvent = TypedEvent<[
    BigNumber
], ProposalExecutedEventObject>;
export declare type ProposalExecutedEventFilter = TypedEventFilter<ProposalExecutedEvent>;
export interface ProposalObjectionPeriodSetEventObject {
    id: BigNumber;
    objectionPeriodEndBlock: BigNumber;
}
export declare type ProposalObjectionPeriodSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ProposalObjectionPeriodSetEventObject>;
export declare type ProposalObjectionPeriodSetEventFilter = TypedEventFilter<ProposalObjectionPeriodSetEvent>;
export interface ProposalQueuedEventObject {
    id: BigNumber;
    eta: BigNumber;
}
export declare type ProposalQueuedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ProposalQueuedEventObject>;
export declare type ProposalQueuedEventFilter = TypedEventFilter<ProposalQueuedEvent>;
export interface ProposalThresholdBPSSetEventObject {
    oldProposalThresholdBPS: BigNumber;
    newProposalThresholdBPS: BigNumber;
}
export declare type ProposalThresholdBPSSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ProposalThresholdBPSSetEventObject>;
export declare type ProposalThresholdBPSSetEventFilter = TypedEventFilter<ProposalThresholdBPSSetEvent>;
export interface ProposalTransactionsUpdatedEventObject {
    id: BigNumber;
    proposer: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    updateMessage: string;
}
export declare type ProposalTransactionsUpdatedEvent = TypedEvent<[
    BigNumber,
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    string
], ProposalTransactionsUpdatedEventObject>;
export declare type ProposalTransactionsUpdatedEventFilter = TypedEventFilter<ProposalTransactionsUpdatedEvent>;
export interface ProposalUpdatablePeriodSetEventObject {
    oldProposalUpdatablePeriodInBlocks: number;
    newProposalUpdatablePeriodInBlocks: number;
}
export declare type ProposalUpdatablePeriodSetEvent = TypedEvent<[
    number,
    number
], ProposalUpdatablePeriodSetEventObject>;
export declare type ProposalUpdatablePeriodSetEventFilter = TypedEventFilter<ProposalUpdatablePeriodSetEvent>;
export interface ProposalUpdatedEventObject {
    id: BigNumber;
    proposer: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    description: string;
    updateMessage: string;
}
export declare type ProposalUpdatedEvent = TypedEvent<[
    BigNumber,
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    string,
    string
], ProposalUpdatedEventObject>;
export declare type ProposalUpdatedEventFilter = TypedEventFilter<ProposalUpdatedEvent>;
export interface ProposalVetoedEventObject {
    id: BigNumber;
}
export declare type ProposalVetoedEvent = TypedEvent<[
    BigNumber
], ProposalVetoedEventObject>;
export declare type ProposalVetoedEventFilter = TypedEventFilter<ProposalVetoedEvent>;
export interface QuorumCoefficientSetEventObject {
    oldQuorumCoefficient: number;
    newQuorumCoefficient: number;
}
export declare type QuorumCoefficientSetEvent = TypedEvent<[
    number,
    number
], QuorumCoefficientSetEventObject>;
export declare type QuorumCoefficientSetEventFilter = TypedEventFilter<QuorumCoefficientSetEvent>;
export interface QuorumVotesBPSSetEventObject {
    oldQuorumVotesBPS: BigNumber;
    newQuorumVotesBPS: BigNumber;
}
export declare type QuorumVotesBPSSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], QuorumVotesBPSSetEventObject>;
export declare type QuorumVotesBPSSetEventFilter = TypedEventFilter<QuorumVotesBPSSetEvent>;
export interface RefundableVoteEventObject {
    voter: string;
    refundAmount: BigNumber;
    refundSent: boolean;
}
export declare type RefundableVoteEvent = TypedEvent<[
    string,
    BigNumber,
    boolean
], RefundableVoteEventObject>;
export declare type RefundableVoteEventFilter = TypedEventFilter<RefundableVoteEvent>;
export interface SignatureCancelledEventObject {
    signer: string;
    sig: string;
}
export declare type SignatureCancelledEvent = TypedEvent<[
    string,
    string
], SignatureCancelledEventObject>;
export declare type SignatureCancelledEventFilter = TypedEventFilter<SignatureCancelledEvent>;
export interface TimelocksAndAdminSetEventObject {
    timelock: string;
    timelockV1: string;
    admin: string;
}
export declare type TimelocksAndAdminSetEvent = TypedEvent<[
    string,
    string,
    string
], TimelocksAndAdminSetEventObject>;
export declare type TimelocksAndAdminSetEventFilter = TypedEventFilter<TimelocksAndAdminSetEvent>;
export interface VoteCastEventObject {
    voter: string;
    proposalId: BigNumber;
    support: number;
    votes: BigNumber;
    reason: string;
}
export declare type VoteCastEvent = TypedEvent<[
    string,
    BigNumber,
    number,
    BigNumber,
    string
], VoteCastEventObject>;
export declare type VoteCastEventFilter = TypedEventFilter<VoteCastEvent>;
export interface VoteSnapshotBlockSwitchProposalIdSetEventObject {
    oldVoteSnapshotBlockSwitchProposalId: BigNumber;
    newVoteSnapshotBlockSwitchProposalId: BigNumber;
}
export declare type VoteSnapshotBlockSwitchProposalIdSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], VoteSnapshotBlockSwitchProposalIdSetEventObject>;
export declare type VoteSnapshotBlockSwitchProposalIdSetEventFilter = TypedEventFilter<VoteSnapshotBlockSwitchProposalIdSetEvent>;
export interface VotingDelaySetEventObject {
    oldVotingDelay: BigNumber;
    newVotingDelay: BigNumber;
}
export declare type VotingDelaySetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], VotingDelaySetEventObject>;
export declare type VotingDelaySetEventFilter = TypedEventFilter<VotingDelaySetEvent>;
export interface VotingPeriodSetEventObject {
    oldVotingPeriod: BigNumber;
    newVotingPeriod: BigNumber;
}
export declare type VotingPeriodSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], VotingPeriodSetEventObject>;
export declare type VotingPeriodSetEventFilter = TypedEventFilter<VotingPeriodSetEvent>;
export interface WithdrawEventObject {
    amount: BigNumber;
    sent: boolean;
}
export declare type WithdrawEvent = TypedEvent<[
    BigNumber,
    boolean
], WithdrawEventObject>;
export declare type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
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
export interface NounsDAOLogicV3Harness extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsDAOLogicV3HarnessInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_VOTING_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_VOTING_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;
        _acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _acceptVetoer(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _burnVetoPower(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setDynamicQuorumParams(newMinQuorumVotesBPS: BigNumberish, newMaxQuorumVotesBPS: BigNumberish, newQuorumCoefficient: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setErc20TokensToIncludeInFork(erc20tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setForkDAODeployer(newForkDAODeployer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setForkEscrow(newForkEscrow: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setForkParams(forkEscrow_: string, forkDAODeployer_: string, erc20TokensToIncludeInFork_: string[], forkPeriod_: BigNumberish, forkThresholdBPS_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setForkPeriod(newForkPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setForkThresholdBPS(newForkThresholdBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setLastMinuteWindowInBlocks(newLastMinuteWindowInBlocks: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setMaxQuorumVotesBPS(newMaxQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setMinQuorumVotesBPS(newMinQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setObjectionPeriodDurationInBlocks(newObjectionPeriodDurationInBlocks: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setPendingVetoer(newPendingVetoer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setProposalThresholdBPS(newProposalThresholdBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setProposalUpdatablePeriodInBlocks(newProposalUpdatablePeriodInBlocks: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setQuorumCoefficient(newQuorumCoefficient: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setTimelocksAndAdmin(newTimelock: string, newTimelockV1: string, newAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setVoteSnapshotBlockSwitchProposalId(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _withdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        adjustedTotalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        cancel(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelSig(sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        castRefundableVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        castRefundableVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        dynamicQuorumVotes(againstVotes: BigNumberish, adjustedTotalSupply_: BigNumberish, params: NounsDAOStorageV3.DynamicQuorumParamsStruct, overrides?: CallOverrides): Promise<[BigNumber]>;
        erc20TokensToIncludeInFork(overrides?: CallOverrides): Promise<[string[]]>;
        escrowToFork(tokenIds: BigNumberish[], proposalIds: BigNumberish[], reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        execute(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeFork(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeOnTimelockV1(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        forkDAODeployer(overrides?: CallOverrides): Promise<[string]>;
        forkEndTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        forkEscrow(overrides?: CallOverrides): Promise<[string]>;
        forkPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        forkThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;
        forkThresholdBPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            string[],
            string[]
        ] & {
            targets: string[];
            values: BigNumber[];
            signatures: string[];
            calldatas: string[];
        }>;
        getDynamicQuorumParamsAt(blockNumber_: BigNumberish, overrides?: CallOverrides): Promise<[NounsDAOStorageV3.DynamicQuorumParamsStructOutput]>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<[NounsDAOStorageV3.ReceiptStructOutput]>;
        initialize(timelock_: string, nouns_: string, forkEscrow_: string, forkDAODeployer_: string, vetoer_: string, daoParams_: NounsDAOStorageV3.NounsDAOParamsStruct, dynamicQuorumParams_: NounsDAOStorageV3.DynamicQuorumParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        joinFork(tokenIds: BigNumberish[], proposalIds: BigNumberish[], reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lastMinuteWindowInBlocks(overrides?: CallOverrides): Promise<[BigNumber]>;
        latestProposalIds(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxQuorumVotes(overrides?: CallOverrides): Promise<[BigNumber]>;
        minQuorumVotes(overrides?: CallOverrides): Promise<[BigNumber]>;
        nouns(overrides?: CallOverrides): Promise<[string]>;
        numTokensInForkEscrow(overrides?: CallOverrides): Promise<[BigNumber]>;
        objectionPeriodDurationInBlocks(overrides?: CallOverrides): Promise<[BigNumber]>;
        pendingVetoer(overrides?: CallOverrides): Promise<[string]>;
        proposalCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalMaxOperations(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalThresholdBPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalUpdatablePeriodInBlocks(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[NounsDAOStorageV2.ProposalCondensedStructOutput]>;
        proposalsV3(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[NounsDAOStorageV3.ProposalCondensedStructOutput]>;
        propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        proposeBySigs(proposerSignatures: NounsDAOStorageV3.ProposerSignatureStruct[], targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        proposeOnTimelockV1(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        queue(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "quorumParamsCheckpoints()"(overrides?: CallOverrides): Promise<[NounsDAOStorageV3.DynamicQuorumParamsCheckpointStructOutput[]]>;
        "quorumParamsCheckpoints(uint256)"(index: BigNumberish, overrides?: CallOverrides): Promise<[NounsDAOStorageV3.DynamicQuorumParamsCheckpointStructOutput]>;
        quorumVotes(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        timelock(overrides?: CallOverrides): Promise<[string]>;
        timelockV1(overrides?: CallOverrides): Promise<[string]>;
        updateProposal(proposalId: BigNumberish, targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, updateMessage: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateProposalBySigs(proposalId: BigNumberish, proposerSignatures: NounsDAOStorageV3.ProposerSignatureStruct[], targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, updateMessage: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateProposalDescription(proposalId: BigNumberish, description: string, updateMessage: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateProposalTransactions(proposalId: BigNumberish, targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], updateMessage: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        veto(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        vetoer(overrides?: CallOverrides): Promise<[string]>;
        voteSnapshotBlockSwitchProposalId(overrides?: CallOverrides): Promise<[BigNumber]>;
        votingDelay(overrides?: CallOverrides): Promise<[BigNumber]>;
        votingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawDAONounsFromEscrowIncreasingTotalSupply(tokenIds: BigNumberish[], to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawDAONounsFromEscrowToTreasury(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawFromForkEscrow(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    _acceptAdmin(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _acceptVetoer(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _burnVetoPower(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setDynamicQuorumParams(newMinQuorumVotesBPS: BigNumberish, newMaxQuorumVotesBPS: BigNumberish, newQuorumCoefficient: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setErc20TokensToIncludeInFork(erc20tokens: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setForkDAODeployer(newForkDAODeployer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setForkEscrow(newForkEscrow: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setForkParams(forkEscrow_: string, forkDAODeployer_: string, erc20TokensToIncludeInFork_: string[], forkPeriod_: BigNumberish, forkThresholdBPS_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setForkPeriod(newForkPeriod: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setForkThresholdBPS(newForkThresholdBPS: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setLastMinuteWindowInBlocks(newLastMinuteWindowInBlocks: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setMaxQuorumVotesBPS(newMaxQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setMinQuorumVotesBPS(newMinQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setObjectionPeriodDurationInBlocks(newObjectionPeriodDurationInBlocks: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setPendingVetoer(newPendingVetoer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setProposalThresholdBPS(newProposalThresholdBPS: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setProposalUpdatablePeriodInBlocks(newProposalUpdatablePeriodInBlocks: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setQuorumCoefficient(newQuorumCoefficient: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setTimelocksAndAdmin(newTimelock: string, newTimelockV1: string, newAdmin: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setVoteSnapshotBlockSwitchProposalId(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _withdraw(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    adjustedTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    cancel(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelSig(sig: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    castRefundableVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    castRefundableVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    dynamicQuorumVotes(againstVotes: BigNumberish, adjustedTotalSupply_: BigNumberish, params: NounsDAOStorageV3.DynamicQuorumParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
    erc20TokensToIncludeInFork(overrides?: CallOverrides): Promise<string[]>;
    escrowToFork(tokenIds: BigNumberish[], proposalIds: BigNumberish[], reason: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    execute(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeFork(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeOnTimelockV1(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    forkDAODeployer(overrides?: CallOverrides): Promise<string>;
    forkEndTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    forkEscrow(overrides?: CallOverrides): Promise<string>;
    forkPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    forkThreshold(overrides?: CallOverrides): Promise<BigNumber>;
    forkThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
    getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[
        string[],
        BigNumber[],
        string[],
        string[]
    ] & {
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
    }>;
    getDynamicQuorumParamsAt(blockNumber_: BigNumberish, overrides?: CallOverrides): Promise<NounsDAOStorageV3.DynamicQuorumParamsStructOutput>;
    getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<NounsDAOStorageV3.ReceiptStructOutput>;
    initialize(timelock_: string, nouns_: string, forkEscrow_: string, forkDAODeployer_: string, vetoer_: string, daoParams_: NounsDAOStorageV3.NounsDAOParamsStruct, dynamicQuorumParams_: NounsDAOStorageV3.DynamicQuorumParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    joinFork(tokenIds: BigNumberish[], proposalIds: BigNumberish[], reason: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lastMinuteWindowInBlocks(overrides?: CallOverrides): Promise<BigNumber>;
    latestProposalIds(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    maxQuorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
    minQuorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
    nouns(overrides?: CallOverrides): Promise<string>;
    numTokensInForkEscrow(overrides?: CallOverrides): Promise<BigNumber>;
    objectionPeriodDurationInBlocks(overrides?: CallOverrides): Promise<BigNumber>;
    pendingVetoer(overrides?: CallOverrides): Promise<string>;
    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
    proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;
    proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
    proposalThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
    proposalUpdatablePeriodInBlocks(overrides?: CallOverrides): Promise<BigNumber>;
    proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<NounsDAOStorageV2.ProposalCondensedStructOutput>;
    proposalsV3(proposalId: BigNumberish, overrides?: CallOverrides): Promise<NounsDAOStorageV3.ProposalCondensedStructOutput>;
    propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    proposeBySigs(proposerSignatures: NounsDAOStorageV3.ProposerSignatureStruct[], targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    proposeOnTimelockV1(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    queue(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "quorumParamsCheckpoints()"(overrides?: CallOverrides): Promise<NounsDAOStorageV3.DynamicQuorumParamsCheckpointStructOutput[]>;
    "quorumParamsCheckpoints(uint256)"(index: BigNumberish, overrides?: CallOverrides): Promise<NounsDAOStorageV3.DynamicQuorumParamsCheckpointStructOutput>;
    quorumVotes(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    quorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
    state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;
    timelock(overrides?: CallOverrides): Promise<string>;
    timelockV1(overrides?: CallOverrides): Promise<string>;
    updateProposal(proposalId: BigNumberish, targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, updateMessage: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateProposalBySigs(proposalId: BigNumberish, proposerSignatures: NounsDAOStorageV3.ProposerSignatureStruct[], targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, updateMessage: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateProposalDescription(proposalId: BigNumberish, description: string, updateMessage: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateProposalTransactions(proposalId: BigNumberish, targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], updateMessage: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    veto(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    vetoer(overrides?: CallOverrides): Promise<string>;
    voteSnapshotBlockSwitchProposalId(overrides?: CallOverrides): Promise<BigNumber>;
    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    withdrawDAONounsFromEscrowIncreasingTotalSupply(tokenIds: BigNumberish[], to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawDAONounsFromEscrowToTreasury(tokenIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawFromForkEscrow(tokenIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        _acceptAdmin(overrides?: CallOverrides): Promise<void>;
        _acceptVetoer(overrides?: CallOverrides): Promise<void>;
        _burnVetoPower(overrides?: CallOverrides): Promise<void>;
        _setDynamicQuorumParams(newMinQuorumVotesBPS: BigNumberish, newMaxQuorumVotesBPS: BigNumberish, newQuorumCoefficient: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setErc20TokensToIncludeInFork(erc20tokens: string[], overrides?: CallOverrides): Promise<void>;
        _setForkDAODeployer(newForkDAODeployer: string, overrides?: CallOverrides): Promise<void>;
        _setForkEscrow(newForkEscrow: string, overrides?: CallOverrides): Promise<void>;
        _setForkParams(forkEscrow_: string, forkDAODeployer_: string, erc20TokensToIncludeInFork_: string[], forkPeriod_: BigNumberish, forkThresholdBPS_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setForkPeriod(newForkPeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setForkThresholdBPS(newForkThresholdBPS: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setLastMinuteWindowInBlocks(newLastMinuteWindowInBlocks: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setMaxQuorumVotesBPS(newMaxQuorumVotesBPS: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setMinQuorumVotesBPS(newMinQuorumVotesBPS: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setObjectionPeriodDurationInBlocks(newObjectionPeriodDurationInBlocks: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: CallOverrides): Promise<void>;
        _setPendingVetoer(newPendingVetoer: string, overrides?: CallOverrides): Promise<void>;
        _setProposalThresholdBPS(newProposalThresholdBPS: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setProposalUpdatablePeriodInBlocks(newProposalUpdatablePeriodInBlocks: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setQuorumCoefficient(newQuorumCoefficient: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setTimelocksAndAdmin(newTimelock: string, newTimelockV1: string, newAdmin: string, overrides?: CallOverrides): Promise<void>;
        _setVoteSnapshotBlockSwitchProposalId(overrides?: CallOverrides): Promise<void>;
        _setVotingDelay(newVotingDelay: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _withdraw(overrides?: CallOverrides): Promise<[BigNumber, boolean]>;
        adjustedTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        cancel(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        cancelSig(sig: BytesLike, overrides?: CallOverrides): Promise<void>;
        castRefundableVote(proposalId: BigNumberish, support: BigNumberish, overrides?: CallOverrides): Promise<void>;
        castRefundableVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: CallOverrides): Promise<void>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: CallOverrides): Promise<void>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: CallOverrides): Promise<void>;
        dynamicQuorumVotes(againstVotes: BigNumberish, adjustedTotalSupply_: BigNumberish, params: NounsDAOStorageV3.DynamicQuorumParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        erc20TokensToIncludeInFork(overrides?: CallOverrides): Promise<string[]>;
        escrowToFork(tokenIds: BigNumberish[], proposalIds: BigNumberish[], reason: string, overrides?: CallOverrides): Promise<void>;
        execute(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        executeFork(overrides?: CallOverrides): Promise<[string, string] & {
            forkTreasury: string;
            forkToken: string;
        }>;
        executeOnTimelockV1(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        forkDAODeployer(overrides?: CallOverrides): Promise<string>;
        forkEndTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        forkEscrow(overrides?: CallOverrides): Promise<string>;
        forkPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        forkThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        forkThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            string[],
            string[]
        ] & {
            targets: string[];
            values: BigNumber[];
            signatures: string[];
            calldatas: string[];
        }>;
        getDynamicQuorumParamsAt(blockNumber_: BigNumberish, overrides?: CallOverrides): Promise<NounsDAOStorageV3.DynamicQuorumParamsStructOutput>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<NounsDAOStorageV3.ReceiptStructOutput>;
        initialize(timelock_: string, nouns_: string, forkEscrow_: string, forkDAODeployer_: string, vetoer_: string, daoParams_: NounsDAOStorageV3.NounsDAOParamsStruct, dynamicQuorumParams_: NounsDAOStorageV3.DynamicQuorumParamsStruct, overrides?: CallOverrides): Promise<void>;
        joinFork(tokenIds: BigNumberish[], proposalIds: BigNumberish[], reason: string, overrides?: CallOverrides): Promise<void>;
        lastMinuteWindowInBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        latestProposalIds(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxQuorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
        minQuorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
        nouns(overrides?: CallOverrides): Promise<string>;
        numTokensInForkEscrow(overrides?: CallOverrides): Promise<BigNumber>;
        objectionPeriodDurationInBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        pendingVetoer(overrides?: CallOverrides): Promise<string>;
        proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
        proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
        proposalUpdatablePeriodInBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<NounsDAOStorageV2.ProposalCondensedStructOutput>;
        proposalsV3(proposalId: BigNumberish, overrides?: CallOverrides): Promise<NounsDAOStorageV3.ProposalCondensedStructOutput>;
        propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: CallOverrides): Promise<BigNumber>;
        proposeBySigs(proposerSignatures: NounsDAOStorageV3.ProposerSignatureStruct[], targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: CallOverrides): Promise<BigNumber>;
        proposeOnTimelockV1(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: CallOverrides): Promise<BigNumber>;
        queue(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "quorumParamsCheckpoints()"(overrides?: CallOverrides): Promise<NounsDAOStorageV3.DynamicQuorumParamsCheckpointStructOutput[]>;
        "quorumParamsCheckpoints(uint256)"(index: BigNumberish, overrides?: CallOverrides): Promise<NounsDAOStorageV3.DynamicQuorumParamsCheckpointStructOutput>;
        quorumVotes(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;
        timelock(overrides?: CallOverrides): Promise<string>;
        timelockV1(overrides?: CallOverrides): Promise<string>;
        updateProposal(proposalId: BigNumberish, targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, updateMessage: string, overrides?: CallOverrides): Promise<void>;
        updateProposalBySigs(proposalId: BigNumberish, proposerSignatures: NounsDAOStorageV3.ProposerSignatureStruct[], targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, updateMessage: string, overrides?: CallOverrides): Promise<void>;
        updateProposalDescription(proposalId: BigNumberish, description: string, updateMessage: string, overrides?: CallOverrides): Promise<void>;
        updateProposalTransactions(proposalId: BigNumberish, targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], updateMessage: string, overrides?: CallOverrides): Promise<void>;
        veto(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        vetoer(overrides?: CallOverrides): Promise<string>;
        voteSnapshotBlockSwitchProposalId(overrides?: CallOverrides): Promise<BigNumber>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawDAONounsFromEscrowIncreasingTotalSupply(tokenIds: BigNumberish[], to: string, overrides?: CallOverrides): Promise<void>;
        withdrawDAONounsFromEscrowToTreasury(tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        withdrawFromForkEscrow(tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DAONounsSupplyIncreasedFromEscrow(uint256,address)"(numTokens?: null, to?: null): DAONounsSupplyIncreasedFromEscrowEventFilter;
        DAONounsSupplyIncreasedFromEscrow(numTokens?: null, to?: null): DAONounsSupplyIncreasedFromEscrowEventFilter;
        "DAOWithdrawNounsFromEscrow(uint256[],address)"(tokenIds?: null, to?: null): DAOWithdrawNounsFromEscrowEventFilter;
        DAOWithdrawNounsFromEscrow(tokenIds?: null, to?: null): DAOWithdrawNounsFromEscrowEventFilter;
        "ERC20TokensToIncludeInForkSet(address[],address[])"(oldErc20Tokens?: null, newErc20tokens?: null): ERC20TokensToIncludeInForkSetEventFilter;
        ERC20TokensToIncludeInForkSet(oldErc20Tokens?: null, newErc20tokens?: null): ERC20TokensToIncludeInForkSetEventFilter;
        "EscrowedToFork(uint32,address,uint256[],uint256[],string)"(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null, proposalIds?: null, reason?: null): EscrowedToForkEventFilter;
        EscrowedToFork(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null, proposalIds?: null, reason?: null): EscrowedToForkEventFilter;
        "ExecuteFork(uint32,address,address,uint256,uint256)"(forkId?: BigNumberish | null, forkTreasury?: null, forkToken?: null, forkEndTimestamp?: null, tokensInEscrow?: null): ExecuteForkEventFilter;
        ExecuteFork(forkId?: BigNumberish | null, forkTreasury?: null, forkToken?: null, forkEndTimestamp?: null, tokensInEscrow?: null): ExecuteForkEventFilter;
        "ForkDAODeployerSet(address,address)"(oldForkDAODeployer?: null, newForkDAODeployer?: null): ForkDAODeployerSetEventFilter;
        ForkDAODeployerSet(oldForkDAODeployer?: null, newForkDAODeployer?: null): ForkDAODeployerSetEventFilter;
        "ForkPeriodSet(uint256,uint256)"(oldForkPeriod?: null, newForkPeriod?: null): ForkPeriodSetEventFilter;
        ForkPeriodSet(oldForkPeriod?: null, newForkPeriod?: null): ForkPeriodSetEventFilter;
        "ForkThresholdSet(uint256,uint256)"(oldForkThreshold?: null, newForkThreshold?: null): ForkThresholdSetEventFilter;
        ForkThresholdSet(oldForkThreshold?: null, newForkThreshold?: null): ForkThresholdSetEventFilter;
        "JoinFork(uint32,address,uint256[],uint256[],string)"(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null, proposalIds?: null, reason?: null): JoinForkEventFilter;
        JoinFork(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null, proposalIds?: null, reason?: null): JoinForkEventFilter;
        "LastMinuteWindowSet(uint32,uint32)"(oldLastMinuteWindowInBlocks?: null, newLastMinuteWindowInBlocks?: null): LastMinuteWindowSetEventFilter;
        LastMinuteWindowSet(oldLastMinuteWindowInBlocks?: null, newLastMinuteWindowInBlocks?: null): LastMinuteWindowSetEventFilter;
        "MaxQuorumVotesBPSSet(uint16,uint16)"(oldMaxQuorumVotesBPS?: null, newMaxQuorumVotesBPS?: null): MaxQuorumVotesBPSSetEventFilter;
        MaxQuorumVotesBPSSet(oldMaxQuorumVotesBPS?: null, newMaxQuorumVotesBPS?: null): MaxQuorumVotesBPSSetEventFilter;
        "MinQuorumVotesBPSSet(uint16,uint16)"(oldMinQuorumVotesBPS?: null, newMinQuorumVotesBPS?: null): MinQuorumVotesBPSSetEventFilter;
        MinQuorumVotesBPSSet(oldMinQuorumVotesBPS?: null, newMinQuorumVotesBPS?: null): MinQuorumVotesBPSSetEventFilter;
        "NewAdmin(address,address)"(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        NewAdmin(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        "NewImplementation(address,address)"(oldImplementation?: null, newImplementation?: null): NewImplementationEventFilter;
        NewImplementation(oldImplementation?: null, newImplementation?: null): NewImplementationEventFilter;
        "NewPendingAdmin(address,address)"(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        NewPendingAdmin(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        "NewPendingVetoer(address,address)"(oldPendingVetoer?: null, newPendingVetoer?: null): NewPendingVetoerEventFilter;
        NewPendingVetoer(oldPendingVetoer?: null, newPendingVetoer?: null): NewPendingVetoerEventFilter;
        "NewVetoer(address,address)"(oldVetoer?: null, newVetoer?: null): NewVetoerEventFilter;
        NewVetoer(oldVetoer?: null, newVetoer?: null): NewVetoerEventFilter;
        "ObjectionPeriodDurationSet(uint32,uint32)"(oldObjectionPeriodDurationInBlocks?: null, newObjectionPeriodDurationInBlocks?: null): ObjectionPeriodDurationSetEventFilter;
        ObjectionPeriodDurationSet(oldObjectionPeriodDurationInBlocks?: null, newObjectionPeriodDurationInBlocks?: null): ObjectionPeriodDurationSetEventFilter;
        "ProposalCanceled(uint256)"(id?: null): ProposalCanceledEventFilter;
        ProposalCanceled(id?: null): ProposalCanceledEventFilter;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)"(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        ProposalCreated(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        "ProposalCreatedOnTimelockV1(uint256)"(id?: null): ProposalCreatedOnTimelockV1EventFilter;
        ProposalCreatedOnTimelockV1(id?: null): ProposalCreatedOnTimelockV1EventFilter;
        "ProposalCreatedWithRequirements(uint256,address,address[],address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,uint256,string)"(id?: null, proposer?: null, signers?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, updatePeriodEndBlock?: null, proposalThreshold?: null, quorumVotes?: null, description?: null): ProposalCreatedWithRequirements_uint256_address_address_array_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_uint256_string_EventFilter;
        "ProposalCreatedWithRequirements(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,string)"(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, proposalThreshold?: null, quorumVotes?: null, description?: null): ProposalCreatedWithRequirements_uint256_address_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_string_EventFilter;
        "ProposalDescriptionUpdated(uint256,address,string,string)"(id?: BigNumberish | null, proposer?: string | null, description?: null, updateMessage?: null): ProposalDescriptionUpdatedEventFilter;
        ProposalDescriptionUpdated(id?: BigNumberish | null, proposer?: string | null, description?: null, updateMessage?: null): ProposalDescriptionUpdatedEventFilter;
        "ProposalExecuted(uint256)"(id?: null): ProposalExecutedEventFilter;
        ProposalExecuted(id?: null): ProposalExecutedEventFilter;
        "ProposalObjectionPeriodSet(uint256,uint256)"(id?: BigNumberish | null, objectionPeriodEndBlock?: null): ProposalObjectionPeriodSetEventFilter;
        ProposalObjectionPeriodSet(id?: BigNumberish | null, objectionPeriodEndBlock?: null): ProposalObjectionPeriodSetEventFilter;
        "ProposalQueued(uint256,uint256)"(id?: null, eta?: null): ProposalQueuedEventFilter;
        ProposalQueued(id?: null, eta?: null): ProposalQueuedEventFilter;
        "ProposalThresholdBPSSet(uint256,uint256)"(oldProposalThresholdBPS?: null, newProposalThresholdBPS?: null): ProposalThresholdBPSSetEventFilter;
        ProposalThresholdBPSSet(oldProposalThresholdBPS?: null, newProposalThresholdBPS?: null): ProposalThresholdBPSSetEventFilter;
        "ProposalTransactionsUpdated(uint256,address,address[],uint256[],string[],bytes[],string)"(id?: BigNumberish | null, proposer?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, updateMessage?: null): ProposalTransactionsUpdatedEventFilter;
        ProposalTransactionsUpdated(id?: BigNumberish | null, proposer?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, updateMessage?: null): ProposalTransactionsUpdatedEventFilter;
        "ProposalUpdatablePeriodSet(uint32,uint32)"(oldProposalUpdatablePeriodInBlocks?: null, newProposalUpdatablePeriodInBlocks?: null): ProposalUpdatablePeriodSetEventFilter;
        ProposalUpdatablePeriodSet(oldProposalUpdatablePeriodInBlocks?: null, newProposalUpdatablePeriodInBlocks?: null): ProposalUpdatablePeriodSetEventFilter;
        "ProposalUpdated(uint256,address,address[],uint256[],string[],bytes[],string,string)"(id?: BigNumberish | null, proposer?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, description?: null, updateMessage?: null): ProposalUpdatedEventFilter;
        ProposalUpdated(id?: BigNumberish | null, proposer?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, description?: null, updateMessage?: null): ProposalUpdatedEventFilter;
        "ProposalVetoed(uint256)"(id?: null): ProposalVetoedEventFilter;
        ProposalVetoed(id?: null): ProposalVetoedEventFilter;
        "QuorumCoefficientSet(uint32,uint32)"(oldQuorumCoefficient?: null, newQuorumCoefficient?: null): QuorumCoefficientSetEventFilter;
        QuorumCoefficientSet(oldQuorumCoefficient?: null, newQuorumCoefficient?: null): QuorumCoefficientSetEventFilter;
        "QuorumVotesBPSSet(uint256,uint256)"(oldQuorumVotesBPS?: null, newQuorumVotesBPS?: null): QuorumVotesBPSSetEventFilter;
        QuorumVotesBPSSet(oldQuorumVotesBPS?: null, newQuorumVotesBPS?: null): QuorumVotesBPSSetEventFilter;
        "RefundableVote(address,uint256,bool)"(voter?: string | null, refundAmount?: null, refundSent?: null): RefundableVoteEventFilter;
        RefundableVote(voter?: string | null, refundAmount?: null, refundSent?: null): RefundableVoteEventFilter;
        "SignatureCancelled(address,bytes)"(signer?: string | null, sig?: null): SignatureCancelledEventFilter;
        SignatureCancelled(signer?: string | null, sig?: null): SignatureCancelledEventFilter;
        "TimelocksAndAdminSet(address,address,address)"(timelock?: null, timelockV1?: null, admin?: null): TimelocksAndAdminSetEventFilter;
        TimelocksAndAdminSet(timelock?: null, timelockV1?: null, admin?: null): TimelocksAndAdminSetEventFilter;
        "VoteCast(address,uint256,uint8,uint256,string)"(voter?: string | null, proposalId?: null, support?: null, votes?: null, reason?: null): VoteCastEventFilter;
        VoteCast(voter?: string | null, proposalId?: null, support?: null, votes?: null, reason?: null): VoteCastEventFilter;
        "VoteSnapshotBlockSwitchProposalIdSet(uint256,uint256)"(oldVoteSnapshotBlockSwitchProposalId?: null, newVoteSnapshotBlockSwitchProposalId?: null): VoteSnapshotBlockSwitchProposalIdSetEventFilter;
        VoteSnapshotBlockSwitchProposalIdSet(oldVoteSnapshotBlockSwitchProposalId?: null, newVoteSnapshotBlockSwitchProposalId?: null): VoteSnapshotBlockSwitchProposalIdSetEventFilter;
        "VotingDelaySet(uint256,uint256)"(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        VotingDelaySet(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        "VotingPeriodSet(uint256,uint256)"(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
        VotingPeriodSet(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
        "Withdraw(uint256,bool)"(amount?: null, sent?: null): WithdrawEventFilter;
        Withdraw(amount?: null, sent?: null): WithdrawEventFilter;
        "WithdrawFromForkEscrow(uint32,address,uint256[])"(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null): WithdrawFromForkEscrowEventFilter;
        WithdrawFromForkEscrow(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null): WithdrawFromForkEscrowEventFilter;
    };
    estimateGas: {
        MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        _acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _acceptVetoer(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _burnVetoPower(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setDynamicQuorumParams(newMinQuorumVotesBPS: BigNumberish, newMaxQuorumVotesBPS: BigNumberish, newQuorumCoefficient: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setErc20TokensToIncludeInFork(erc20tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setForkDAODeployer(newForkDAODeployer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setForkEscrow(newForkEscrow: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setForkParams(forkEscrow_: string, forkDAODeployer_: string, erc20TokensToIncludeInFork_: string[], forkPeriod_: BigNumberish, forkThresholdBPS_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setForkPeriod(newForkPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setForkThresholdBPS(newForkThresholdBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setLastMinuteWindowInBlocks(newLastMinuteWindowInBlocks: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setMaxQuorumVotesBPS(newMaxQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setMinQuorumVotesBPS(newMinQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setObjectionPeriodDurationInBlocks(newObjectionPeriodDurationInBlocks: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setPendingVetoer(newPendingVetoer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setProposalThresholdBPS(newProposalThresholdBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setProposalUpdatablePeriodInBlocks(newProposalUpdatablePeriodInBlocks: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setQuorumCoefficient(newQuorumCoefficient: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setTimelocksAndAdmin(newTimelock: string, newTimelockV1: string, newAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setVoteSnapshotBlockSwitchProposalId(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _withdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        adjustedTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        cancel(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelSig(sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        castRefundableVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        castRefundableVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        dynamicQuorumVotes(againstVotes: BigNumberish, adjustedTotalSupply_: BigNumberish, params: NounsDAOStorageV3.DynamicQuorumParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        erc20TokensToIncludeInFork(overrides?: CallOverrides): Promise<BigNumber>;
        escrowToFork(tokenIds: BigNumberish[], proposalIds: BigNumberish[], reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        execute(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeFork(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeOnTimelockV1(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        forkDAODeployer(overrides?: CallOverrides): Promise<BigNumber>;
        forkEndTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        forkEscrow(overrides?: CallOverrides): Promise<BigNumber>;
        forkPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        forkThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        forkThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getDynamicQuorumParamsAt(blockNumber_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(timelock_: string, nouns_: string, forkEscrow_: string, forkDAODeployer_: string, vetoer_: string, daoParams_: NounsDAOStorageV3.NounsDAOParamsStruct, dynamicQuorumParams_: NounsDAOStorageV3.DynamicQuorumParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        joinFork(tokenIds: BigNumberish[], proposalIds: BigNumberish[], reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lastMinuteWindowInBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        latestProposalIds(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxQuorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
        minQuorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
        nouns(overrides?: CallOverrides): Promise<BigNumber>;
        numTokensInForkEscrow(overrides?: CallOverrides): Promise<BigNumber>;
        objectionPeriodDurationInBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        pendingVetoer(overrides?: CallOverrides): Promise<BigNumber>;
        proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
        proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
        proposalUpdatablePeriodInBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalsV3(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        proposeBySigs(proposerSignatures: NounsDAOStorageV3.ProposerSignatureStruct[], targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        proposeOnTimelockV1(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        queue(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "quorumParamsCheckpoints()"(overrides?: CallOverrides): Promise<BigNumber>;
        "quorumParamsCheckpoints(uint256)"(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quorumVotes(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        timelock(overrides?: CallOverrides): Promise<BigNumber>;
        timelockV1(overrides?: CallOverrides): Promise<BigNumber>;
        updateProposal(proposalId: BigNumberish, targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, updateMessage: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateProposalBySigs(proposalId: BigNumberish, proposerSignatures: NounsDAOStorageV3.ProposerSignatureStruct[], targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, updateMessage: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateProposalDescription(proposalId: BigNumberish, description: string, updateMessage: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateProposalTransactions(proposalId: BigNumberish, targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], updateMessage: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        veto(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        vetoer(overrides?: CallOverrides): Promise<BigNumber>;
        voteSnapshotBlockSwitchProposalId(overrides?: CallOverrides): Promise<BigNumber>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawDAONounsFromEscrowIncreasingTotalSupply(tokenIds: BigNumberish[], to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawDAONounsFromEscrowToTreasury(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawFromForkEscrow(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_VOTING_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_VOTING_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _acceptVetoer(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _burnVetoPower(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setDynamicQuorumParams(newMinQuorumVotesBPS: BigNumberish, newMaxQuorumVotesBPS: BigNumberish, newQuorumCoefficient: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setErc20TokensToIncludeInFork(erc20tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setForkDAODeployer(newForkDAODeployer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setForkEscrow(newForkEscrow: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setForkParams(forkEscrow_: string, forkDAODeployer_: string, erc20TokensToIncludeInFork_: string[], forkPeriod_: BigNumberish, forkThresholdBPS_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setForkPeriod(newForkPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setForkThresholdBPS(newForkThresholdBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setLastMinuteWindowInBlocks(newLastMinuteWindowInBlocks: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setMaxQuorumVotesBPS(newMaxQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setMinQuorumVotesBPS(newMinQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setObjectionPeriodDurationInBlocks(newObjectionPeriodDurationInBlocks: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setPendingVetoer(newPendingVetoer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setProposalThresholdBPS(newProposalThresholdBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setProposalUpdatablePeriodInBlocks(newProposalUpdatablePeriodInBlocks: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setQuorumCoefficient(newQuorumCoefficient: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setTimelocksAndAdmin(newTimelock: string, newTimelockV1: string, newAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setVoteSnapshotBlockSwitchProposalId(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _withdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        adjustedTotalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancel(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelSig(sig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        castRefundableVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        castRefundableVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        dynamicQuorumVotes(againstVotes: BigNumberish, adjustedTotalSupply_: BigNumberish, params: NounsDAOStorageV3.DynamicQuorumParamsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        erc20TokensToIncludeInFork(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        escrowToFork(tokenIds: BigNumberish[], proposalIds: BigNumberish[], reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        execute(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeFork(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeOnTimelockV1(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        forkDAODeployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forkEndTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forkEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forkPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forkThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forkThresholdBPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDynamicQuorumParamsAt(blockNumber_: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(timelock_: string, nouns_: string, forkEscrow_: string, forkDAODeployer_: string, vetoer_: string, daoParams_: NounsDAOStorageV3.NounsDAOParamsStruct, dynamicQuorumParams_: NounsDAOStorageV3.DynamicQuorumParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        joinFork(tokenIds: BigNumberish[], proposalIds: BigNumberish[], reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lastMinuteWindowInBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestProposalIds(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxQuorumVotes(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minQuorumVotes(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nouns(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        numTokensInForkEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        objectionPeriodDurationInBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingVetoer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalMaxOperations(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalThresholdBPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalUpdatablePeriodInBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalsV3(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        proposeBySigs(proposerSignatures: NounsDAOStorageV3.ProposerSignatureStruct[], targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        proposeOnTimelockV1(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        queue(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "quorumParamsCheckpoints()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "quorumParamsCheckpoints(uint256)"(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quorumVotes(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timelockV1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateProposal(proposalId: BigNumberish, targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, updateMessage: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateProposalBySigs(proposalId: BigNumberish, proposerSignatures: NounsDAOStorageV3.ProposerSignatureStruct[], targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, updateMessage: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateProposalDescription(proposalId: BigNumberish, description: string, updateMessage: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateProposalTransactions(proposalId: BigNumberish, targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], updateMessage: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        veto(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        vetoer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        voteSnapshotBlockSwitchProposalId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawDAONounsFromEscrowIncreasingTotalSupply(tokenIds: BigNumberish[], to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawDAONounsFromEscrowToTreasury(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawFromForkEscrow(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
