import { createAction, createReducer } from '@reduxjs/toolkit'
import riskLevelsData from "../../constants/riskLevelsData.json"

const setRiskLevelAction = createAction('setRiskLevelAction')
const setAmountsAction = createAction('setAmountsAction')

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

const financialAdvisorReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setRiskLevelAction, (state, action) => {
            
        const riskLevel = action.payload;

        const riskLevelData = {
            bonds:      riskLevelsData[riskLevel-1]?.bonds,
            largeCap:   riskLevelsData[riskLevel-1]?.largeCap,
            midCap:     riskLevelsData[riskLevel-1]?.midCap,
            foreign:    riskLevelsData[riskLevel-1]?.foreign,
            smallCap:   riskLevelsData[riskLevel-1]?.smallCap,
        }
        
        state.riskLevel = riskLevel;
        state.riskLevelData = riskLevelData;

    })
    .addCase(setAmountsAction, (state, action) => {
        state.amounts = action.payload;
    })
})

export { setRiskLevelAction, setAmountsAction };

export default financialAdvisorReducer;