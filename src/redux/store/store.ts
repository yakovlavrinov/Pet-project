import { configureStore } from "@reduxjs/toolkit";
import toggleAuthReducer from "../features/toggleAuthSlice";
import authSlice from "../features/authSlice";
import { rememberReducer, rememberEnhancer } from "redux-remember";

const rememberedKeys = ["auth"];

export const store = configureStore({
  reducer: rememberReducer({
    toggle: toggleAuthReducer,
    auth: authSlice,
  }),
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(
      rememberEnhancer(window.localStorage, rememberedKeys)
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
