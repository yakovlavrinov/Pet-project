import { createSlice } from "@reduxjs/toolkit";

export interface ToggleAuthState {
  value: boolean;
}

const initialState: ToggleAuthState = {
  value: false,
};

export const toggleAuthSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleForm: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleForm } = toggleAuthSlice.actions;

export default toggleAuthSlice.reducer;
