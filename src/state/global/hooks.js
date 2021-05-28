import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

import { useToast } from "src/hooks/useToast";

// Redux
import { slice } from "./reducer";

export const useGlobalSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const useSearchResult = () => {
  const { isSearching, searchResult, searchError } = useSelector(
    (state) => state.global
  );
  const { toastError } = useToast();

  useEffect(() => {
    if (searchError) {
      toastError("Error", searchError);
    }
  }, [searchError]);

  return { isSearching, searchResult, searchError };
};
