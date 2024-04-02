import { createSelector } from "@reduxjs/toolkit";
import { selectorContacts } from "../contacts/selectors";

import { selectorFilter } from "./selectors";

export const selectVisibleContacts = createSelector(
  [selectorContacts, selectorFilter],
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
