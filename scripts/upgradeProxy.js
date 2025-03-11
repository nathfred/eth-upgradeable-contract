const { ethers, upgrades } = require("hardhat");

const proxyAddress = "0x46ada02478a9E851d2250E7b8306099D51ca9b11";

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory("VendingMachineV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("The current contract owner is: " + upgraded.getOwner());
  //

  console.log("Implementation contract address: " + implementationAddress);
  // 0x8857C4DC1406e8e07eC232a8801087A907c9792f
}

main();
