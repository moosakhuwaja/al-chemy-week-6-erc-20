const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Moo007 = await ethers.getContractAt(
    "Moo007",
    "0xa89b0d326e7b828a7f52d03452fec6480171a25d"
  );

  const recipients = [
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0x380E202Bc237CC94A48aDbB37c5aac0F0a3e74C6"
  ];
  const amounts = [ethers.parseUnits("100", 18), ethers.parseUnits("200", 18)];

  if (recipients.length !== amounts.length) {
    throw new Error("Recipients and amounts arrays must have the same length");
  }

  for (let i = 0; i < recipients.length; i++) {
    const tx = await Moo007.transfer(recipients[i], amounts[i]);
    await tx.wait();
    console.log(
      `Airdropped ${amounts[i].toString()} tokens to ${recipients[i]}`
    );
  }

  console.log("Airdrop complete");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
