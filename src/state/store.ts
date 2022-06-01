import { AnyAction, CombinedState, combineReducers } from "redux";
import {
  IBikesCartState,
  IBikesState,
  IQuestionState,
  IStepState,
  IUserAnswerSlice,
} from "./types";
import { persistReducer, persistStore } from "redux-persist";

import bikesCartReducer from "./features/userBikesCartSlice";
import bikesReducer from "./features/bikesDataSlice";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import questionReducer from "./features/questionsSlice";
import rootSaga from "./rootSaga";
import sessionStorage from "redux-persist/es/storage/session";
import stepReducer from "./features/stepSlice";
import userAnswerReducer from "./features/userAnswersSlice";

export interface RootState {
  question: IQuestionState;
  answer: IUserAnswerSlice;
  step: IStepState;
  bikes: IBikesState;
  bikesCart: IBikesCartState;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  question: questionReducer.reducer,
  answer: userAnswerReducer.reducer,
  step: stepReducer.reducer,
  bikes: bikesReducer.reducer,
  bikesCart: bikesCartReducer.reducer,
});

export const rootReducer = (state: any, action: AnyAction) =>
  combinedReducer(state, action);

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  blacklist: ["config", "question", "bikesCart", "step"],
  whitelist: ["answer", "bikes"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
