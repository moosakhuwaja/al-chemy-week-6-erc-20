//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Moo007 is ERC20 {
    uint constant _initial_supply = 69000 * (10 ** 18);

    constructor() ERC20("Moo007", "M7") {
        _mint(msg.sender, _initial_supply);
    }
}
