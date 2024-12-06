import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer from "./auth/authSlice.ts";
import meetingsReducer from "./meetings/meetingsSlice.ts";
import adminReducer from "./admin/adminSlice.ts";

const rootReducer = combineReducers({
    auth: authReducer,
    meetings: meetingsReducer,
    admin: adminReducer
})
export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
