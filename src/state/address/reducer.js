import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isFetchingAddressDetails: true,
  addressDetails: null,
};

export const slice = createSlice({
  name: "address",
  initialState: INITIAL_STATE,
  reducers: {
    loadAddressDetails: (state) => {
      state.isFetchingAddressDetails = true;
    },
    addressDetailsLoaded: (state, action) => {
      state.isFetchingAddressDetails = false;
      state.addressDetails = action.payload;
    },
    addressDetailsError: (state, action) => {
      state.isFetchingAddressDetails = false;
      state.addressDetailsError = action.payload;
    },
    resetAddressDetails: (state) => {
      state.isFetchingAddressDetails = true;
      state.addressDetails = null;
      state.addressDetailsError = null;
    },

    loadAddressTxs: (state) => {
      state.isFetchingAddressTxs = true;
    },
    addressTxsLoaded: (state, action) => {
      state.isFetchingAddressTxs = false;
      state.addressTxs = action.payload;
    },
    addressTxsError: (state, action) => {
      state.isFetchingAddressTxs = false;
      state.addressTxsError = action.payload;
    },
    resetAddressTxs: (state) => {
      state.isFetchingAddressTxs = true;
      state.addressTxs = null;
      state.addressTxsError = null;
    },
  },
});

// Actions
export const {
  loadAddressDetails,
  addressDetailsLoaded,
  addressDetailsError,
  resetAddressDetails,

  loadAddressTxs,
  addressTxsLoaded,
  addressTxsError,
  resetAddressTxs,
} = slice.actions;
