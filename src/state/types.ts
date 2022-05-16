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
