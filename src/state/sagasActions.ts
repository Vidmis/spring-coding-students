import { createAction } from "@reduxjs/toolkit";

const fetchQuestionsPrefix = "question/GET_QUESTIONS";

export const fetchQuestionsActions = createAction(fetchQuestionsPrefix);
