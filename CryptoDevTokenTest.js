const { expect } = require("chai");
const { ethers } = require("hardhat");
const BigNumber = require("ethers").BigNumber;

describe("CryptoDevToken", function() {
  it("Should mint tokens correctly", async function() {
   
    console.log("paso 1")
    const CryptoDevToken = await ethers.getContractFactory("CryptoDevToken");
    const cryptoDevToken = await CryptoDevToken.deploy("0x1Ef9469e9A5378f471aaf20AA572e43F5835AC52");
    await cryptoDevToken.deployed();
    console.log("Deployed successfully: ", cryptoDevToken.address);
    console.log("paso 2")
    // mint 10 tokens
    const owner = await ethers.getSigner(0);
    const initialBalance = await cryptoDevToken.balanceOf(owner.address);
    await cryptoDevToken.mint(10,{ value: ethers.utils.parseEther("0.01"),});
    const newBalance = await cryptoDevToken.balanceOf(owner.address);
    const bigNumber = BigNumber.from(newBalance);
    console.log(parseInt(bigNumber.toString()));
    // check that balance increased by 10
    expect(newBalance).to.equal(initialBalance.add(ethers.utils.parseEther("10")));
    console.log("paso 4")
    // claim tokens based on NFTs owned
    const initialSupply = await cryptoDevToken.totalSupply();
    console.log(initialSupply)
    await cryptoDevToken.claim();
    const newSupply = await cryptoDevToken.totalSupply();
    console.log("paso 5")
    // check that supply increased based on unclaimed NFTs owned
    expect(newSupply).to.equal(initialSupply.add(1));
    console.log("paso 6")
    // withdraw all ETH sent to the contract
    const initialOwnerBalance = await owner.getBalance();
    await cryptoDevToken.withdraw();
    const newOwnerBalance = await owner.getBalance();
    console.log("paso 7")
    // check that owner balance increased by the contract balance
    expect(newOwnerBalance).to.equal(initialOwnerBalance.add(ethers.BigNumber.from(amount)));
  });
});
