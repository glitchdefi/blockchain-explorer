import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToast } from "src/hooks/useToast";

// Redux
import { slice } from "./reducer";
import { fetchDashboardData } from "./actions";

export const useDashboardSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const useDashboardData = () => {
  const { dashboardData, dashboardDataError } = useSelector(
    (state) => state.dashboard
  );
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  useEffect(() => {
    if (dashboardDataError) {
      toastError("Blocks Error", dashboardDataError?.message);
    }
  }, [dashboardDataError]);

  return { dashboardData };
};

export const useDashboardDaily = () => {
  const { isDashboardDailyFetching, dashboardDaily, dashboardDailyError } =
    useSelector((state) => state.dashboard);
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  useEffect(() => {
    if (dashboardDailyError) {
      toastError("Blocks Error", dashboardDailyError?.message);
    }
  }, [dashboardDailyError]);

  return { isDashboardDailyFetching, dashboardDaily };
};
