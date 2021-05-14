import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isLoading: true,
  txList: [],
  error: null,
};

export const slice = createSlice({
  name: "transaction",
  initialState: INITIAL_STATE,
  reducers: {
    loadTxList: (state) => {
      state.isLoading = true;
    },
    txListLoaded: (state, action) => {
      state.isLoading = false;
      state.txList = action.payload;
    },
    txListError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    // ...
  },
});

// Actions
export const { loadTxList, txListLoaded, txListError } = slice.actions;
