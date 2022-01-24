import DashboardApis from "src/services/apis/dashboard";
import {
  loadDashboardData,
  dashboardDataLoaded,
  dashboardDataError,
  loadDashboardDaily,
  dashboardDailyLoaded,
  dashboardDailyError,
} from "./reducer";

export const fetchDashboardData = () => async (dispatch) => {
  try {
    dispatch(loadDashboardData());
    const data = await DashboardApis.getDashboardData();
    dispatch(dashboardDataLoaded(data));
  } catch (error) {
    dispatch(dashboardDataError(error));
  }
};

export const fetchDashboardDaily = () => async (dispatch) => {
  try {
    dispatch(loadDashboardDaily());
    const data = await DashboardApis.getDashboardDailyData();
    dispatch(dashboardDailyLoaded(data));
  } catch (error) {
    dispatch(dashboardDailyError(error));
  }
};
