import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToast } from "src/hooks/useToast";

// Redux
import { slice } from "./reducer";
import {
  fetchProducerList,
  resetLoadProducerList,
  fetchProducerName,
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
      setTimeout(() => {
        dispatch(fetchProducerList(params));
      }, 500);
    }

    return () => {
      dispatch(resetLoadProducerList());
    };
  }, [params, dispatch]);

  useEffect(() => {
    if (producerListError) {
      toastError("Error", producerListError);
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
      toastError("Error", producerNameError);
    }
  }, [producerNameError]);

  return { producerName };
};
