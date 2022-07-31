import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import themeReducer from "./themeSlice";

//creating reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

//create store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
