import { configureStore } from "@reduxjs/toolkit"
import headerSlice from "./Reducers/headerSlice"
import homeSlice from "./Reducers/homeSlice"
import AuthSlice from "./Reducers/AuthSlice"

export const store = configureStore({
    reducer: {
        header: headerSlice,
        home: homeSlice,
        auth: AuthSlice
    }
})