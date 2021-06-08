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
    resetBlockList: (state) => {
      state.blockList = [];
      state.isLoading = true;
    },

    headBlockLoaded: (state, action) => {
      state.headBlock = action.payload;
    },
    headBlockError: (state, action) => {
      state.headBlockError = action.payload;
    },

    latestBlockLoaded: (state, action) => {
      const latestBlock = action.payload;
      if (state.blockList?.data?.length) {
        state.blockList.data.pop();
        state.blockList.data.unshift(latestBlock);
      }
    },

    loadBlockDetails: (state) => {
      state.isFetchingBlockDetails = true;
      state.blockDetails = null;
    },
    blockDetailsLoaded: (state, action) => {
      state.isFetchingBlockDetails = false;
      state.blockDetails = action.payload;
    },
    blockDetailsError: (state, action) => {
      state.isFetchingBlockDetails = false;
      state.blockDetailsError = action.payload;
    },

    loadBlockTxs: (state) => {
      state.isFetchingBlockTxs = true;
    },
    blockTxsLoaded: (state, action) => {
      state.isFetchingBlockTxs = false;
      state.blockTxs = action.payload;
    },
    blockTxsError: (state, action) => {
      state.isFetchingBlockTxs = false;
      state.blockTxsError = action.payload;
    },
    resetBlockTxs: (state) => {
      state.isFetchingBlockTxs = true;
      state.blockTxs = null;
    },
  },
});

// Actions
export const {
  loadBlockList,
  blockListLoaded,
  blockListError,
  resetBlockList,

  headBlockLoaded,
  headBlockError,

  latestBlockLoaded,

  loadBlockTxs,
  blockTxsLoaded,
  blockTxsError,
  resetBlockTxs,

  loadBlockDetails,
  blockDetailsLoaded,
  blockDetailsError,
} = slice.actions;
