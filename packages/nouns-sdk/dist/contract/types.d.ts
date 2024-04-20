import { NounsTokenFactory, NounsAuctionHouseFactory, NounsDescriptorFactory, NounsSeederFactory, NounsDaoLogicV2Factory } from '@nouns/contracts';
export interface ContractAddresses {
    nounsToken: string;
    nounsSeeder: string;
    nounsDescriptor: string;
    nftDescriptor: string;
    nounsAuctionHouse: string;
    nounsAuctionHouseProxy: string;
    nounsAuctionHouseProxyAdmin: string;
    nounsDaoExecutor: string;
    nounsDaoExecutorV2?: string;
    nounsDaoExecutorProxy?: string;
    nounsDAOProxy: string;
    nounsDAOLogicV1?: string;
    nounsDAOLogicV2?: string;
    nounsDAOLogicV3?: string;
    nounsDAOData?: string;
}
export interface Contracts {
    nounsTokenContract: ReturnType<typeof NounsTokenFactory.connect>;
    nounsAuctionHouseContract: ReturnType<typeof NounsAuctionHouseFactory.connect>;
    nounsDescriptorContract: ReturnType<typeof NounsDescriptorFactory.connect>;
    nounsSeederContract: ReturnType<typeof NounsSeederFactory.connect>;
    nounsDaoContract: ReturnType<typeof NounsDaoLogicV2Factory.connect>;
}
export declare enum ChainId {
    Mainnet = 1,
    Ropsten = 3,
    Rinkeby = 4,
    Kovan = 42,
    Local = 31337
}
