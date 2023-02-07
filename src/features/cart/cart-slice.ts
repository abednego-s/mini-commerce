import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  image: string;
  total: number;
}

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        state[index].total += action.payload.total;
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
