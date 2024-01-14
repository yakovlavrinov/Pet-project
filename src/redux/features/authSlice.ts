import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface User {
  name: string;
  email: string;
  password?: string;
}

export const authUser = createAsyncThunk(
  "post/authUser",
  async (payload: { user: User; params: string }, { rejectWithValue }) => {
    try {
      const { user, params } = payload;
      const res = await axios.post(`http://localhost:4444/${params}`, user);

      if (res.status !== 200) {
        throw new Error("Ошибка в запросе");
      }
      console.log(res.data);
      return res.data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
      return rejectWithValue("Произошла неизвестная ошибка");
    }
  }
);

export interface AuthState {
  user: User | null;
  status: "Idle" | "loading" | "error" | "connect";
  error: null | string;
  token: null | string;
}

export interface AuthPayload {
  accessToken: string;
  user: User;
}

const initialState: AuthState = {
  user: null,
  status: "Idle",
  error: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authUser.pending, (state) => {
      state.status = "loading";
      state.error = null;
      state.token = null;
    });
    builder.addCase(authUser.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload as string;
    });
    builder.addCase(
      authUser.fulfilled,
      (state, action: PayloadAction<AuthPayload>) => {
        state.status = "connect";
        state.token = action.payload.accessToken;
        state.user = action.payload.user;
      }
    );
  },
});

export default authSlice.reducer;
