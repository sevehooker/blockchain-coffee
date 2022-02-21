require('dotenv').config();

var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = process.env['MNEMONIC'];
var tokenKey = process.env['ENDPOINT_KEY'];

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider( mnemonic, "https://rinkeby.infura.io/v3/" + tokenKey);
      },
      network_id: 4,
      gas: 6612388, // Gas limit used for deploys
      // gasPrice: 20000000000, // 20 gwei (worked)
      gasPrice: 2000000000, // 2 gwei (untested)
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24",
      docker: false,
    }
  }
};