import BlockApis from "src/services/apis/block";
import {
  loadBlockList,
  blockListLoaded,
  blockListError,
  loadBlockCount,
  blockCountLoaded,
  blockCountError,
  loadBlockHeight,
  blockHeightLoaded,
  blockHeightError,
  loadBlockLatest,
  blockLatestLoaded,
  blockLatestError,
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

export const fetchBlockCount = () => async (dispatch) => {
  try {
    dispatch(loadBlockCount());
    const data = await BlockApis.getBlockCount();
    dispatch(blockCountLoaded(data));
  } catch (error) {
    dispatch(blockCountError(error));
  }
};

export const fetchBlockByHeight = (params) => async (dispatch) => {
  try {
    dispatch(loadBlockHeight());
    const data = await BlockApis.getBlockByHeight(params);
    dispatch(blockHeightLoaded(data));
  } catch (error) {
    dispatch(blockHeightError(error));
  }
};

export const fetchBlockLatest = () => async (dispatch) => {
  try {
    dispatch(loadBlockLatest());
    const data = await BlockApis.getLatestBlock();
    dispatch(blockLatestLoaded(data));
  } catch (error) {
    dispatch(blockLatestError(error));
  }
};
