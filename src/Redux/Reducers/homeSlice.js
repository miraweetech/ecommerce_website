import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offers: [
    { id: 1, title: "Tasty Thursdays", discount: "20%", image: "o1" },
    { id: 2, title: "Pizza Days", discount: "15%", image: "o2" },
  ],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    // Add any reducers if you need to handle actions
  },
});

export default homeSlice.reducer;
