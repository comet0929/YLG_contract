// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const baseURI = "<BASE URI TO SET>";

  const tokenAddress = "0x0ae52c26effaa916251db39667c4f9b8fe87a321";
  const nft721Address = "0x52d219F77d393d43a76C593B4e14e7deb7090d41";
  const nft1155Address = "0x6013fC9fbeDe927Ad4e8dc52fdB45fF21a1dF7CA";
  const proxyAddress = "0x7f7Cf9187cD4c11f513655d31fcC72a625e312C7";
  const vaultAddres = "0x1E534C9e7A771Cd49013c814537e2F408ac3473a";

  // DEPLOY - YL Proxy Contract
  // const YLProxy = await hre.ethers.getContractFactory("YLProxy");
  // const ylProxy = await YLProxy.deploy(tokenAddress);
  // await ylProxy.deployed();
  // console.log("YLProxy contract deployed to:", ylProxy.address);

  // // DEPLOY - YLNFT1155 Contract (WE NEED TO SET THE MARKET ADDRESS BY FUNCTION)
  // const YLNFT1155 = await hre.ethers.getContractFactory("YLNFT1155");
  // const ylNFT1155 = await YLNFT1155.deploy(baseURI, ylProxy.address);
  // await ylNFT1155.deployed();
  // console.log("YLNFT1155 contract deployed to:", ylNFT1155.address);

  // // // DEPLOY - Marketplace NFT1155 Contract
  // const YL1155Marketplace = await hre.ethers.getContractFactory(
  //   "YL1155Marketplace"
  // );
  // const yl1155Marketplace = await YL1155Marketplace.deploy(
  //   tokenAddress,
  //   ylNFT1155.address,
  //   ylProxy.address
  // );
  // await yl1155Marketplace.deployed();
  // console.log(
  //   "YLNFT1155 Marketplace contract deployed to:",
  //   yl1155Marketplace.address
  // );

  // // // DEPLOY - ERC721 Contract (WE NEED TO SET THE MARKET ADDRESS BY FUNCTION)
  // const YLNFT = await hre.ethers.getContractFactory("YLNFT");
  // const ylNFT = await YLNFT.deploy(ylProxy.address);
  // await ylNFT.deployed();
  // console.log("YLNFT contract deployed to:", ylNFT.address);

  // // // DEPLOY - Marketplace ERC721 Contract (2)
  // const YLNFTMarketplace2 = await hre.ethers.getContractFactory(
  //   "YLNFTMarketplace2"
  // );
  // const ylNFTMarketplace2 = await YLNFTMarketplace2.deploy(ylNFT.address);
  // await ylNFTMarketplace2.deployed();
  // console.log(
  //   "YLFTMarketplace2 contract deployed to:",
  //   ylNFTMarketplace2.address
  // );

  // // // DEPLOY - Marketplace ERC721 Contract (1)
  // const YLNFTMarketplace1 = await hre.ethers.getContractFactory(
  //   "YLNFTMarketplace1"
  // );
  // const ylNFTMarketplace1 = await YLNFTMarketplace1.deploy(
  //   tokenAddress,
  //   ylNFT.address,
  //   ylProxy.address,
  //   ylNFTMarketplace2.address
  // );
  // await ylNFTMarketplace1.deployed();
  // console.log(
  //   "YLFTMarketplace1 contract deployed to:",
  //   ylNFTMarketplace1.address
  // );

  // // DEPLOY - YLVault FABRIC contract (Imports substorage Vault.sol)
  // const YLVault = await hre.ethers.getContractFactory("YLVault");
  // const ylVault = await YLVault.deploy(
  //   ylNFT.address,
  //   ylNFT1155.address,
  //   tokenAddress,
  //   ylProxy.address
  // );
  // ylVault.deployed();
  // console.log("YLVault contract deployed to:", ylVault.address);

  // // DEPLOY - Auction contract
  // const Auction = await ethers.getContractFactory("Auction");
  // const auction = await Auction.deploy(
  //   ylNFT.address,
  //   ylNFT1155.address,
  //   ylNFTMarketplace1.address,
  //   ylNFTMarketplace2.address,
  //   tokenAddress,
  //   ylProxy.address
  // );
  // await auction.deployed();
  // console.log("Auction contract deployed to:", auction.address);

  // DEPLOY - ContestGame Contract
  const ContestGame = await hre.ethers.getContractFactory("ContestGame");
  const contestGame = await ContestGame.deploy(
    nft721Address,
    nft1155Address,
    tokenAddress,
    proxyAddress,
    vaultAddres
  );
  await contestGame.deployed();
  console.log("ContestGame contract deployed to:", contestGame.address);

  // SET contracts addresses to YLProxy contract.
  // await ylProxy.setERC1155Market(yl1155Marketplace.address);
  // await ylProxy.setYLTAddress(tokenAddress);
  // await ylProxy.setMarketNFTAddress1(ylNFTMarketplace1.address);
  // await ylProxy.setMarketNFTAddress2(ylNFTMarketplace2.address);
  // await ylProxy.setYLVault(ylVault.address);
  // await ylProxy.setAuctionAddress(auction.address);
  // await ylProxy.setNFTAddress(ylNFT.address);

  console.log("10 contracts deployed!!");

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


