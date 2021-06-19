pragma solidity >=0.4.16 <0.9.0;

contract Election {
    struct Waifu {
        uint256 id;
        string name;
        uint256 voteCount;
    }
    mapping(uint256 => Waifu) public waifus;
    uint256 public waifuCount;
    string public waifu;

    constructor() public {
        addWaifu("Waifu 1");
        addWaifu("Waifu 2");
    }

    function addWaifu(string memory _name) private {
        waifuCount++;
        waifus[waifuCount] = Waifu(waifuCount, _name, 0);
    }
}
