import { Foodies } from "state/types";
import { SET_USER_DATA } from "./constants";

export const setUserData = (userData: Foodies) => {
  type: SET_USER_DATA;
  payload: userData;
};
