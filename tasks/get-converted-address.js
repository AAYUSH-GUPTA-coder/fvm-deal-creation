const fa = require("@glif/filecoin-address");

task("get-converted-address", "Gets Filecoin f4 address and corresponding Ethereum address.")
    .addParam("contract", "The address of the deal client solidity")
    .setAction(async (taskArgs) => {

    const contractAddr = taskArgs.contract


    //Convert Ethereum address to f4 address
    const f4Address = fa.newDelegatedEthAddress(contractAddr).toString();
    console.log("Ethereum address (this addresss should work for most tools):", contractAddr);
    console.log("f4address (also known as t4 address on testnets):", f4Address);
})