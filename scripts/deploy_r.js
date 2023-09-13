// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    try {
        // DEPLOY - stripe exchanger/reward
        const REWARD = await hre.ethers.getContractFactory("TokenCreator");
        const Reward = await REWARD.deploy('GOOD', 'GD', 18, 5550000, 3, 4);
        await Reward.deployed();
        console.log("Reward contract deployed to:", Reward.address);
        await hre.run('verify:verify', {
            address: Reward.address,
            constructorArguments: ['GOOD', 'GD', 18, 5550000, 3, 4]
        })
        console.log(">>end")
    } catch (e) {
        console.log(">>e", e.message)
    }


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


