import { isEmpty } from "lodash";
import WalletApis from "src/services/apis/wallet";
import {
  loadWalletCount,
  walletCountLoaded,
  walletCountError,
} from "./reducer";

export const fetchWalletCount = () => async (dispatch) => {
  try {
    dispatch(loadWalletCount());
    const data = await WalletApis.getWalletCount();
    dispatch(walletCountLoaded(!isEmpty(data) ? data[0]?.count : 0));
  } catch (error) {
    dispatch(walletCountError(error));
  }
};
