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
      state.error = null;
    },
    txListError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    loadTxCount: (state) => {
      state.txCount = null;
    },
    txCountLoaded: (state, action) => {
      state.txCount = action.payload;
    },
    txCountError: (state, action) => {
      state.txCountError = action.payload;
    },
    loadTxHash: (state) => {
      state.txHash = null;
    },
    txHashLoaded: (state, action) => {
      state.txHash = action.payload;
    },
    txHashError: (state, action) => {
      state.txHashError = action.payload;
    },
    // ...
  },
});

// Actions
export const {
  loadTxList,
  txListLoaded,
  txListError,

  loadTxCount,
  txCountLoaded,
  txCountError,

  loadTxHash,
  txHashLoaded,
  txHashError,
} = slice.actions;
