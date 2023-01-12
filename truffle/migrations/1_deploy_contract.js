const FirstContract = artifacts.require("FirstContract");

module.exports = (deployer) => {
    deployer.deploy(FirstContract)
}