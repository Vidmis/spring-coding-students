import { combineReducers, CombinedState, AnyAction } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import questionReducer from "./features/questionsSlice";
import stepReducer from "./features/stepSlice";
import { IQuestionState } from "./types";
import rootSaga from "./rootSaga";

export interface RootState {
  question: IQuestionState;
  step: number;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  question: questionReducer.reducer,
  step: stepReducer,
});

export const rootReducer = (state: any, action: AnyAction) =>
  combinedReducer(state, action);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
