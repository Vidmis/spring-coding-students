import { rootReducer } from "./store";

export interface IAnswerOptions {
  answerText: string;
  sizes?: string[];
  bikeTypes: string[];
}
export interface IQuestionsData {
  questionText: string;
  answerOptions: IAnswerOptions[];
}

export interface IQuestionState {
  questionsData: IQuestionsData[];
}

export interface IStepState {
  value: number;
}

export interface IUserAnswerSlice {
  userHeight: number;
  bikeTypes: string[];
}

export interface IBikesDataSlice {
  id: string;
  url: string;
  bikeType: string;
  model: string;
  price: number;
}
export interface IBikesState {
  bikesData: IBikesDataSlice[];
}

export interface IBikesCartSlice {
  id: string;
  bikeType: string;
  model: string;
  price: string;
  size: string;
}
export interface IBikesCartState {
  bikesCartData: IBikesCartSlice[];
}

export type AppState = ReturnType<typeof rootReducer>;
