import TxApis from "src/services/apis/transaction";
import { loadTxList, txListLoaded, txListError } from "./reducer";

export const fetchTxList = (params) => async (dispatch) => {
  try {
    dispatch(loadTxList());
    const data = await TxApis.getTxList(params);
    dispatch(txListLoaded(data));
  } catch (error) {
    dispatch(txListError(error));
  }
};
