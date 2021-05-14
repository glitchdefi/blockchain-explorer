import BlockApis from "src/services/apis/block";
import { loadBlockList, blockListLoaded, blockListError } from "./reducer";

export const fetchBlockList = (params) => async (dispatch) => {
  try {
    dispatch(loadBlockList());
    const data = await BlockApis.getBlockList(params);
    dispatch(blockListLoaded(data));
  } catch (error) {
    dispatch(blockListError(error));
  }
};