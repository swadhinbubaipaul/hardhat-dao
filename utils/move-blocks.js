const { network } = require("hardhat");

async function moveBlocks(amount, sleepAmount = 0) {
  console.log("Moving blocks...");
  for (let index = 0; index < amount; index++) {
    await network.provider.request({
      method: "evm_mine",
      params: [],
    });
  }
}

module.exports = { moveBlocks };
