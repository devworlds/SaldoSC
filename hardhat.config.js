require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/3ckF_ilaxcd6cDkB4_cazgbN0VdOuUxG",
      accounts: ["9a573ab914b8be2380a3cb9103adf6ae691b2fca33ae6f3a5c69f56f5009f3f3"]
    },
  },
};
