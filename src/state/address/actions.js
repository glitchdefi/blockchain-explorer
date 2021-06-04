import AddressApis from "src/services/apis/address";
import {
  loadAddressDetails,
  addressDetailsLoaded,
  addressDetailsError,
  loadAddressTxs,
  addressTxsLoaded,
  addressTxsError,
  resetAddressTxs as acResetAddressTxs,
  resetAddressDetails as acResetAddressDetails,
} from "./reducer";

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
