import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isDashboardDataFetching: false,
  dashboardDataError: null,
  dashboardData: null,

  isDashboardDailyFetching: false,
  dashboardDailyError: null,
  dashboardDaily: null,
};

export const slice = createSlice({
  name: "dashboard",
  initialState: INITIAL_STATE,
  reducers: {
    loadDashboardData: (state) => {
      state.isDashboardDataFetching = true;
    },
    dashboardDataLoaded: (state, action) => {
      state.isDashboardDataFetching = false;
      state.dashboardData = action.payload;
    },
    dashboardDataError: (state, action) => {
      state.isDashboardDataFetching = false;
      state.dashboardDataError = action.payload;
    },

    loadDashboardDaily: (state) => {
      state.isDashboardDailyFetching = true;
    },
    dashboardDailyLoaded: (state, action) => {
      state.isDashboardDailyFetching = false;
      state.dashboardDaily = action.payload;
    },
    dashboardDailyError: (state, action) => {
      state.isDashboardDailyFetching = false;
      state.dashboardDailyError = action.payload;
    },
  },
});

// Actions
export const {
  loadDashboardData,
  dashboardDataLoaded,
  dashboardDataError,

  loadDashboardDaily,
  dashboardDailyLoaded,
  dashboardDailyError,
} = slice.actions;
