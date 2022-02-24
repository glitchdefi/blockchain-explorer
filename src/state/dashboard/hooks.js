import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";
import moment from "moment";

import { useToast } from "src/hooks/useToast";

// Redux
import { slice } from "./reducer";
import { fetchDashboardDaily, fetchDashboardData } from "./actions";

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

  const [chartsData, setChartsData] = useState({});

  useEffect(() => {
    dispatch(fetchDashboardDaily());
  }, [dispatch]);

  useEffect(() => {
    if (dashboardDailyError) {
      toastError("Blocks Error", dashboardDailyError?.message);
    }
  }, [dashboardDailyError]);

  useEffect(() => {
    if (dashboardDaily?.length) {
      const sortData = [...dashboardDaily].sort(function (a, b) {
        return a.time.localeCompare(b.time);
      });

      const txCount = sortData.map((o) => {
        return {
          txCount: o?.txCount,
          formatTime: moment(o?.time).format("DD.MMM"),
          time: o?.time,
        };
      });

      const dailyNewAccount = sortData.map((o) => {
        return {
          newAcc: o?.newAcc,
          formatTime: moment(o?.time).format("DD.MMM"),
          time: o?.time,
        };
      });

      const dailyAverageBlockTime = sortData.map((o) => {
        return {
          aveBlockTime: o?.aveBlockTime,
          formatTime: moment(o?.time).format("DD.MMM"),
          time: o?.time,
        };
      });

      setChartsData({ txCount, dailyNewAccount, dailyAverageBlockTime });
    }
  }, [dashboardDaily]);

  return { isDashboardDailyFetching, chartsData };
};
