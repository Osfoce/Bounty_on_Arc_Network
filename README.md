Fresh Bounty

Fresh Bounty is a Web3 bounty marketplace for funding work and distributing rewards on-chain.

Creators publish and fund bounties, contributors enrol and submit their work, and approved winners receive their rewards through blockchain transactions.

For the Arc version of Fresh Bounty, USDC becomes the primary settlement asset for bounty funding, escrow, and rewards. Arc provides an EVM-compatible environment where Fresh Bounty can continue using Solidity, Wagmi, Viem, and familiar Ethereum development tooling while benefiting from USDC-native transaction fees and deterministic sub-second finality.

The Problem

Web3 bounty platforms often have a fragmented payment experience.

A creator may need to:

fund a bounty with one asset,
hold another token for gas,
wait for transaction confirmation,
manually verify payments,
and coordinate reward distribution across multiple systems.

For contributors, the process can be equally fragmented.

Fresh Bounty brings the workflow into one application:

Create → Fund → Submit → Select → Distribute → Claim

With Arc, this workflow can be built around USDC from funding through settlement, reducing the need for users to manage a separate volatile gas token.

Why Arc

Fresh Bounty is designed around payments and rewards, making Arc's stablecoin-native architecture particularly relevant.

USDC as Gas

Arc uses USDC as its native gas asset, so users do not need a separate volatile token such as ETH simply to pay transaction fees.

For Fresh Bounty, this creates a more coherent experience:

USDC
  │
  ├── Bounty Funding
  │
  ├── Smart Contract Execution
  │
  ├── Escrow
  │
  └── Contributor Rewards

Instead of introducing another token solely for gas, the same dollar-denominated asset can be used throughout the bounty economy.

Arc's current documentation describes USDC as the native gas asset while retaining standard EVM execution and familiar Solidity tooling.

Deterministic Sub-Second Finality

Bounty platforms benefit from knowing when a payment is final.

Arc provides deterministic finality in under a second, which is useful for workflows such as:

confirming bounty funding,
recording winner distributions,
processing reward claims,
updating bounty state,
and reflecting completed payments in the application.

This allows Fresh Bounty to treat a finalized blockchain transaction as settled without relying on long confirmation waits or Ethereum-style reorganization handling.

EVM Compatibility

Fresh Bounty already uses:

Solidity
React
Wagmi
Viem
RainbowKit
WalletConnect

Arc is EVM-compatible, so the existing development model can largely remain intact.

The Arc migration primarily requires:

Adding Arc network configuration.
Deploying the bounty contract to Arc.
Updating the contract address map.
Using Arc's RPC.
Handling USDC as Arc's native gas asset correctly.
Connecting the existing frontend and backend transaction flow to the Arc deployment.

Existing Solidity contracts and tools such as Foundry, Hardhat, Viem, and Wagmi are supported on Arc.

How Fresh Bounty + Arc Works

The Arc integration is centered around the bounty lifecycle.

                    FRESH BOUNTY
                         │
                         ▼
                 Create a Bounty
                         │
                         ▼
                  Fund with USDC
                         │
                         ▼
                Arc Bounty Contract
                         │
                  ┌──────┴──────┐
                  │             │
                  ▼             ▼
             Contributors    Bounty State
                  │
                  ▼
               Submit Work
                  │
                  ▼
             Creator Reviews
                  │
                  ▼
             Select Winner(s)
                  │
                  ▼
            USDC Distribution
                  │
                  ▼
             Contributor Claim

The application has two complementary layers.

Application Layer

The Express/MongoDB backend stores application metadata such as:

bounty title and description,
categories and tags,
enrolments,
submissions,
profiles,
dashboard information,
reward history,
and application status.
Blockchain Layer

The Arc smart contract handles the parts that benefit from on-chain verification:

bounty funding,
escrowed reward amounts,
winner distribution,
reward claims,
and transaction records.

The frontend connects the two layers.

React + RainbowKit + Wagmi + Viem
                │
                ▼
         Arc Smart Contract
                │
                ▼
        USDC Bounty Funds
                │
                ▼
        Express + MongoDB

The blockchain remains the source of truth for financial settlement, while MongoDB provides efficient application-level indexing and metadata.

Core Features
Bounty Marketplace

Browse bounties using:

status
category
tags
creator information
bounty details
Wallet Connection

Users connect an EVM wallet through:

RainbowKit
Wagmi
WalletConnect

The same wallet experience can be configured for Arc.

USDC Bounty Funding

Creators fund their bounties using USDC.

The funding transaction is executed through the bounty smart contract and recorded on Arc.

On-chain Escrow

Reward funds can remain secured by the bounty contract while contributors work.

