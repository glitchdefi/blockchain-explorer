import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isFetchingLogs: true,
  logList: [],
  logListError: null,
};

export const slice = createSlice({
  name: "logs",
  initialState: INITIAL_STATE,
  reducers: {
    loadLogList: (state) => {
      state.isFetchingLogs = true;
    },
    logListLoaded: (state, action) => {
      state.isFetchingLogs = false;
      state.logList = action.payload;
      state.logListError = null;
    },
    logListError: (state, action) => {
      state.logListError = action.payload;
      state.isFetchingLogs = false;
    },
    resetLogList: (state) => {
      state.logList = [];
      state.isFetchingLogs = true;
      state.logListError = null;
    },
  },
});

// Actions
export const {
  loadLogList,
  logListLoaded,
  logListError,
  resetLogList: actionResetLogList,
} = slice.actions;
