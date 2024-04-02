import { createSlice } from "@reduxjs/toolkit";

import { addContact, deleteContact, fetchContacts } from "./operations";
import { logOut } from "../auth/operations";

const sliceContacts = createSlice({
  name: "contacts",
  initialState: {
    items: [],
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
      });
  },
});

export const contactReducer = sliceContacts.reducer;
