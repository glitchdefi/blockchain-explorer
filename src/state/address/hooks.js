import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToast } from "src/hooks/useToast";

// Redux
import { slice } from "./reducer";
import {
  fetchAddressList,
  resetAddressList,
  fetchAddressDetails,
  resetAddressDetails,
  fetchAddressTxs,
  resetAddressTxs,
  fetchAddressBalanceTx,
  resetAddressBalanceTx,
  fetchAddressBalanceHistory,
  resetAddressBalanceHistory,
  fetchBalance,
} from "./actions";

export const useAddressSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const useAddressList = (params) => {
  const { isFetchingAddressList, addressList, addressListError } = useSelector(
    (state) => state.address
  );

  const { data, total } = addressList || {};
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params) dispatch(fetchAddressList(params));
  }, [params, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetAddressList());
    };
  }, []);

  useEffect(() => {
    if (addressListError) {
      toastError("Error", addressListError?.message);
    }
  }, [addressListError]);

  return { isFetchingAddressList, data, total };
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
      toastError("Error", addressDetailsError?.message);
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
      dispatch(fetchAddressTxs(address, params));
    }
  }, [address, params, dispatch]);

  useEffect(() => {
    dispatch(resetAddressTxs());
  }, []);

  useEffect(() => {
    if (addressTxsError) {
      toastError("Error", addressTxsError?.message);
    }
  }, [addressTxsError]);

  return { isFetchingAddressTxs, data, total };
};

export const useAddressBalanceTx = (address, params) => {
  const {
    isFetchingAddressBalanceTx,
    addressBalanceTx,
    addressBalanceTxError,
  } = useSelector((state) => state.address);
  const { data, total } = addressBalanceTx || {};
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params && address) {
      dispatch(fetchAddressBalanceTx(address, params));
    }
  }, [address, params, dispatch]);

  useEffect(() => {
    dispatch(resetAddressBalanceTx());
  }, []);

  useEffect(() => {
    if (addressBalanceTxError) {
      toastError("Error", addressBalanceTxError?.message);
    }
  }, [addressBalanceTxError]);

  return { isFetchingAddressBalanceTx, data, total };
};

export const useBalance = (address) => {
  const [isFetchingBalance, setIsFetchingBalance] = useState(true);
  const [balance, setBalance] = useState("0");

  useEffect(() => {
    async function getBalance() {
      if (address) {
        const data = await fetchBalance(address);
        setBalance(data);
        setIsFetchingBalance(false);
      }
    }

    getBalance();
  }, [address]);

  return { isFetchingBalance, balance };
};

export const useAddressBalanceHistory = (address) => {
  const {
    isFetchingAddressBalanceHistory,
    addressBalanceHistory,
    addressBalanceHistoryError,
  } = useSelector((state) => state.address);
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAddressBalanceHistory(address));
  }, [address, dispatch]);

  useEffect(() => {
    dispatch(resetAddressBalanceHistory());
  }, []);

  useEffect(() => {
    if (addressBalanceHistoryError) {
      toastError("Error", addressBalanceHistoryError?.message);
    }
  }, [addressBalanceHistoryError]);

  return { isFetchingAddressBalanceHistory, addressBalanceHistory };
};
