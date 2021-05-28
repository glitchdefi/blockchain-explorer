import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isFetchingProducerList: true,
};

export const slice = createSlice({
  name: "producer",
  initialState: INITIAL_STATE,
  reducers: {
    loadProducerList: (state) => {
      state.isFetchingProducerList = true;
    },
    producerListLoaded: (state, action) => {
      state.isFetchingProducerList = false;
      state.producerList = action.payload;
    },
    producerListError: (state, action) => {
      state.producerListError = action.payload;
      state.isFetchingProducerList = false;
    },
  },
});

// Actions
export const { loadProducerList, producerListLoaded, producerListError } =
  slice.actions;
