const { ethers } = require('hardhat');
require('dotenv').config({ path: '.env' });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require('../constants');


async function home() {
  // Address of the Crypto Devs NFT contract that you deployed in the previous module
  const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contract.
    */ 
   const cryptoDevsTokenContract = await ethers.getContractFactory("CryptoDevToken");
  
   // deploy the contract
   const deployedCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy(cryptoDevsNFTContract);
  
   await deployedCryptoDevsTokenContract.deployed();

  // Print the address of the deployed contract
   console.log("Your Crypto Devs Token Contract is deployed: ", deployedCryptoDevsTokenContract.address);
}


// Call the main function and catch if there is any error 
home()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
})