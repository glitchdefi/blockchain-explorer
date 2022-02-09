import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToast } from "src/hooks/useToast";

// Actions
import { fetchLogList, resetLogList } from "./actions";
import { slice } from "./reducer";

export const useLogsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const useLogList = (params) => {
  const { isFetchingLogs, logList, logListError } = useSelector(
    (state) => state.logs
  );

  const { data, total } = logList || {};
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params) dispatch(fetchLogList(params));
  }, [params, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetLogList());
    };
  }, []);

  useEffect(() => {
    if (logListError) {
      toastError("Error", logListError?.message);
    }
  }, [logListError]);

  return { isFetchingLogs, data, total };
};
