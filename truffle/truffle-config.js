require('dotenv').config();
const mnemonic = process.env.MNEMONIC.toString().trim();

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 9545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },

    matic: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc.ankr.com/polygon_mumbai`),
      network_id: 80001,       // Goerli's id
      confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
  
  contracts_build_directory: './build/contracts',
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.17" 
    }
  }
};
