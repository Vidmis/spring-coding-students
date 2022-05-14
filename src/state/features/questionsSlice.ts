import { QuestionState } from "./../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizQuestions } from "./types";

const initialState: QuestionState = {
  quiz_answers: {
    question_key: false,
    question_key2: "",
    question_key3: null as unknown as number,
  },
  status: "idle",
};

const questionSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setQuizQuestions: (
      state,
      actions: PayloadAction<Partial<QuestionState>>
    ) => {
      state.quiz_answers = {
        ...state.quiz_answers,
        ...actions.payload,
      };
    },
  },
});

export const { setQuizQuestions } = questionSlice.actions;
export default questionSlice;
