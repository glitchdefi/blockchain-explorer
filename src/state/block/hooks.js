import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToast } from "src/hooks/useToast";

// Redux
import { slice } from "./reducer";
import {
  fetchBlockList,
  fetchHeadBlock,
  resetBlockList,
  fetchBlockDetails,
  resetLoadBlockDetails,
  fetchBlockTxs,
  resetBlockTxs,
} from "./actions";

export const useBlockSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const useBlockList = (params) => {
  const { isLoading, blockList, error } = useSelector((state) => state.block);
  const { data, total } = blockList || {};
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params) {
      dispatch(fetchBlockList(params));
    }
  }, [params, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetBlockList());
    };
  }, []);

  useEffect(() => {
    if (error) {
      toastError("Blocks Error", error);
    }
  }, [error]);

  return { isLoading, data, total };
};

export const useBlockDetails = (height) => {
  const { isFetchingBlockDetails, blockDetails, blockDetailsError } =
    useSelector((state) => state.block);
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchBlockDetails(height));
    }, 200);

    return () => {
      dispatch(resetLoadBlockDetails());
    };
  }, [height, dispatch]);

  useEffect(() => {
    if (blockDetailsError) {
      toastError("Error", blockDetailsError);
    }
  }, [blockDetailsError]);

  return { isFetchingBlockDetails, blockDetails };
};

export const useHeadBlockNumber = () => {
  const { headBlock, headBlockError } = useSelector((state) => state.block);
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeadBlock());
  }, [dispatch]);

  useEffect(() => {
    if (headBlockError) {
      toastError("Error", headBlockError);
    }
  }, [headBlockError]);

  return { headBlock };
};

export const useBlockTxs = (block, params) => {
  const { isFetchingBlockTxs, blockTxs, blockTxsError } = useSelector(
    (state) => state.block
  );
  const { data, pagination, total } = blockTxs || {};

  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (block && params)
      setTimeout(() => {
        dispatch(fetchBlockTxs(block, params));
      }, 200);
  }, [block, params, dispatch]);

  useEffect(() => {
    dispatch(resetBlockTxs());
  }, []);

  useEffect(() => {
    if (blockTxsError) {
      toastError("Error", blockTxsError);
    }
  }, [blockTxsError]);

  return { isFetchingBlockTxs, data, total };
};
