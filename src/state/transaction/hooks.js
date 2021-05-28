import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToast } from "src/hooks/useToast";

// Actions
import {
  fetchTxList,
  resetTxList,
  fetchTxCount,
  fetchTxByHash,
} from "./actions";
import { slice } from "./reducer";

export const useTxSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const useTxList = (params) => {
  const { isLoading, txList, error } = useSelector(
    (state) => state.transaction
  );
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params) dispatch(fetchTxList(params));

    // return () => {
    //   dispatch(resetTxList());
    // };
  }, [params, dispatch]);

  useEffect(() => {
    if (error) {
      toastError("Tx Error", error);
    }
  }, [error]);

  return { isLoading, txList, error };
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
      toastError("Tx Error", txCountError);
    }
  }, [txCountError]);

  return { txCount };
};

export const useTxByHash = (hash) => {
  const { txHash, txHashError } = useSelector((state) => state.transaction);
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTxByHash());
  }, [hash, dispatch]);

  useEffect(() => {
    if (txHashError) {
      toastError("Tx Error", txHashError);
    }
  }, [txHashError]);

  return { txHash };
};
