import { IUserAnswerSlice } from "../types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IUserAnswerSlice = {
  userHeight: 0,
  bikeTypes: [],
};

const userAnswerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    setUserHeight: (state, actions) => {
      state.userHeight = actions.payload;
    },
    setBikeTypes: (state, actions) => {
      state.bikeTypes = actions.payload;
    },
  },
});

export const { setUserHeight, setBikeTypes } = userAnswerSlice.actions;
export default userAnswerSlice;
