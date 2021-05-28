import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isLoading: true,
  blockList: [],
  error: null,
  isFetchingBlockDetails: true,
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

    loadBlockCount: (state) => {
      state.blockCount = null;
    },
    blockCountLoaded: (state, action) => {
      state.blockCount = action.payload;
    },
    blockCountError: (state, action) => {
      state.blockCountError = action.payload;
    },

    loadBlockHeight: (state) => {
      state.blockHeight = null;
    },
    blockHeightLoaded: (state, action) => {
      state.blockHeight = action.payload;
    },
    blockHeightError: (state, action) => {
      state.blockHeightError = action.payload;
    },

    loadBlockLatest: (state) => {
      state.blockLatest = null;
    },
    blockLatestLoaded: (state, action) => {
      state.blockLatest = action.payload;
    },
    blockLatestError: (state, action) => {
      state.blockLatestError = action.payload;
    },

    loadBlockDetails: (state) => {
      state.isFetchingBlockDetails = true;
    },
    blockDetailsLoaded: (state, action) => {
      state.isFetchingBlockDetails = false;
      state.blockDetails = action.payload;
    },
    blockDetailsError: (state, action) => {
      state.isFetchingBlockDetails = false;
      state.blockDetailsError = action.payload;
    },
  },
});

// Actions
export const {
  loadBlockList,
  blockListLoaded,
  blockListError,

  loadBlockCount,
  blockCountLoaded,
  blockCountError,

  loadBlockHeight,
  blockHeightLoaded,
  blockHeightError,

  loadBlockLatest,
  blockLatestLoaded,
  blockLatestError,

  loadBlockDetails,
  blockDetailsLoaded,
  blockDetailsError,
} = slice.actions;
