import { createSlice } from "@reduxjs/toolkit";

import { addContact, deleteContact, fetchContacts } from "./operations";
import { logOut } from "../auth/operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const handleFulfilled = (state) => {
  state.isLoading = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  if (action.payload && action.payload.message) {
    state.error = action.payload.message;
  } else {
    state.error = "An error occurred";
  }
};

const sliceContacts = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload);
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      })
      .addMatcher((actions) => actions.type.endsWith("/pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("/rejected"), handleRejected)
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        handleFulfilled
      );
  },
});

export const contactReducer = sliceContacts.reducer;
