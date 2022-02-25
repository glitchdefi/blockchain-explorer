import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToast } from "src/hooks/useToast";

// Redux
import { slice } from "./reducer";
import {
  fetchValidatorList,
  resetValidatorList,
  fetchValidatorDetails,
  resetValidatorDetails,
} from "./actions";

export const useValidatorSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const useValidatorList = (params) => {
  const { isFetchingValidatorList, validatorList, validatorListError } =
    useSelector((state) => state.validator);

  const { data, total } = validatorList || {};
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params) dispatch(fetchValidatorList(params));
  }, [params, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetValidatorList());
    };
  }, []);

  useEffect(() => {
    if (validatorListError) {
      toastError("Error", validatorListError?.message);
    }
  }, [validatorListError]);

  return { isFetchingValidatorList, data, total };
};

export const useValidatorDetails = (validator) => {
  const {
    isFetchingValidatorDetails,
    validatorDetails,
    validatorDetailsError,
  } = useSelector((state) => state.validator);
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchValidatorDetails(validator));
    }, 200);
  }, [validator, dispatch]);

  useEffect(() => {
    dispatch(resetValidatorDetails());
  }, []);

  useEffect(() => {
    if (validatorDetailsError) {
      toastError("Error", validatorDetailsError?.message);
    }
  }, [validatorDetailsError]);

  return { isFetchingValidatorDetails, validatorDetails };
};
