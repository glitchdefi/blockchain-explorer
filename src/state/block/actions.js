import BlockApis from "src/services/apis/block";
import {
  loadBlockList,
  blockListLoaded,
  blockListError,
  resetBlockList as actionResetBlockList,
  headBlockLoaded,
  headBlockError,
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
    setTimeout(async () => {
      const data = await BlockApis.getBlockList(params);
      dispatch(blockListLoaded(data));
    }, 200);
  } catch (error) {
    dispatch(blockListError(error));
  }
};

export const resetBlockList = () => async (dispatch) => {
  dispatch(actionResetBlockList());
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

export const fetchBlockTxs = (block, params) => async (dispatch) => {
  try {
    dispatch(loadBlockTxs());
    const data = await BlockApis.getBlockTxs(block, params);
    dispatch(blockTxsLoaded(data));
  } catch (error) {
    dispatch(blockTxsError(error));
  }
};

export const resetBlockTxs = () => async (dispatch) => {
  dispatch(actionResetBlockTxs());
};
