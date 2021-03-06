import { AppState, IQuestionsData } from "./types";

export const selectQuizQA = (state: AppState) =>
  state.question.questionsData as IQuestionsData[];
export const selectUserBikeTypes = (state: AppState) => state.answer.bikeTypes;
export const selectStep = (state: AppState) => state.step.value;
export const selectBikes = (state: AppState) => state.bikes.bikesData;
export const selectBikesCart = (state: AppState) =>
  state.bikesCart.bikesCartData;
