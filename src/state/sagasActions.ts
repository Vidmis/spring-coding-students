import { createAction } from "@reduxjs/toolkit";
import { IBikesCartSlice } from "./types";

const fetchQuestionsPrefix = "questions/GET_QUESTIONS";
const fetchBikesPrefix = "bikes/GET_BIKES";
const postBuyRequestPrefix = "bikes/POST_BIKES_REQUEST";

export const fetchQuestionsActions = createAction(fetchQuestionsPrefix);
export const fetchBikesActions = createAction(fetchBikesPrefix);
export const postBuyRequestActions =
  createAction<IBikesCartSlice[]>(postBuyRequestPrefix);
