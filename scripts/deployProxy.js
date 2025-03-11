const { ethers, upgrades } = require("hardhat");

async function main() {
  const VendingMachineV1 = await ethers.getContractFactory("VendingMachineV1");
  const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
  await proxy.waitForDeployment();
  const proxyAddress = await proxy.getAddress();

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("Proxy contract address: " + proxyAddress);
  // 0x46ada02478a9E851d2250E7b8306099D51ca9b11

  console.log("Implementation contract address: " + implementationAddress);
  // 0x8857C4DC1406e8e07eC232a8801087A907c9792f
}

main();
