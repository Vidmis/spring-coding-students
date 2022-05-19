import { combineReducers, CombinedState, AnyAction } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "@redux-saga/core";
import sessionStorage from "redux-persist/es/storage/session";
import { IQuestionState, IStepState, IUserAnswerSlice } from "./types";
import rootSaga from "./rootSaga";
import questionReducer from "./features/questionsSlice";
import stepReducer from "./features/stepSlice";
import userAnswerReducer from "./features/userAnswersSlice";

export interface RootState {
  question: IQuestionState;
  answer: IUserAnswerSlice;
  step: IStepState;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  question: questionReducer.reducer,
  answer: userAnswerReducer.reducer,
  step: stepReducer.reducer,
});

export const rootReducer = (state: any, action: AnyAction) =>
  combinedReducer(state, action);

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  blacklist: ["config", "question", "step"],
  whitelist: ["answer"],
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
