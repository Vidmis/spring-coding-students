import axios, { AxiosError, AxiosResponse } from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { setBikes } from "./features/bikesDataSlice";
import { setQuizData } from "./features/questionsSlice";
import { fetchBikesActions, fetchQuestionsActions } from "./sagasActions";

const questionsUrl =
  "https://627f7da2be1ccb0a466083cc.mockapi.io/api/questions";
const bikesDataUrl =
  "https://627f7da2be1ccb0a466083cc.mockapi.io/api/bikeImages";

export function* fetchQuestionsSaga() {
  try {
    const { data }: AxiosResponse = yield axios.get(questionsUrl);
    yield put(setQuizData(data));
  } catch (err) {
    const errResp = (err as AxiosError).response;
    yield console.log(errResp);
  }
}

export function* fetchBikesDataSaga() {
  try {
    const { data }: AxiosResponse = yield axios.get(bikesDataUrl);
    yield put(setBikes(data));
  } catch (err) {
    const errResp = (err as AxiosError).response;
    yield console.log(errResp);
  }
}

export function* questionSagas() {
  yield takeEvery(fetchQuestionsActions, fetchQuestionsSaga);
}

export function* bikesSagas() {
  yield takeEvery(fetchBikesActions, fetchBikesDataSaga);
}
