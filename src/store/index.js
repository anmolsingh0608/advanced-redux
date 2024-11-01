import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cartSlice";

const store = configureStore({
  reducer: cartSlice.reducer,
});

export default store;
