import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";
import { toHex } from "viem";

const deployBallot: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const pastDeployments = await hre.deployments.all();
  let tokenAddress;

  if (!pastDeployments.MyToken) {
    throw new Error("MyToken not found");
  } else {
    tokenAddress = pastDeployments.MyToken.address;
  }

  const PROPOSALS = ["Proposal 1", "Proposal 2", "Proposal 3"];

  await deploy("TokenizedBallot", {
    from: deployer,
    args: [PROPOSALS.map(p => toHex(p, { size: 32 })), tokenAddress, 1561651651],
    log: true,
    autoMine: true,
  });

  const yourContract = await hre.ethers.getContract<Contract>("TokenizedBallot", deployer);

  console.log(`👋 Ballot uses tokenContract @ ${await yourContract.tokenContract()}`);
  // TODO: fix bignumber issue on the proposal
  // console.log("👋 Proposals:");
  // for (let index = 0; index < PROPOSALS.length; index++) {
  //   const proposal = await yourContract.proposals([
  //     `0x000000000000000000000000000000000000000000000000000000000000000${index}`
  //   ]);
  //   const name = hexToString(proposal[0], { size: 32 });
  //   console.log({ index, name, proposal });
  // }
};

export default deployBallot;

deployBallot.dependencies = ["MyToken"];
deployBallot.tags = ["TokenizedBallot"];
