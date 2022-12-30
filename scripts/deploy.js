const {ethers} = require('hardhat');

async function main() {
    const [signer] = await ethers.getSigners();
    const factory = await ethers.getContractFactory("IPFS");
    const contract = await factory.deploy();

    console.log(`Signer address ${signer.address}`)

    await contract.deployed();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
