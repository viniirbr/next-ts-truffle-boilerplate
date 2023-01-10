// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.17;

contract FirstContract {
    uint256 public x;

    constructor() {
        x = 0;
    }

    function setX(uint256 value) public {
        x = value;
    }
}