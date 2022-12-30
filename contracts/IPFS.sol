// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract IPFS {
    event FileAdded(address user, string cid);

    mapping(address => string) public hashes;

    function set(string memory cid) external {
        hashes[msg.sender] = cid;
    }

    function get() external view returns (string memory) {
        return hashes[msg.sender];
    }
}
