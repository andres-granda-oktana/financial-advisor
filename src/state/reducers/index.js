import { combineReducers } from "redux";
import financialAdvisorReducer from "./financialAdvisor";

const reducers = {
    financialAdvisor: financialAdvisorReducer
};

const createReducers = () => {
    return combineReducers({...reducers});
};

const rootReducer = (state, action) => {
    const internalReducers = createReducers();
    return internalReducers(state, action);
};

export default rootReducer;