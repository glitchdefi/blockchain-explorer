import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isLoading: true,
  blockList: [],
  error: null,
};

export const slice = createSlice({
  name: "block",
  initialState: INITIAL_STATE,
  reducers: {
    loadBlockList: (state) => {
      state.isLoading = true;
    },
    blockListLoaded: (state, action) => {
      state.isLoading = false;
      state.blockList = action.payload;
    },
    blockListError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    // ...
  },
});

// Actions
export const { loadBlockList, blockListLoaded, blockListError } = slice.actions;
