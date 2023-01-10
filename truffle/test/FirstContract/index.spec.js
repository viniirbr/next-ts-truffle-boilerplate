const FirstContract = artifacts.require("FirstContract");

contract("FirstContract", async (accounts) => {
    
    it("should get x value equals 0", async () => {
        const firstContract = await FirstContract.deployed();
        const x = await firstContract.x.call();
        assert.equal(x, 0, "x value is different from 0");
    });
    
    it("should set x to some value", async () => {
        const firstContract = await FirstContract.deployed();
        const value = 10;
        await firstContract.setX(value);
        const x = await firstContract.x.call();
        assert.equal(x, value, "x value is different from the value");     
    })
})