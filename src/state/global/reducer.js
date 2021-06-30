import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isSearching: false,
};

export const slice = createSlice({
  name: "global",
  initialState: INITIAL_STATE,
  reducers: {
    loadSearchResult: (state) => {
      state.isSearching = true;
      state.searchError = null;
    },
    searchResultLoaded: (state, action) => {
      state.isSearching = false;
      state.searchResult = action.payload;
    },
    searchResultError: (state, action) => {
      state.isSearching = false;
      state.searchError = action.payload;
    },
  },
});

// Actions
export const { loadSearchResult, searchResultLoaded, searchResultError } =
  slice.actions;
