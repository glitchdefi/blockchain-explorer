import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isFetchingNominatorDetails: true,
  isFetchingNominatorList: true,
  nominatorDetails: null,
  nominatorListError: null,
  nominatorList: [],
};

export const slice = createSlice({
  name: "nominator",
  initialState: INITIAL_STATE,
  reducers: {
    // nominator list
    loadNominatorList: (state) => {
      state.isFetchingNominatorList = true;
    },
    nominatorListLoaded: (state, action) => {
      state.isFetchingNominatorList = false;
      state.nominatorList = action.payload;
      state.nominatorListError = null;
    },
    nominatorListError: (state, action) => {
      state.nominatorListError = action.payload;
      state.isFetchingNominatorList = false;
    },
    resetNominatorList: (state) => {
      state.nominatorList = [];
      state.isFetchingNominatorList = true;
      state.nominatorListError = null;
    },

    // nominator details
    loadNominatorDetails: (state) => {
      state.isFetchingNominatorDetails = true;
    },
    nominatorDetailsLoaded: (state, action) => {
      state.isFetchingNominatorDetails = false;
      state.nominatorDetails = action.payload;
    },
    nominatorDetailsError: (state, action) => {
      state.isFetchingNominatorDetails = false;
      state.nominatorDetailsError = action.payload;
    },
    resetNominatorDetails: (state) => {
      state.isFetchingNominatorDetails = true;
      state.nominatorDetails = null;
      state.nominatorDetailsError = null;
    },
  },
});

// Actions
export const {
  loadNominatorList,
  nominatorListLoaded,
  nominatorListError,
  resetNominatorList: actionResetNominatorList,

  loadNominatorDetails,
  nominatorDetailsLoaded,
  nominatorDetailsError,
  resetNominatorDetails,
} = slice.actions;
