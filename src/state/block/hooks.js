import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToast } from "src/hooks/useToast";

// Redux
import { slice } from "./reducer";
import {
  fetchBlockList,
  resetBlockList,
  fetchBlockCount,
  fetchBlockLatest,
} from "./actions";

export const useBlockSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const useBlockList = (params) => {
  const { isLoading, blockList, error } = useSelector((state) => state.block);
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchBlockList(params));
    }, 250);

    return () => {
      dispatch(resetBlockList());
    };
  }, [params, dispatch]);

  useEffect(() => {
    if (error) {
      toastError("Blocks Error", error);
    }
  }, [error]);

  return { isLoading, blockList };
};

export const useBlockCount = () => {
  const { blockCount, blockCountError } = useSelector((state) => state.block);
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlockCount());
  }, [dispatch]);

  useEffect(() => {
    if (blockCountError) {
      toastError("Blocks Error", blockCountError);
    }
  }, [blockCountError]);

  return { blockCount };
};

export const useBlockLatest = () => {
  const { blockLatest, blockLatestError } = useSelector((state) => state.block);
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlockLatest());
  }, [dispatch]);

  useEffect(() => {
    if (blockLatestError) {
      toastError("Blocks Error", blockLatestError);
    }
  }, [blockLatestError]);

  return { blockLatest };
};
