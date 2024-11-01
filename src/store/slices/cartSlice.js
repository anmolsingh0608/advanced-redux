import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const index = state.items.findIndex((value) => {
        return value.id === action.payload.id;
      });

      const existing = state.items[index];

      if (existing) {
        existing.title = action.payload.title;
        const unitPrice = existing.price / existing.quantity;
        existing.quantity += action.payload.quantity;
        existing.price = existing.quantity * unitPrice;
      } else {
        const item = { ...action.payload };
        state.items.push(item);
      }
    },
    removeItem(state, action) {
      const index = state.items.findIndex((value) => {
        return value.id === action.payload.id;
      });

      const existing = state.items[index];

      if (existing.quantity > 1) {
        const unitPrice = existing.price / existing.quantity;
        existing.quantity -= 1;
        existing.price = existing.quantity * unitPrice;
      } else {
        state.items.splice(index, 1);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
