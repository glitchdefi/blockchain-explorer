import BlockApis from "src/services/apis/block";
import {
  loadBlockList,
  blockListLoaded,
  blockListError,
  resetBlockList as actionResetBlockList,
  loadBlockDetails,
  blockDetailsLoaded,
  blockDetailsError,
  loadBlockTxs,
  blockTxsLoaded,
  blockTxsError,
  resetBlockTxs as actionResetBlockTxs,
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
  dispatch(actionResetBlockList());
};

export const fetchBlockDetails = (height) => async (dispatch) => {
  try {
    dispatch(loadBlockDetails());
    const data = await BlockApis.getBlockByHeight(height);
    dispatch(blockDetailsLoaded(data));
  } catch (error) {
    dispatch(blockDetailsError(error));
  }
};

export const resetLoadBlockDetails = () => async (dispatch) => {
  dispatch(loadBlockDetails());
};

export const fetchBlockTxs = (height, params) => async (dispatch) => {
  try {
    dispatch(loadBlockTxs());
    const data = await BlockApis.getBlockTxs(height, params);
    dispatch(blockTxsLoaded(data));
  } catch (error) {
    dispatch(blockTxsError(error));
  }
};

export const resetBlockTxs = () => async (dispatch) => {
  dispatch(actionResetBlockTxs());
};
