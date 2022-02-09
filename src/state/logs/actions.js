import LogApis from "src/services/apis/logs";
import {
  loadLogList,
  logListLoaded,
  logListError,
  actionResetLogList,
} from "./reducer";

export const fetchLogList = (params) => async (dispatch) => {
  try {
    dispatch(loadLogList());
    const data = await LogApis.getLogs(params);
    dispatch(logListLoaded(data));
  } catch (error) {
    dispatch(logListError(error));
  }
};

export const resetLogList = () => async (dispatch) => {
  dispatch(actionResetLogList());
};
