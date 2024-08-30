import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("MyToken", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  const yourContract = await hre.ethers.getContract<Contract>("MyToken", deployer);
  console.log(`👋 Token Name: "${await yourContract.name()}" Symbol: "${await yourContract.symbol()}"`);
};

export default deployToken;

deployToken.tags = ["HelloWorld"];
