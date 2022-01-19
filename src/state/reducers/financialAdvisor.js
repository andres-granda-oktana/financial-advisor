import * as financialAdvisorTypes from "../types/financialAdvisor"
import riskLevelsData from "../../constants/riskLevelsData.json"

const initialState = {
    riskLevel: 0,
    riskLevelData: {
        bonds: "",
        largeCap: "",
        midCap: "",
        foreign: "",
        smallCap: "",
    },
    amounts: {
        bonds: "",
        largeCap: "",
        midCap: "",
        foreign: "",
        smallCap: ""
    },
}

export default function financialAdvisorReducer (state = initialState, action) {

    switch (action.type) {

        case financialAdvisorTypes.SET_RISK_LEVEL:

            const riskLevel = action.payload;

            const riskLevelData = {
                bonds:      riskLevelsData[riskLevel-1]?.bonds,
                largeCap:   riskLevelsData[riskLevel-1]?.largeCap,
                midCap:     riskLevelsData[riskLevel-1]?.midCap,
                foreign:    riskLevelsData[riskLevel-1]?.foreign,
                smallCap:   riskLevelsData[riskLevel-1]?.smallCap,
            }
                
            return {
                ... state, 
                riskLevel: riskLevel,
                riskLevelData: riskLevelData,
            };

        case financialAdvisorTypes.SET_AMOUNTS:
            return {... state, amounts: action.payload};

        default:
            return state;
    }
}


