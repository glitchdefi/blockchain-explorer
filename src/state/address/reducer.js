import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isFetchingAddressDetails: true,
  isFetchingAddressList: true,
  addressDetails: null,
  addressListError: null,
  addressList: [],
};

export const slice = createSlice({
  name: "address",
  initialState: INITIAL_STATE,
  reducers: {
    // address list
    loadAddressList: (state) => {
      state.isFetchingAddressList = true;
    },
    addressListLoaded: (state, action) => {
      state.isFetchingAddressList = false;
      state.addressList = action.payload;
      state.addressListError = null;
    },
    addressListError: (state, action) => {
      state.addressListError = action.payload;
      state.isFetchingAddressList = false;
    },
    resetAddressList: (state) => {
      state.addressList = [];
      state.isFetchingAddressList = true;
      state.addressListError = null;
    },

    // address details
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

    // address/tx
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

    // address/balance_tx
    loadAddressBalanceTx: (state) => {
      state.isFetchingAddressBalanceTx = true;
    },
    addressBalanceTxLoaded: (state, action) => {
      state.isFetchingAddressBalanceTx = false;
      state.addressBalanceTx = action.payload;
    },
    addressBalanceTxError: (state, action) => {
      state.isFetchingAddressBalanceTx = false;
      state.addressBalanceTxError = action.payload;
    },
    resetAddressBalanceTx: (state) => {
      state.isFetchingAddressBalanceTx = true;
      state.addressTxs = null;
      state.addressBalanceTxError = null;
    },

    // address/balance_history
    loadAddressBalanceHistory: (state) => {
      state.isFetchingAddressBalanceHistory = true;
    },
    addressBalanceHistoryLoaded: (state, action) => {
      state.isFetchingAddressBalanceHistory = false;
      state.addressBalanceHistory = action.payload;
    },
    addressBalanceHistoryError: (state, action) => {
      state.isFetchingAddressBalanceHistory = false;
      state.addressBalanceHistoryError = action.payload;
    },
    resetAddressBalanceHistory: (state) => {
      state.isFetchingAddressBalanceHistory = true;
      state.addressHistorys = null;
      state.addressBalanceHistoryError = null;
    },
  },
});

// Actions
export const {
  loadAddressList,
  addressListLoaded,
  addressListError,
  resetAddressList: actionResetAddressList,

  loadAddressDetails,
  addressDetailsLoaded,
  addressDetailsError,
  resetAddressDetails,

  loadAddressTxs,
  addressTxsLoaded,
  addressTxsError,
  resetAddressTxs,

  loadAddressBalanceTx,
  addressBalanceTxLoaded,
  addressBalanceTxError,
  resetAddressBalanceTx: actionResetAddressBalanceTx,

  loadAddressBalanceHistory,
  addressBalanceHistoryLoaded,
  addressBalanceHistoryError,
  resetAddressBalanceHistory: actionResetAddressBalanceHistory,
} = slice.actions;
