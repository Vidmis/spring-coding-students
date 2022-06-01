import { all } from "redux-saga/effects";
import { bikesSagas, questionSagas } from "./sagas";

export default function* rootSaga(): Generator {
  yield all([questionSagas(), bikesSagas()]);
}
