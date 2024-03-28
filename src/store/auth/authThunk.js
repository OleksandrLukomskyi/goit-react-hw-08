// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { setAuthHeader } from "../../api/api";
// import {
//   logInApi,
//   logOut,
//   refreshProfile,
//   registerApi,
// } from "../../api/auth-service";

// export const logInThunk = createAsyncThunk(
//   "auth/login",
//   async (body, { rejectWithValue }) => {
//     try {
//       return await logInApi(body);
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const logOutThunk = createAsyncThunk(
//   "auth/logout",
//   async (_, { rejectWithValue }) => {
//     try {
//       return await logOut();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const refreshProfileThunk = createAsyncThunk(
//   "users/current",
//   async (_, thunkApi) => {
//     const state = thunkApi.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkApi.rejectWithValue("Unable to fetch user");
//     }

//     try {
//       setAuthHeader(persistedToken);
//       console.log("Token before fetching profile:", persistedToken);
//       return await refreshProfile();
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const registerThunk = createAsyncThunk(
//   "auth/register",
//   async (body, { rejectWithValue }) => {
//     try {
//       return await registerApi(body);
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
