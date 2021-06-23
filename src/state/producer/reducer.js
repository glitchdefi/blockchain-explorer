import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isFetchingProducerList: true,
  isFetchingProducerDetails: true,
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

    loadProducerDetails: (state) => {
      state.isFetchingProducerDetails = true;
      state.producerDetails = null;
      state.producerDetailsError = null;
    },
    producerDetailsLoaded: (state, action) => {
      state.isFetchingProducerDetails = false;
      state.producerDetails = action.payload;
    },
    producerDetailsError: (state, action) => {
      state.producerDetailsError = action.payload;
      state.isFetchingProducerDetails = false;
    },

    producerNameLoaded: (state, action) => {
      state.producerName = action.payload;
    },
    producerNameError: (state, action) => {
      state.producerNameError = action.payload;
    },
  },
});

// Actions
export const {
  loadProducerList,
  producerListLoaded,
  producerListError,
  producerNameLoaded,
  producerNameError,
  loadProducerDetails,
  producerDetailsLoaded,
  producerDetailsError,
} = slice.actions;
