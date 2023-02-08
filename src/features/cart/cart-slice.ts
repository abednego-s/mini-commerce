import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./cart-types";

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        state[index].total += action.payload.total;
      } else {
        state.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