The application does not need to rely entirely on a centralized database to represent the financial state of a bounty.

Contributor Submissions

Contributors enrol in bounties and submit:

project links,
descriptions,
supporting information,
and other required details.

Submission metadata is stored by the application backend.

Winner Selection

Bounty creators review submissions and select one or more winners depending on the configured payout model.

Supported payout models include:

single winner,
equal split,
percentage split.
On-chain Reward Distribution

Once winners are selected, the bounty contract distributes the configured reward amounts.

The resulting transaction can be independently verified on Arc.

Reward Claims

Winners can claim their assigned rewards through the application and wallet.

The backend records the application state while the blockchain provides the underlying transaction record.

Arc Integration

The Arc deployment turns Fresh Bounty from a multi-chain EVM bounty application into a USDC-first bounty settlement system.

Current Architecture
React / Vite
     │
     ├── RainbowKit
     ├── Wagmi
     └── Viem
          │
          ▼
   Bounty Smart Contract
          │
          ▼
    Injective Testnet
          │
          ▼
 Express API + MongoDB
Arc Architecture
React / Vite
     │
     ├── RainbowKit
     ├── Wagmi
     └── Viem
          │
          ▼
   Arc Mainnet
          │
          ├── USDC Gas
          │
          ├── Bounty Funding
          │
          ├── Escrow
          │
          ├── Distribution
          │
          └── Claims
          │
          ▼
 Express API + MongoDB

The existing application architecture does not need to be replaced.

Instead, the blockchain layer is adapted for Arc.

Why USDC Matters for Fresh Bounty

The core economic activity on Fresh Bounty is already dollar-oriented:

Creators fund work → contributors complete work → contributors receive rewards.

Using USDC makes the reward amount easier to understand and price.

Arc extends this model by making USDC the native gas asset.

That means the platform can avoid introducing a separate volatile gas token into the primary user experience.

For example:

Creator
   │
   │ 100 USDC
   ▼
Bounty Contract
   │
   │ holds reward
   ▼
Contributor completes work
   │
   ▼
Winner selected
   │
   │ 100 USDC
   ▼
Contributor

At the same time, the transactions themselves use USDC for Arc network fees.

Technical Architecture
fresh-bounty/

├── contract/
│   ├── ABI
│   ├── address configuration
│   └── deployment configuration
│
├── backend/
│   ├── config/
│   │   ├── database
│   │   └── chain clients
│   │
│   ├── routes/
│   │   ├── bounty
│   │   ├── user
│   │   ├── enrolment
│   │   ├── submission
│   │   └── rewards
│   │
│   ├── jobs/
│   │   └── bounty status updater
│   │
│   └── server.js
│
└── frontend/
    └── src/
        ├── pages/
        ├── components/
        ├── hooks/
        └── services/
Tech Stack
Frontend
React 18
Vite
Tailwind CSS
React Router
RainbowKit
Wagmi
Viem
WalletConnect
Backend
Node.js
Express
MongoDB
Mongoose
node-cron
Blockchain
Solidity
EVM smart contracts
Arc
USDC
Viem
Wagmi
Arc Deployment Plan

The Arc migration follows a relatively small number of steps because Fresh Bounty already uses an EVM-compatible architecture.

1. Add Arc Network Configuration

Configure the frontend and backend for Arc Mainnet.

Arc Mainnet currently uses chain ID 5042, with the official RPC at https://rpc.mainnet.arc.io and explorer at https://explorer.arc.io.

2. Deploy the Bounty Contract

Deploy the existing bounty contract to Arc using the existing Solidity/Foundry workflow.

The contract should be tested against Arc before using real USDC.

3. Configure USDC

Arc has a native USDC model.

The application must distinguish between Arc's native USDC representation used for gas/native value and the ERC-20 USDC interface when interacting with contracts. Arc's documentation specifically notes the difference in decimal representation between the native and ERC-20 views.

4. Update Contract Addresses

Replace the Injective Testnet contract address with the deployed Arc contract address in:

contract/address.js
5. Update Frontend

Configure Wagmi/RainbowKit to support Arc and point transaction calls to the Arc deployment.

6. Update Backend

Configure the backend's chain client and event/indexing logic for Arc.

The backend continues to store application metadata while blockchain events provide the financial settlement layer.

7. Test the Complete Flow

Test:

Connect Wallet
      ↓
Create Bounty
      ↓
Fund Bounty
      ↓
Enrol
      ↓
Submit Work
      ↓
Select Winner
      ↓
Distribute Reward
      ↓
Claim Reward
      ↓
Verify Arc Transaction
Existing Deployment

