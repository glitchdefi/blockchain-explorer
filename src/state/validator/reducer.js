import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isFetchingValidatorDetails: true,
  isFetchingValidatorList: true,
  validatorDetails: null,
  validatorListError: null,
  validatorList: [],
};

export const slice = createSlice({
  name: "validator",
  initialState: INITIAL_STATE,
  reducers: {
    // validator list
    loadValidatorList: (state) => {
      state.isFetchingValidatorList = true;
    },
    validatorListLoaded: (state, action) => {
      state.isFetchingValidatorList = false;
      state.validatorList = action.payload;
      state.validatorListError = null;
    },
    validatorListError: (state, action) => {
      state.validatorListError = action.payload;
      state.isFetchingValidatorList = false;
    },
    resetValidatorList: (state) => {
      state.validatorList = [];
      state.isFetchingValidatorList = true;
      state.validatorListError = null;
    },

    // validator details
    loadValidatorDetails: (state) => {
      state.isFetchingValidatorDetails = true;
    },
    validatorDetailsLoaded: (state, action) => {
      state.isFetchingValidatorDetails = false;
      state.validatorDetails = action.payload;
    },
    validatorDetailsError: (state, action) => {
      state.isFetchingValidatorDetails = false;
      state.validatorDetailsError = action.payload;
    },
    resetValidatorDetails: (state) => {
      state.isFetchingValidatorDetails = true;
      state.validatorDetails = null;
      state.validatorDetailsError = null;
    },
  },
});

// Actions
export const {
  loadValidatorList,
  validatorListLoaded,
  validatorListError,
  resetValidatorList: actionResetValidatorList,

  loadValidatorDetails,
  validatorDetailsLoaded,
  validatorDetailsError,
  resetValidatorDetails,
} = slice.actions;
