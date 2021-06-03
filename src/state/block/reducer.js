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

  loadBlockDetails,
  blockDetailsLoaded,
  blockDetailsError,
} = slice.actions;
