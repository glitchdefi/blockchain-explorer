import TxApis from "src/services/apis/transaction";
import {
  loadTxList,
  txListLoaded,
  txListError,
  loadTxCount,
  txCountLoaded,
  txCountError,
  loadTxHash,
  txHashLoaded,
  txHashError,
} from "./reducer";

export const fetchTxList = (params) => async (dispatch) => {
  try {
    dispatch(loadTxList());
    const data = await TxApis.getTxList(params);
    dispatch(txListLoaded(data));
  } catch (error) {
    dispatch(txListError(error));
  }
};

export const resetTxList = () => async (dispatch) => {
  dispatch(txListLoaded([]));
  dispatch(loadTxList());
};

export const fetchTxCount = () => async (dispatch) => {
  try {
    dispatch(loadTxCount());
    const data = await TxApis.getTxCount();
    dispatch(txCountLoaded(data));
  } catch (error) {
    dispatch(txCountError(error));
  }
};

export const fetchTxByHash = (hash) => async (dispatch) => {
  try {
    dispatch(loadTxHash());
    const data = await TxApis.getTxByHash(hash);
    dispatch(txHashLoaded(data));
  } catch (error) {
    dispatch(txHashError(error));
  }
};
