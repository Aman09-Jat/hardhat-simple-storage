const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
    // anonymous arrow function
    async (taskArg, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current Block Number: ${blockNumber}`)
    }
)

module.exports = {}
