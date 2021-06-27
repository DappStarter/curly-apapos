require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture stock return magic assume industry light army giant'; 
let testAccounts = [
"0xaff147b75a6e147f591e48a93c06e7a6ac1af89730811e9cbd14ba8022ff4ea4",
"0x630314f73a16a6791de698cc56c7a69c6c5af42b55edf13deaf6decd5412ec48",
"0x3b7ebff4b6a9b351d0c8cba0b37cb302b78b8da4a18f2ddb3411042f27d1182a",
"0x992e702b15f91198a1718bdcc4bc0169ada2a293028f6b4bb5a9f9e2d6b7b642",
"0x997d2302302711778748007015d6848fa272df45b6160748502e5645424cae3f",
"0x53a586691595889918dfc3e002ef0579995c1e4b1342468c4f253d38cff46d26",
"0x62d6be664c16eac3c3a74303c26ce7477266a9806597d49e94733d9fc4859166",
"0x482d2d584414a083c4e934cf8dc5e19fe7571503ba182403d725fee2b77dccc2",
"0xaec57707dbb13b0ac48182e95d3b196cb3de2c22810115794fc95c8d2bfc9ab3",
"0xd8ecc04162eec4902dd227d3bdb3a6e3b736b739eb8a43dfe0fd660b37cc1392"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

