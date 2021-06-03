import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToast } from "src/hooks/useToast";

// Actions
import {
  fetchTxList,
  resetTxList,
  fetchTxCount,
  fetchTxByHash,
  resetLoadTxDetails,
} from "./actions";
import { slice } from "./reducer";

export const useTxSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const useTxList = (params) => {
  const { isLoading, txList, error } = useSelector(
    (state) => state.transaction
  );
  const { data, total } = txList || {};
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params) dispatch(fetchTxList(params));
  }, [params, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetTxList());
    };
  }, []);

  useEffect(() => {
    if (error) {
      toastError("Error", error);
    }
  }, [error]);

  return { isLoading, data, total };
};

export const useTxCount = () => {
  const { txCount, txCountError } = useSelector((state) => state.transaction);
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTxCount());
  }, [dispatch]);

  useEffect(() => {
    if (txCountError) {
      toastError("Error", txCountError);
    }
  }, [txCountError]);

  return { txCount };
};

export const useTxByHash = (hash) => {
  const { isFetchingTxDetails, txDetails, txDetailsError } = useSelector(
    (state) => state.transaction
  );
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchTxByHash(hash));
    }, 200);

    return () => {
      dispatch(resetLoadTxDetails());
    };
  }, [hash, dispatch]);

  useEffect(() => {
    if (txDetailsError) {
      toastError("Error", txDetailsError);
    }
  }, [txDetailsError]);

  return { isFetchingTxDetails, txDetails };
};
