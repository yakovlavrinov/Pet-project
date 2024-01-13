import { configureStore } from "@reduxjs/toolkit";
import toggleAuthReducer from "../features/toggleAuth/toggleAuthSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleAuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
