import BlockApis from "src/services/apis/block";
import {
  loadBlockList,
  blockListLoaded,
  blockListError,
  headBlockLoaded,
  headBlockError,
  loadBlockDetails,
  blockDetailsLoaded,
  blockDetailsError,
} from "./reducer";

export const fetchBlockList = (params) => async (dispatch) => {
  try {
    dispatch(loadBlockList());
    const data = await BlockApis.getBlockList(params);
    dispatch(blockListLoaded(data?.data));
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

export const fetchBlockDetails = (height) => async (dispatch) => {
  try {
    dispatch(loadBlockDetails());
    const data = await BlockApis.getBlockByHeight(height);
    dispatch(blockDetailsLoaded(data?.length ? data[0] : null));
  } catch (error) {
    dispatch(blockDetailsError(error));
  }
};

export const resetLoadBlockDetails = () => async (dispatch) => {
  dispatch(loadBlockDetails());
};
