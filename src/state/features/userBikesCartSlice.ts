import { IBikesCartState } from "../types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IBikesCartState = {
  bikesCartData: [],
};

const userBikesCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAddToCart(state, action) {
      state.bikesCartData.push(action.payload);
    },
    setDeleteFromCart(state, action) {
      state.bikesCartData = state.bikesCartData.filter(
        (item) => item.id !== action.payload
      );
    },
    setResetCart(state) {
      state.bikesCartData = initialState.bikesCartData;
    },
  },
});

export const { setAddToCart, setDeleteFromCart, setResetCart } =
  userBikesCartSlice.actions;
export default userBikesCartSlice;
