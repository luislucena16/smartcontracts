require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

const FUJI_RPC_URL =
  process.env.FUJI_RPC_URL

const PRIVATE_KEY = 
  process.env.PRIVATE_KEY

module.exports = {
  solidity: "0.8.16",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
    },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
    chainId: 1337 // We set 1337 to make interacting with MetaMask simpler
    },
    fuji: {
    url: FUJI_RPC_URL,
    accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    },
  },
};