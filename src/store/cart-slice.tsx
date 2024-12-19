import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../types";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as Products[], // Store product objects in the cart
    totalQuantity: 0,
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload); // Add item to the cart
      state.totalQuantity++;
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
