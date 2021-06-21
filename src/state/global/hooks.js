import { useSelector } from "react-redux";
import { useInjectReducer } from "redux-injectors";

// Redux
import { slice } from "./reducer";

export const useGlobalSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
};

export const useSearchResult = () => {
  const { isSearching, searchResult, searchError } = useSelector(
    (state) => state.global
  );

  return { isSearching, searchResult, searchError };
};
