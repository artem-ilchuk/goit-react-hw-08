import { createSelector } from "@reduxjs/toolkit";
import { selectContacts, selectNameFilter } from "../contacts/selectors";

export const selectFilteredContactsMemo = createSelector(
  [selectContacts, selectNameFilter],
  (selectContacts, selectNameFilter) => {
    return selectContacts.filter((contact) =>
      contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
    );
  }
);
