import { sepolia } from "wagmi/chains";

// const injectiveTestnetRpcUrl =
//   "https://k8s.testnet.json-rpc.injective.network/";
// const injectiveTestnetExplorerUrl =
//   "https://testnet.explorer.injective.network/";

// Injective Testnet Configuration
const injectiveTestnet = {
  id: 1439,
  name: "INJ Testnet",
  nativeCurrency: { name: "Injective", symbol: "INJ", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://k8s.testnet.json-rpc.injective.network/"] },
  },
  blockExplorers: {
    default: {
      name: "Injective Explorer",
      url:  "https://testnet.explorer.injective.network/",
    },
  },
  testnet: true,
};

export const creditcoinTestnet = {
  id: 102031,
  name: "Creditcoin Testnet",
  nativeCurrency: {
    name: "Creditcoin Testnet",
    symbol: "tCTC",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.cc3-testnet.creditcoin.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Creditcoin Explorer",
      url: "https://creditcoin-testnet.blockscout.com",
    },
  },
  testnet: true,
};

export const supportedChains = [
  sepolia,
  injectiveTestnet,
  creditcoinTestnet,
];
