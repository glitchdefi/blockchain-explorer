import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToastError } from "src/hooks/useToastError";

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
  const dispatch = useDispatch();
  useToastError(null, priceHistoryError);

  useEffect(() => {
    dispatch(fetchPriceHistory());
  }, [dispatch]);

  return { isFetchingPriceHistory, priceHistory };
};

export const useAllGlitchInfo = () => {
  const { isFetchingAllGlitchInfo, allGlitchInfo, allGlitchInfoError } =
    usePriceSelector();
  const dispatch = useDispatch();
  useToastError(null, allGlitchInfoError);

  useEffect(() => {
    dispatch(fetchAllGlitchInfo());

    const fetchInterval = setInterval(() => {
      dispatch(fetchAllGlitchInfo());
    }, 3000);

    return () => {
      clearInterval(fetchInterval);
    };
  }, [dispatch]);

  return { isFetchingAllGlitchInfo, allGlitchInfo };
};

export const useGlitchMarketData = () => {
  const {
    isFetchingGlitchMarketData,
    glitchMarketData,
    glitchMarketDataError,
  } = usePriceSelector();
  const dispatch = useDispatch();
  useToastError(null, glitchMarketDataError);

  useEffect(() => {
    dispatch(fetchGlitchMarketData());
  }, [dispatch]);

  return { isFetchingGlitchMarketData, glitchMarketData };
};
