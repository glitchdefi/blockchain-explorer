import BlockApis from "src/services/apis/block";
import {
  loadBlockList,
  blockListLoaded,
  blockListError,
  headBlockLoaded,
  headBlockError,
} from "./reducer";

export const fetchBlockList = (params) => async (dispatch) => {
  try {
    dispatch(loadBlockList());
    const data = await BlockApis.getBlockList(params);
    dispatch(blockListLoaded(data));
  } catch (error) {
    dispatch(blockListError(error));
  }
};

export const resetBlockList = () => async (dispatch) => {
  dispatch(loadBlockList());
};

export const fetchHeadBlock = () => async (dispatch) => {
  try {
    const data = await BlockApis.getHeadBlockNumber();
    dispatch(headBlockLoaded(data ? data?.head_block_number : null));
  } catch (error) {
    dispatch(headBlockError(error));
  }
};

// export const searchBlockById = (params) => async (dispatch) => {
//   try {
//     dispatch(loadBlockDetails());
//     const data = await BlockApis.searchBlockById(params);
//     dispatch(blockDetailsLoaded(data ? data?.block : null));
//   } catch (error) {
//     dispatch(blockDetailsError(error));
//   }
// };
