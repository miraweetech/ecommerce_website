import { createSlice } from '@reduxjs/toolkit';

const cartPageSlice = createSlice({
  name: 'cartPage',
  initialState: {
    isVisible: false,
    selectedItem: null,
  },
  reducers: {
    showCartPage: (state, action) => {
      state.isVisible = true;
      state.selectedItem = action.payload;
    },
    hideCartPage: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showCartPage, hideCartPage } = cartPageSlice.actions;
export default cartPageSlice.reducer;
