import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: 'header',
    initialState: {
        user: null,
        cart: [],
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }, 
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
    },
})

export const {setUser, addToCart} = headerSlice.actions

export default headerSlice.reducer