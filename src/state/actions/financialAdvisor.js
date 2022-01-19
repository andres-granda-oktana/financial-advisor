import * as financialAdvisorTypes from "../types/financialAdvisor"

export const setRiskLevelAction = (riskLevel) => {
    return {
        type: financialAdvisorTypes.SET_RISK_LEVEL,
        payload: riskLevel
    };
}

export const setAmountsAction = (amounts) => {
    return {
        type: financialAdvisorTypes.SET_AMOUNTS,
        payload: amounts
    };
}