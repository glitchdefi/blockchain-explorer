import GlobalApis from "src/services/apis/global";
import {
  loadSearchResult,
  searchResultLoaded,
  searchResultError,
} from "./reducer";

export const fetchSearchResult = (params) => async (dispatch) => {
  try {
    dispatch(loadSearchResult());
    const data = await GlobalApis.searchById(params);

    if (data) {
      const key = Object.keys(data);
      const newData = {
        type: key?.length ? key[0] : null,
      };

      dispatch(searchResultLoaded(newData));
    } else {
      dispatch(searchResultError("Not found"));
    }
  } catch (error) {
    dispatch(searchResultError(error));
  }
};
