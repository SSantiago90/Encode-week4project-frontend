# 🏗 Scaffold-ETH 2

## Weekend Project

This is a group activity for at least 3 students:

* Complete the projects together with your group
* Create a voting dApp to cast votes, delegate and query results on chain
* Request voting tokens to be minted using the API ✅
* (bonus) Store a list of recent votes in the backend and display that on frontend
* (bonus) Use an oracle to fetch off-chain data
  * Use an oracle to fetch information from a data source of your preference
  * Use the data fetched to create the proposals in the constructor of the ballot

### How to deploy:
1. yarn compile
2. yarn deploy --network sepolia
3. make sure to add PK and Alchmey on hardhat .env

```bash
❯ yarn deploy --network sepolia
Nothing to compile
No need to generate any newer typings.
deploying "YourContract" (tx: 0x071c485c0b5db17c2a1ac4f74cdb5b40e9631ec48b437ebf202a8a061b21f28d)...: deployed at 0x560c621b2EDb46ded08BB562071A7b48dBc22b7C with 533171 gas
👋 Initial greeting: Building Unstoppable Apps!!!
deploying "HelloWorld" (tx: 0xc03995888948b88249fb0496a1a5dc47b378d616335f6c6ec51107e95490e07a)...: deployed at 0x5d94D5eE053a3aF12fcB508Ce9Fa8d8f887Cd92A with 283933 gas
deploying "MyToken" (tx: 0xe73a793612fc16b769b3980c056092e6f01017ab749868204ed1d5405e4e8732)...: deployed at 0x66F13e1132ddFB496764d2D3e992b0BFD7577a3B with 2069155 gas
👋 Token Name: "MyToken" Symbol: "MTK"
deploying "TokenizedBallot" (tx: 0x6514969e9eba653eb80502f9edfbfcf0c4087cf84a38f86ad645703dca22ee8b)...: deployed at 0x2Aaf4e167bd5e69215Fb52E201A7C611490C07Ca with 470119 gas
👋 Ballot uses tokenContract @ 0x66F13e1132ddFB496764d2D3e992b0BFD7577a3B
📝 Updated TypeScript contract definition file on ../nextjs/contracts/deployedContracts.ts
```

### Voting dApp integration guidelines

* Build the frontend using Scaffold ETH 2 as a base
* Build the backend using NestJS to provide the `Mint` method
  * Implement a single POST method
    * Request voting tokens from API
* Use these tokens to interact with the tokenized ballot
* All other interactions must be made directly on-chain

<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Website</a>
</h4>

🧪 An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
- 🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of common web3 components to quickly build your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

![Debug Contracts tab](https://github.com/scaffold-eth/scaffold-eth-2/assets/55535804/b237af0c-5027-4849-a5c1-2e31495cccb1)

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/scaffold-eth-2.git
cd scaffold-eth-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

**What's next**:

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your deployment scripts in `packages/hardhat/deploy`
- Edit your smart contract test in: `packages/hardhat/test`. To run test use `yarn hardhat:test`

## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
