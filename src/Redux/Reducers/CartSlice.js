// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//     totalAmount: 0,
//     showCart: false,
//   },
//   reducers: {
//     addItem: (state, action) => {
//       state.items.push(action.payload);
//       state.totalAmount += action.payload.price;
//     },
//     removeItem: (state, action) => {
//       const id = action.payload;
//       const itemIndex = state.items.findIndex((item) => item.id === id);
//       if (itemIndex !== -1) {
//         state.totalAmount -= state.items[itemIndex].price;
//         state.items.splice(itemIndex, 1);
//       }
//     },
//     showCart: (state) => {
//       state.showCart = true;
//     },
//     hideCart: (state) => {
//       state.showCart = false;
//     },
//   },
// });

// export const { addItem, removeItem, showCart, hideCart } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    showCart: false,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        // Item already exists in the cart, increase quantity
        state.items[existingItemIndex].quantity += 1;
        state.totalAmount += state.items[existingItemIndex].price;
      } else {
        // Item doesn't exist in the cart, add as new item with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalAmount += action.payload.price;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);

      if (existingItemIndex >= 0) {
        if (state.items[existingItemIndex].quantity > 1) {
          // Decrease quantity
          state.items[existingItemIndex].quantity -= 1;
          state.totalAmount -= state.items[existingItemIndex].price;
        } else {
          // Remove item from cart
          state.totalAmount -= state.items[existingItemIndex].price;
          state.items.splice(existingItemIndex, 1);
        }
      }
    },
    showCart: (state) => {
      state.showCart = true;
    },
    hideCart: (state) => {
      state.showCart = false;
    },
  },
});

export const { addItem, removeItem, showCart, hideCart } = cartSlice.actions;
export default cartSlice.reducer;
