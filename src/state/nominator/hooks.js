import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToast } from "src/hooks/useToast";

// Redux
import { slice } from "./reducer";
import {
  fetchNominatorList,
  resetNominatorList,
  fetchNominatorDetails,
  resetNominatorDetails,
} from "./actions";

export const useNominatorSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const useNominatorList = (params) => {
  const { isFetchingNominatorList, nominatorList, nominatorListError } =
    useSelector((state) => state.nominator);

  const { data, total } = nominatorList || {};
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params) dispatch(fetchNominatorList(params));
  }, [params, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetNominatorList());
    };
  }, []);

  useEffect(() => {
    if (nominatorListError) {
      toastError("Error", nominatorListError?.message);
    }
  }, [nominatorListError]);

  return { isFetchingNominatorList, data, total };
};

export const useNominatorDetails = (nominator) => {
  const {
    isFetchingNominatorDetails,
    nominatorDetails,
    nominatorDetailsError,
  } = useSelector((state) => state.nominator);
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchNominatorDetails(nominator));
    }, 200);
  }, [nominator, dispatch]);

  useEffect(() => {
    dispatch(resetNominatorDetails());
  }, []);

  useEffect(() => {
    if (nominatorDetailsError) {
      toastError("Error", nominatorDetailsError?.message);
    }
  }, [nominatorDetailsError]);

  return { isFetchingNominatorDetails, nominatorDetails };
};
