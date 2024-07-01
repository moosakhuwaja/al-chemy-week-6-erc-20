const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { ethers } = require("hardhat");
// const recipients = [
//   "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
//   "0x380E202Bc237CC94A48aDbB37c5aac0F0a3e74C6"
//   // add more addresses
// ];
// const amount = ethers.parseUnits("200", 18);

module.exports = buildModule("TokenModule", (m) => {
  const Moo007 = m.contract("Moo007", [], {});

  return { Moo007 };
});
