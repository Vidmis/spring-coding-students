import { IBikesState } from "../types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IBikesState = {
  bikesData: [],
};

const bikesDataSlice = createSlice({
  name: "matchedBikes",
  initialState,
  reducers: {
    setBikes: (state, actions) => {
      state.bikesData = actions.payload;
    },
  },
});

export const { setBikes } = bikesDataSlice.actions;
export default bikesDataSlice;
