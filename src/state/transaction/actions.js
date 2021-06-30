import TxApis from "src/services/apis/transaction";
import {
  loadTxList,
  txListLoaded,
  txListError,
  actionResetTxList,
  loadTxCount,
  txCountLoaded,
  txCountError,
  loadTxDetails,
  txDetailsLoaded,
  txDetailsError,
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
  dispatch(actionResetTxList());
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
    dispatch(loadTxDetails());
    const data = await TxApis.getTxByHash(hash);
    dispatch(txDetailsLoaded(data));
  } catch (error) {
    dispatch(txDetailsError(error));
  }
};

export const resetLoadTxDetails = () => async (dispatch) => {
  dispatch(loadTxDetails());
};
