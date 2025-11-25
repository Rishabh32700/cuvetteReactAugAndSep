import { configureStore } from "@reduxjs/toolkit";
import enrollmentReducer from "./slice/enrollmentSlice"

export const store = configureStore({
    reducer: {
        enrollment : enrollmentReducer
    }
})