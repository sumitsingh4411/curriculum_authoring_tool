import { createSlice } from "@reduxjs/toolkit";
import { getRandromNumber } from "../../utils/helper";
import { RootState } from "../reducers";

const customInputSlice = createSlice({
  name: "customInput",
  initialState: {
    allStandard: [
      {
        textColor: "#0cdde0",
        text: "",
        id: getRandromNumber(),
        indent: 0,
        children: 0,
      },
    ],
  },
  reducers: {
    setAllStandard: (state, action) => {
      state.allStandard = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const customInputActions = {
  ...customInputSlice.actions,
};

export const selectCustomInput = (state: RootState) => state.customInput;

export default customInputSlice.reducer;
