import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./user/userSlice.ts";

export const store = configureStore({
    reducer: {
        user: userSlice
    },
})

