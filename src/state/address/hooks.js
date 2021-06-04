import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToast } from "src/hooks/useToast";

// Redux
import { slice } from "./reducer";
import {
  fetchAddressDetails,
  resetAddressDetails,
  fetchAddressTxs,
  resetAddressTxs,
} from "./actions";

export const useAddressSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const useAddressDetails = (address) => {
  const { isFetchingAddressDetails, addressDetails, addressDetailsError } =
    useSelector((state) => state.address);
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchAddressDetails(address));
    }, 200);
  }, [address, dispatch]);

  useEffect(() => {
    dispatch(resetAddressDetails());
  }, []);

  useEffect(() => {
    if (addressDetailsError) {
      toastError("Error", addressDetailsError);
    }
  }, [addressDetailsError]);

  return { isFetchingAddressDetails, addressDetails };
};

export const useAddressTxs = (address, params) => {
  const { isFetchingAddressTxs, addressTxs, addressTxsError } = useSelector(
    (state) => state.address
  );
  const { data, total } = addressTxs || {};
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params && address) {
      setTimeout(() => {
        dispatch(fetchAddressTxs(address));
      }, 200);
    }
  }, [address, params, dispatch]);

  useEffect(() => {
    dispatch(resetAddressTxs());
  }, []);

  useEffect(() => {
    if (addressTxsError) {
      toastError("Error", addressTxsError);
    }
  }, [addressTxsError]);

  return { isFetchingAddressTxs, data, total };
};