import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import localforage from "localforage";
import rootReducer from "./reducers";

const store = createStore(
    rootReducer,
    undefined,
    undefined
);

persistStore(store);

export default store;