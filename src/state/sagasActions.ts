import { createAction } from "@reduxjs/toolkit";

const fetchQuestionsPrefix = "questions/GET_QUESTIONS";

export const fetchQuestionsActions = createAction(fetchQuestionsPrefix);
