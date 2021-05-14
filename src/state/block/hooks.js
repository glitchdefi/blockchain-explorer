import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { slice } from "./reducer";

// Actions
import { fetchBlockList } from "./actions";

export const useBlockSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const useBlockList = (params) => {
  const { isLoading, blockList, error } = useSelector((state) => state.block);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlockList(params));
  }, [params, dispatch]);

  return { isLoading, blockList, error };
};
