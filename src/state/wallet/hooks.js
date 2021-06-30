import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToastError } from "src/hooks/useToastError";

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
  const dispatch = useDispatch();
  useToastError(null, walletCountError);

  useEffect(() => {
    dispatch(fetchWalletCount());
  }, [dispatch]);

  return { walletCount };
};
