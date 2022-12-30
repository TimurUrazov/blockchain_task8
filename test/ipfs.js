const { expect } = require('chai');
const { ethers } = require('hardhat');
const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');

describe('IPFS', function () {
    async function deployment() {
        const [signer] = await ethers.getSigners();
        const factory = await ethers.getContractFactory('IPFS', signer);
        const contract = await factory.deploy();
        return contract;
    }

    it('Should not get cid before uploaded', async function () {
        const contract = await loadFixture(deployment);
        const cid = await contract.get();
        expect(cid).to.equal('');
    });

    it('Should get cid after uploaded', async function () {
        const contract = await loadFixture(deployment);
        const cid = 'QmXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx';
        await contract.set(cid);
        const cid2 = await contract.get();
        expect(cid2).to.equal(cid);
    });
});