The original Fresh Bounty deployment uses an Injective Testnet bounty contract:

0xc49c0457c656B901324cB7f9b6736D80f1DBD28B

This address belongs to the existing Injective Testnet deployment.

For the Arc version, a new Arc contract deployment should be used rather than presenting the Injective deployment as the Arc integration.

API Architecture

The API remains responsible for application data.

Route	Purpose
GET /task	List and filter bounties
POST /task	Save bounty metadata
GET/PATCH/DELETE /task/:id	Manage bounty records
GET /user/:wallet	Retrieve wallet profile/activity
GET /dashboard/:wallet	Retrieve wallet dashboard data
POST /enroll	Enrol in a bounty
POST /submission	Submit bounty work
POST /task/:id/distribute	Synchronize winner distribution
POST /task/:id/claim	Record reward claim
/api/v1/bounty/*	Alternate bounty controller endpoints

The API does not replace the blockchain.

Instead:

MongoDB
   │
   └── Application state + metadata

Arc
   │
   └── Financial settlement + transaction history

This separation allows the application to provide a fast marketplace experience while keeping critical reward transactions verifiable on-chain.

Local Development
Prerequisites
Node.js 18+
npm
MongoDB or MongoDB Atlas
WalletConnect project ID
EVM-compatible wallet
Arc testnet/mainnet configuration depending on deployment stage

Install dependencies:

cd frontend
npm install

cd ../backend
npm install

Create:

frontend/.env
VITE_WALLET_CONNECT_PROJECT_ID=your_walletconnect_project_id

Create:

backend/.env
MONGODB_URI=mongodb://127.0.0.1:27017/fresh-bounty
PORT=5000

ARC_RPC_URL=https://rpc.mainnet.arc.io

Start the backend:

cd backend
npm run dev

Start the frontend:

cd frontend
npm run dev
```

Vite prints the local frontend URL (normally `http://localhost:5173`). The API uses port `5000` unless `PORT` is set.

> **Note:** several frontend API calls currently target the deployed endpoint `https://fresh-bounty.onrender.com`. To run completely locally, move that base URL into a Vite environment variable and update those calls to use it.

## Available scripts

| Directory | Command | Purpose |
| --- | --- | --- |
| `frontend` | `npm run dev` | Run the Vite development server. |
| `frontend` | `npm run build` | Create a production build. |
| `frontend` | `npm run lint` | Lint frontend source files. |
| `frontend` | `npm run preview` | Preview the production build. |
| `backend` | `npm start` | Run the Express API. |
| `backend` | `npm run dev` | Run the API with Nodemon. |

## Main API routes

The API is mounted under `/api` unless noted otherwise.

| Route | Description |
| --- | --- |
| `GET /task` | List bounties with filtering and pagination. |
| `POST /task` | Save a new bounty record. |
| `GET/PATCH/DELETE /task/:id` | Read, update, or remove a bounty. |
| `GET /user/:wallet` | Create or retrieve a wallet user and its activity. |
| `GET /dashboard/:wallet` | Get wallet-specific bounty and submission metrics. |
| `POST /enroll` | Enrol a wallet in a bounty. |
| `POST /submission` | Submit work to a bounty. |
| `POST /task/:id/distribute` | Sync an on-chain winner distribution. |
| `POST /task/:id/claim` | Record a reward claim. |
| `/api/v1/bounty/*` | Alternate controller-based bounty endpoints. |

## Project structure

```text
fresh-bounty/
├── contract/              # ABI, contract address map, and event listener
├── backend/
│   ├── config/            # Database and chain clients
│   ├── routes/            # Bounty, user, enrolment, submission, reward APIs
│   ├── jobs/              # Hourly bounty-status updater
│   └── server.js          # Express entry point
└── frontend/
    └── src/
        ├── pages/         # Landing, dashboard, create, detail, profile pages
        ├── components/    # Layout, wallet, and bounty UI components
        ├── hooks/         # On-chain bounty actions
        └── services/      # Transaction configuration helpers
```

## Contract configuration

The shared package exports `BOUNTY_ABI` and `CONTRACT_ADDRESSES`. Its configured Injective Testnet bounty contract is:

```text
0xc49c0457c656B901324cB7f9b6736D80f1DBD28B
```

Update [`contract/address.js`](contract/address.js) after deploying to another network. The frontend uses this address map to decide which networks can create and interact with bounties.

## Notes for contributors

- Do not commit `.env` files or private RPC URLs.
- Bounty status is derived from `startDate` and `deadline`, and the backend also refreshes statuses hourly.
- The repository currently has no automated test suite. Run `npm run lint` and `npm run build` in `frontend` before opening a change.
