// require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("solidity-coverage");
require("hardhat-gas-reporter"); 
require("@nomicfoundation/hardhat-toolbox");
 

const { privateKey } = require("./secret.json");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "testnet",
  networks: {
    // localhost: {
    //   url: "http://127.0.0.1:8545",
    // },
    hardhat: {},
    // testnet: {
    //   url: "https://bsc-testnet.publicnode.com",
    //   chainId: 97,
    //   gasPrice: 20000000000,
    //   accounts: [privateKey],
    // },
    testnet: {
      url: "https://rpc.sepolia.org/",
      chainId: 11155111,
      gasPrice: 20000000000,
      accounts: [privateKey],
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  allowUnlimitedContractSize: true,
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
  etherscan: {
    apiKey: "EIAAN4XVMZYMPFXZMYAV291AQP2UUMI6AZ",
  }   
};
