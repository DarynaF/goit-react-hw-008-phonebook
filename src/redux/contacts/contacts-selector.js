import { createSelector } from '@reduxjs/toolkit'; 

export const getContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = store => store.filter;

export const getFilteredContacts = createSelector(
  [getContacts, selectFilter],
  (contacts, filter) => {  
    if (!filter) {
      return contacts;
    }

    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizeName = name.toLowerCase();
      const result = normalizeName.includes(normalizeFilter) || number.includes(normalizeFilter);
      return result;
    });
  
    return filteredContacts;
  });
