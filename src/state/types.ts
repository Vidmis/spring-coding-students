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

export type AppState = ReturnType<typeof rootReducer>;
