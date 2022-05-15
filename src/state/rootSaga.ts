import { all } from "redux-saga/effects";
import { questionSagas } from "./sagas";

export default function* rootSaga(): Generator {
  yield all([questionSagas()]);
}
