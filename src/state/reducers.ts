import { SET_USER_DATA } from "./constants";
import { AnyAction } from "redux";
import { Foods } from "./types";

const initialState = {
  user_data: {
    id: null as unknown as number,
    name: "",
    food: null as unknown as Foods,
  },
};

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_USER_DATA:
      return (state.user_data = action.payload);
    default:
      return (state.user_data = {
        id: 123,
        name: "mario",
        food: Foods.SALDUMYNAI,
      });
  }
};

export default userReducer;
