import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isFetchingPriceHistory: true,
};

export const slice = createSlice({
  name: "price",
  initialState: INITIAL_STATE,
  reducers: {
    loadPriceHistory: (state) => {
      state.isFetchingPriceHistory = true;
    },
    priceHistoryLoaded: (state, action) => {
      state.isFetchingPriceHistory = false;
      state.priceHistory = action.payload;
    },
    priceHistoryError: (state, action) => {
      state.isFetchingPriceHistory = false;
      state.priceHistoryError = action.payload;
    },
  },
});

// Actions
export const { loadPriceHistory, priceHistoryLoaded, priceHistoryError } =
  slice.actions;
