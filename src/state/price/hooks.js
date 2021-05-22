import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToast } from "src/hooks/useToast";

// Redux
import { slice } from "./reducer";
import { fetchPriceHistory } from "./actions";

export const usePriceSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const usePriceHistory = () => {
  const { isFetchingPriceHistory, priceHistory, priceHistoryError } =
    useSelector((state) => state.price);
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPriceHistory());
  }, [dispatch]);

  useEffect(() => {
    if (priceHistoryError) {
      toastError("Price Error", priceHistoryError);
    }
  }, [priceHistoryError]);

  return { isFetchingPriceHistory, priceHistory };
};
