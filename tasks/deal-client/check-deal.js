// const CID = require("cids")

task("check-deal", "check deal activation from deal ID")
    .addParam("contract", "The address of the check contract solidity")
    .addParam("dealId", "The deal ID of the deal you want the status of")
    .setAction(async (taskArgs) => {
        const contractAddr = taskArgs.contract
        const dealId = taskArgs.dealId
        // const cidHexRaw = new CID(cid).toString("base16").substring(1)
        // const cidHex = "0x" + cidHexRaw
        const networkId = network.name
        console.log("Getting deal status on network", networkId)

        //create a new wallet instance
        const wallet = new ethers.Wallet(network.config.accounts[0], ethers.provider)

        //create a Check contract factory
        const Check = await ethers.getContractFactory("Check", wallet)
        //create a Check contract instance
        //this is what you will call to interact with the deployed contract
        const check = await Check.attach(contractAddr)

        //send a transaction to call checkDealStatus() method
        //transaction = await check.getDealProposal(proposalID)
        let result = await check.checkDealStatus(dealId, {
            gasLimit: 1000000, //797263
        })
        console.log("The status of deal is:", result)
        console.log("The status of deal is:", result.terminated)
        console.log("The status of deal is:", result.activated)
    })
