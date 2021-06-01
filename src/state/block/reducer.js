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
      state.blockList = [];
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

    latestBlockLoaded: (state, action) => {
      const latestBlock = action.payload;
      if (state.blockList?.length) {
        const newList = state.blockList.pop();
        state.blockList = [latestBlock, ...newList];
      }
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

  latestBlockLoaded,

  loadBlockDetails,
  blockDetailsLoaded,
  blockDetailsError,
} = slice.actions;
