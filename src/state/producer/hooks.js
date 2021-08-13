import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToast } from "src/hooks/useToast";
import { useToastError } from "src/hooks/useToastError";

// Redux
import { slice } from "./reducer";
import {
  fetchProducerList,
  resetLoadProducerList,
  fetchProducerName,
  fetchProducerDetails,
} from "./actions";

export const useProducerSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const useProducerList = (params) => {
  const { isFetchingProducerList, producerList, producerListError } =
    useSelector((state) => state.producer);
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params) {
      dispatch(fetchProducerList(params));
    }

    return () => {
      dispatch(resetLoadProducerList());
    };
  }, [params, dispatch]);

  useEffect(() => {
    if (producerListError) {
      toastError("Error", producerListError?.message);
    }
  }, [producerListError]);

  return { isFetchingProducerList, producerList };
};

export const useProducerName = () => {
  const { producerName, producerNameError } = useSelector(
    (state) => state.producer
  );
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducerName());
  }, [dispatch]);

  useEffect(() => {
    if (producerNameError) {
      toastError("Error", producerNameError?.message);
    }
  }, [producerNameError]);

  return { producerName };
};

export const useProducerDetails = (address) => {
  const { producerDetails, producerDetailsError } = useSelector(
    (state) => state.producer
  );
  const dispatch = useDispatch();
  useToastError(null, producerDetailsError);

  useEffect(() => {
    if (address) {
      dispatch(fetchProducerDetails(address));
    }
  }, [address, dispatch]);

  return { producerDetails };
};
