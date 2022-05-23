import { createSlice } from "@reduxjs/toolkit";
import { IBikesCartState } from "../types";

const initialState: IBikesCartState = {
  bikesCartData: [],
};

const userBikesCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAddToCart(state, action) {
      // "Mutate" the existing state, no return value needed
      state.bikesCartData.push(action.payload);
    },
    setDeleteFromCart(state, action) {
      // Construct a new result array immutably and return it
      state.bikesCartData = state.bikesCartData.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { setAddToCart, setDeleteFromCart } = userBikesCartSlice.actions;
export default userBikesCartSlice;
