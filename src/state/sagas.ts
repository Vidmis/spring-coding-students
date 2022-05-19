import axios, { AxiosError, AxiosResponse } from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { setQuizData } from "./features/questionsSlice";
import { fetchQuestionsActions } from "./sagasActions";

const url = "https://627f7da2be1ccb0a466083cc.mockapi.io/api/questions";

export function* fetchQuestionsSaga() {
  try {
    const { data }: AxiosResponse = yield axios.get(url);
    yield put(setQuizData(data));
  } catch (err) {
    const errResp = (err as AxiosError).response;
    yield console.log(errResp);
  }
}

export function* questionSagas() {
  yield takeEvery(fetchQuestionsActions, fetchQuestionsSaga);
}
