import { configureStore } from '@reduxjs/toolkit'

import financialAdvisorReducer from './reducers/financialAdvisor';

const reducers = {
    financialAdvisor: financialAdvisorReducer
};

const store = configureStore({ reducer: reducers })

export default store;