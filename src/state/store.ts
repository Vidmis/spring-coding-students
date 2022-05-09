import { combineReducers, createStore } from "redux";
import userReducer from "./reducers";

export const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
