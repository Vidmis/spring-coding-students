import { IQuestionState } from "../types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IQuestionState = {
  questionsData: [],
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuizData: (state, actions) => {
      state.questionsData = actions.payload;
    },
  },
});

export const { setQuizData } = questionSlice.actions;
export default questionSlice;
