import { configureStore } from "@reduxjs/toolkit";
import toggleAuthReducer from "../features/toggleAuthSlice";
import authSlice from "../features/authSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleAuthReducer,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
