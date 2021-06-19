pragma solidity >=0.4.16 <0.9.0;

contract Election {
    // struct Waifu {
    //     uint256 id;
    //     string name;
    //     uint256 voteCount;
    // }
    // mapping(uint256 => Waifu) public waifus;
    // uint256 public waifuCount;
    string public waifu;

    constructor() public {
        waifu = "waifu 1";
    }
}
