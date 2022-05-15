import { QuestionState } from "./../types";
import { createSlice } from "@reduxjs/toolkit";
// import { QuizQuestions } from "./types";

const initialState: QuestionState = {
  questionText: "yupi",
  answerOptions: [],
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuizQuestions: (state, actions) => {
      state.questionText = actions.payload;
    },
    setQuizAnswers: (state, actions) => {
      state.answerOptions = actions.payload;
    },
  },
});

export const { setQuizQuestions, setQuizAnswers } = questionSlice.actions;
export default questionSlice;
