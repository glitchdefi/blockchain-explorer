import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isFetchingPriceHistory: true,
  isFetchingAllGlitchInfo: true,
};

export const slice = createSlice({
  name: "price",
  initialState: INITIAL_STATE,
  reducers: {
    // 7 day GLCH price history (USD) (list)
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

    // Get all glitch info (price, marketcap, total supply ...)
    loadAllGlitchInfo: (state) => {
      state.isFetchingAllGlitchInfo = true;
    },
    allGlitchInfoLoaded: (state, action) => {
      state.isFetchingAllGlitchInfo = false;
      state.allGlitchInfo = action.payload;
    },
    allGlitchInfoError: (state, action) => {
      state.isFetchingAllGlitchInfo = false;
      state.allGlitchInfoError = action.payload;
    },

    // Get historical market data include price, market cap, and 24h volume
    loadGlitchMarketData: (state) => {
      state.isFetchingGlitchMarketData = true;
    },
    glitchMarketDataLoaded: (state, action) => {
      state.isFetchingGlitchMarketData = false;
      state.glitchMarketData = action.payload;
    },
    glitchMarketDataError: (state, action) => {
      state.isFetchingGlitchMarketData = false;
      state.glitchMarketDataError = action.payload;
    },
  },
});

// Actions
export const {
  loadPriceHistory,
  priceHistoryLoaded,
  priceHistoryError,

  loadAllGlitchInfo,
  allGlitchInfoLoaded,
  allGlitchInfoError,

  loadGlitchMarketData,
  glitchMarketDataLoaded,
  glitchMarketDataError,
} = slice.actions;
