import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "../contacts/operations";
import { logoutThunk } from "../auth/operations";

const initialState = {
  items: [],
  isLoading: false,
  isError: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.items = state.items.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
        state.isLoading = false;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.items = [];
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          editContact.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          editContact.rejected
        ),
        (state, action) => {
          state.isError = action.payload;
          state.isLoading - false;
        }
      );
  },
});

export default contactsSlice.reducer;
