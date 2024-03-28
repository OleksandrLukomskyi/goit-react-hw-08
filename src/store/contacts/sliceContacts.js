import { createSlice } from '@reduxjs/toolkit';
// import {
//   addContactPostThunk,
//   deleteContactThunk,
//   fetchContactsThunk,
// } from './thunksContacts';
import { addContact, deleteContact, fetchContacts } from './operations';

const sliceContacts = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload);
      });
  },
});

export const contactReducer = sliceContacts.reducer;
