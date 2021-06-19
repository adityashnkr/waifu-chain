var Election = artifacts.require("./Election.sol")

contract("Election", function(accounts){
    it("Initializes with two waifus",function(){
        return Election.deployed().then(function(instance){
            return instance.waifuCount();
        }).then(function(count){
            assert.equal(count,2);
        });
        });
        it("it initalizes the candidate with the correct values", function(){
            return Election.deployed().then(function(instance){
                electionInstance = instance;
                return electionInstance.waifus(1);
            }).then(function(waifu){ //async thus will use promise
                assert.equal(waifu[0], 1,"contains correct id");
                assert.equal(waifu[1], "Waifu 1","contains correct name");
                assert.equal(waifu[2], 0,"contains correct vote count");
                return electionInstance.waifus(2);
            }).then(function(waifu){
                assert.equal(waifu[0], 2,"contains correct id");
                assert.equal(waifu[1], "Waifu 2","contains correct name");
                assert.equal(waifu[2], 0,"contains correct vote count");

        });  
    });


});
