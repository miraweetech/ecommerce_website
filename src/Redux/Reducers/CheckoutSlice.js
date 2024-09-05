import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  company: "",
  address: "",
  apartment: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
  cardNumber: "",
  cardName: "",
  showCheckout: false,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    showCheckout(state) {
      state.showCheckout = true;
    },
    hideCheckout(state) {
      state.showCheckout = false;
    },
  },
});

export const { setField, showCheckout, hideCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
