import { QuestionState } from "./../types";
import { createSlice } from "@reduxjs/toolkit";
// import { QuizQuestions } from "./types";

const initialState: QuestionState = {
  questionText: "yupi",
  answerOptions: [],
};

const questionSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setQuizQuestions: (state, actions) => {
      state.questionText = actions.payload;
    },
  },
});

export const { setQuizQuestions } = questionSlice.actions;
export default questionSlice;
