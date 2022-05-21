import { createAction } from "@reduxjs/toolkit";

const fetchQuestionsPrefix = "questions/GET_QUESTIONS";
const fetchBikesPrefix = "bikes/GET_BIKES";

export const fetchQuestionsActions = createAction(fetchQuestionsPrefix);
export const fetchBikesActions = createAction(fetchBikesPrefix);
