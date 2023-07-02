// SPDX-License-Identifier: AGPL-3.0
pragma solidity 0.8.17;

import { MarketAPI } from "@zondax/filecoin-solidity/contracts/v0.8/MarketAPI.sol";
import { MarketTypes } from "@zondax/filecoin-solidity/contracts/v0.8/types/MarketTypes.sol";

contract Check {
    function checkDealStatus(uint64 _dealID) public returns (MarketTypes.GetDealActivationReturn memory) {
        MarketTypes.GetDealActivationReturn memory ret = MarketAPI.getDealActivation(_dealID);
        return ret;
    }
}

