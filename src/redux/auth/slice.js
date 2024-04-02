import { createSlice } from "@reduxjs/toolkit";

import { logIn, logOut, refreshUser, register } from "./operations";

const initialState = {
  profile: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleSingUp = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
  state.isLoggedIn = true;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, handleSingUp)
      .addCase(logIn.fulfilled, handleSingUp)
      .addCase(logOut.fulfilled, (state) => {
        state.profile = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.profile = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(register.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
