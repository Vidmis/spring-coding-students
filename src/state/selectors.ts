import { AppState, IQuestionsData } from "./types";

export const selectQuizQA = (state: AppState) =>
  state.question.questionsData as IQuestionsData[];
export const selectUserHeight = (state: AppState) => state.answer.userHeight;
export const selectUserBikeTypes = (state: AppState) => state.answer.bikeTypes;
export const selectStep = (state: AppState) => state.step.value;
