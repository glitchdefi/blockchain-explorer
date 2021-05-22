import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {};

export const slice = createSlice({
  name: "wallet",
  initialState: INITIAL_STATE,
  reducers: {
    loadWalletCount: (state) => {},
    walletCountLoaded: (state, action) => {
      state.walletCount = action.payload;
    },
    walletCountError: (state, action) => {
      state.walletCountError = action.payload;
    },
  },
});

// Actions
export const { loadWalletCount, walletCountLoaded, walletCountError } =
  slice.actions;
