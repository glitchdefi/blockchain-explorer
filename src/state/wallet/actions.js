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
    dispatch(walletCountLoaded(data));
  } catch (error) {
    dispatch(walletCountError(error));
  }
};
