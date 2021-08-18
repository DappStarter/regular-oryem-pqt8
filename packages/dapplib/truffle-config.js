require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth saddle execute grace hat army genre'; 
let testAccounts = [
"0x5d562d5aeb19e908c4e2448b1dfa03c67feaf092c3f5dd29cad21f24b1049ec8",
"0xa00b32063c23fa89763f5a13aa96dc38904ad857ab97d36e552bdf399ec124cd",
"0x314e619e2f744a5b97ae53760c0ed567766e7abb86b8629b486a083311bc3a95",
"0xcb7f5a84b4c18ea79e54017f8ff4d0776e8aa9d56fc1073725b05b9e58cac0dc",
"0x6ba66842a90e6a899daa49053aecc8f9516c3a9794e7a66c8b7c3d5bee678cc9",
"0xc4aa4d0088f19a4609ed49b4cfcf457e123101aaafa4fed4ab5fd977b57e8d16",
"0xb6a1fc8e4b65313963b401c96637a286682548fe4385653e3a1b738053056bbb",
"0x17072f093493527349bfdaa1f13f213d3e081919e065cead9dbe36b33bf663e2",
"0xab72a3928f3b7b841daa25b2949da8575df718cb1ec42e9138bcd4d3a6208b8a",
"0x9fff5d0a91bce469f604eee555cc1cae010d2d0d73107e311e1fb1a319837ba3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

