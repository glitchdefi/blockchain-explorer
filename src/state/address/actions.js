import AddressApis from "src/services/apis/address";
import web3Utils from "web3-utils";
import { web3Glitch } from "src/utils/glitchWeb3";
import {
  loadAddressList,
  addressListLoaded,
  addressListError,
  loadAddressDetails,
  actionResetAddressList,
  addressDetailsLoaded,
  addressDetailsError,
  loadAddressTxs,
  addressTxsLoaded,
  addressTxsError,
  resetAddressTxs as acResetAddressTxs,
  resetAddressDetails as acResetAddressDetails,
  loadAddressBalanceTx,
  addressBalanceTxLoaded,
  addressBalanceTxError,
  actionResetAddressBalanceTx,
  loadAddressBalanceHistory,
  addressBalanceHistoryLoaded,
  addressBalanceHistoryError,
  actionResetAddressBalanceHistory,
} from "./reducer";

export const fetchAddressList = (params) => async (dispatch) => {
  try {
    dispatch(loadAddressList());
    const data = await AddressApis.getAddressList(params);
    dispatch(addressListLoaded(data));
  } catch (error) {
    dispatch(addressListError(error));
  }
};

export const resetAddressList = () => async (dispatch) => {
  dispatch(actionResetAddressList());
};

export const fetchAddressDetails = (address) => async (dispatch) => {
  try {
    dispatch(loadAddressDetails());
    const data = await AddressApis.getAddressDetails(address);
    dispatch(addressDetailsLoaded(data));
  } catch (error) {
    dispatch(addressDetailsError(error));
  }
};

export const resetAddressDetails = () => async (dispatch) => {
  dispatch(acResetAddressDetails());
};

export const fetchAddressTxs = (address, params) => async (dispatch) => {
  try {
    dispatch(loadAddressTxs());
    const data = await AddressApis.getTxsByAddress(address, params);
    dispatch(addressTxsLoaded(data));
  } catch (error) {
    dispatch(addressTxsError(error));
  }
};

export const resetAddressTxs = () => async (dispatch) => {
  dispatch(acResetAddressTxs());
};

export const fetchAddressBalanceTx = (address, params) => async (dispatch) => {
  try {
    dispatch(loadAddressBalanceTx());
    const data = await AddressApis.getBalanceTransferByAddress(address, params);
    dispatch(addressBalanceTxLoaded(data));
  } catch (error) {
    dispatch(addressBalanceTxError(error));
  }
};

export const fetchBalance = async (address) => {
  try {
    let data = {};
    if (web3Utils.isAddress(address)) {
      const res = await web3Glitch.getBalance(address);
      data = {
        free: res?.balance,
        reserved: "0",
        miscFrozen: "0",
      };
    } else {
      const res = await AddressApis.getBalance(address);
      data = { ...res };
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const resetAddressBalanceTx = () => async (dispatch) => {
  dispatch(actionResetAddressBalanceTx());
};

export const fetchAddressBalanceHistory = (address) => async (dispatch) => {
  try {
    dispatch(loadAddressBalanceHistory());
    const data = await AddressApis.getBalanceHistoryByAddress(address);
    dispatch(addressBalanceHistoryLoaded(data));
  } catch (error) {
    dispatch(addressBalanceHistoryError(error));
  }
};

export const resetAddressBalanceHistory = () => async (dispatch) => {
  dispatch(actionResetAddressBalanceHistory());
};
