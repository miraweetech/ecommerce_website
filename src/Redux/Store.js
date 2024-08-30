import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./Reducers/homeSlice";
import AuthSlice from "./Reducers/AuthSlice";
import CartSlice from "./Reducers/CartSlice";
import CheckoutSlice from "./Reducers/CheckoutSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    auth: AuthSlice,
    cart: CartSlice,
    checkout: CheckoutSlice,
  },
});
