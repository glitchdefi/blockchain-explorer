import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToast } from "src/hooks/useToast";

// Redux
import { slice } from "./reducer";
import { fetchWalletCount } from "./actions";

export const useWalletSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const useWalletCount = () => {
  const { walletCount, walletCountError } = useSelector(
    (state) => state.wallet
  );
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWalletCount());
  }, [dispatch]);

  useEffect(() => {
    if (walletCountError) {
      toastError("Wallet Error", walletCountError);
    }
  }, [walletCountError]);

  return { walletCount };
};
