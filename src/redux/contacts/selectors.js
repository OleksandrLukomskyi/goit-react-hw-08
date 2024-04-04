import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectorContacts = (state) => state.contacts.items;
export const selectorIsLoading = (state) => state.contacts.isLoading;
export const selectorError = (state) => state.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectorContacts, selectNameFilter],
  (items, filter) => {
    const filteredItems =
      items && Array.isArray(items)
        ? items.filter((item) =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
        : [];
    return filteredItems;
  }
);
