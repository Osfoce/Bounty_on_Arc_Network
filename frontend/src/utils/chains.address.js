export const CHAIN_IDS = {
  ARC: 5042002,
  ARC_MAINNET: 5042,
};

export const CONTRACT_ADDRESSES = {
  [CHAIN_IDS.ARC]: {
    bounty: "0x498482e334269a10d0621D3AC5e726734B01DDCe",
  },
};

export const NATIVE_TOKENS = {
  [CHAIN_IDS.ARC]: {
    symbol: "USDC",
    decimals: 18,
  },
};

// export const TOKEN_ADDRESSES = {
//   [CHAIN_IDS.ARC]: {
//     USDC: {
//       address: "0x0000000088827d2d103ee2d9A6b781773AE03FfB",
//       symbol: "USDC",
//       decimals: 18,
//       // On-chain TokenType this UI token maps to
//       contractTokenType: "USDC", // or add a new enum value if the contract supports it
//     },
//   },
// };
