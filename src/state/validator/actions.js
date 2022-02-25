import ValidatorApis from "src/services/apis/validator";
import {
  loadValidatorList,
  validatorListLoaded,
  validatorListError,
  loadValidatorDetails,
  actionResetValidatorList,
  validatorDetailsLoaded,
  validatorDetailsError,
  resetValidatorDetails as acResetValidatorDetails,
} from "./reducer";

export const fetchValidatorList = (params) => async (dispatch) => {
  try {
    dispatch(loadValidatorList());
    const data = await ValidatorApis.getValidatorList(params);
    dispatch(validatorListLoaded(data));
  } catch (error) {
    dispatch(validatorListError(error));
  }
};

export const resetValidatorList = () => async (dispatch) => {
  dispatch(actionResetValidatorList());
};

export const fetchValidatorDetails = (validator) => async (dispatch) => {
  try {
    dispatch(loadValidatorDetails());
    const data = await ValidatorApis.getValidatorDetails(validator);
    dispatch(validatorDetailsLoaded(data));
  } catch (error) {
    dispatch(validatorDetailsError(error));
  }
};

export const resetValidatorDetails = () => async (dispatch) => {
  dispatch(acResetValidatorDetails());
};
