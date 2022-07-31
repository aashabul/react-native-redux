import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

//creating reducers
const rootReducer = combineReducers({
  counter: counterReducer,
});

//create store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
