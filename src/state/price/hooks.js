import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToast } from "src/hooks/useToast";

// Redux
import { slice } from "./reducer";
import {
  fetchPriceHistory,
  fetchAllGlitchInfo,
  fetchGlitchMarketData,
} from "./actions";

export const usePriceSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const usePriceSelector = () => {
  const price = useSelector((state) => state.price);
  return price;
};

export const usePriceHistory = () => {
  const { isFetchingPriceHistory, priceHistory, priceHistoryError } =
    usePriceSelector();
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPriceHistory());
  }, [dispatch]);

  useEffect(() => {
    if (priceHistoryError) {
      toastError("Error", priceHistoryError);
    }
  }, [priceHistoryError]);

  return { isFetchingPriceHistory, priceHistory };
};

export const useAllGlitchInfo = () => {
  const { isFetchingAllGlitchInfo, allGlitchInfo, allGlitchInfoError } =
    usePriceSelector();
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllGlitchInfo());
  }, [dispatch]);

  useEffect(() => {
    if (allGlitchInfoError) {
      toastError("Error", allGlitchInfoError);
    }
  }, [allGlitchInfoError]);

  return { isFetchingAllGlitchInfo, allGlitchInfo };
};

export const useGlitchMarketData = () => {
  const {
    isFetchingGlitchMarketData,
    glitchMarketData,
    glitchMarketDataError,
  } = usePriceSelector();
  const { toastError } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGlitchMarketData());
  }, [dispatch]);

  useEffect(() => {
    if (glitchMarketDataError) {
      toastError("Error", glitchMarketDataError);
    }
  }, [glitchMarketDataError]);

  return { isFetchingGlitchMarketData, glitchMarketData };
};
