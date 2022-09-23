import { combineReducers } from "@reduxjs/toolkit";
import customInputReducer from "./slices/customInputSlice";

export const rootReducer = combineReducers({
  customInput: customInputReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
