const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Crypto Dev Token Contract", function () {

    async function deployContract() {
        const CryptoDevToken = await ethers.getContractFactory("CryptoDevToken");
        const deployedCryptoDevToken = await CryptoDevToken.deploy("0x1Ef9469e9A5378f471aaf20AA572e43F5835AC52");
        
        await deployedCryptoDevToken.deployed();
        console.log("Token Contract Address: ", deployedCryptoDevToken.address);
        // expect(await deployedCryptoDevToken.address).to.equal("0x0000000000000000000000000000000000000000");

    }
    describe("Deploy Correctly", function () {
    it("Deploy correctly, check name and symbol is correct", async function() {
        console.log("test 1")
        const CryptoDevToken = await ethers.getContractFactory("CryptoDevToken");
        const deployedCryptoDevToken = await CryptoDevToken.deploy("0x1Ef9469e9A5378f471aaf20AA572e43F5835AC52");
        
        await deployedCryptoDevToken.deployed();
        console.log("Token Contract Address: ", deployedCryptoDevToken.address);
        expect(await deployedCryptoDevToken.address).to.not.equal("0x0000000000000000000000000000000000000000");
        expect(await deployedCryptoDevToken.name()).to.equal("Crypto Dev Token");
        console.log("Contract Name: ", await deployedCryptoDevToken.name());
        expect(await deployedCryptoDevToken.symbol()).to.equal("CD");
        console.log("Contract Symbol: ", await deployedCryptoDevToken.symbol());
       
    });
    it("Check name and symbol", async ()=> {
    
    })
    });
})