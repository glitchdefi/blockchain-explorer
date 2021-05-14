import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { slice } from "./reducer";

// Actions
import { fetchTxList } from "./actions";

export const useTxSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const useTxList = (params) => {
  const { isLoading, txList, error } = useSelector(
    (state) => state.transaction
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTxList(params));
  }, [params, dispatch]);

  return { isLoading, txList, error };
};
