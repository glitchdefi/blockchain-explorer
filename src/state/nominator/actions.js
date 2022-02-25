import NominatorApis from "src/services/apis/nominator";
import {
  loadNominatorList,
  nominatorListLoaded,
  nominatorListError,
  loadNominatorDetails,
  actionResetNominatorList,
  nominatorDetailsLoaded,
  nominatorDetailsError,
  resetNominatorDetails as acResetNominatorDetails,
} from "./reducer";

export const fetchNominatorList = (params) => async (dispatch) => {
  try {
    dispatch(loadNominatorList());
    const data = await NominatorApis.getNominatorList(params);
    dispatch(nominatorListLoaded(data));
  } catch (error) {
    dispatch(nominatorListError(error));
  }
};

export const resetNominatorList = () => async (dispatch) => {
  dispatch(actionResetNominatorList());
};

export const fetchNominatorDetails = (nominator) => async (dispatch) => {
  try {
    dispatch(loadNominatorDetails());
    const data = await NominatorApis.getNominatorDetails(nominator);
    dispatch(nominatorDetailsLoaded(data));
  } catch (error) {
    dispatch(nominatorDetailsError(error));
  }
};

export const resetNominatorDetails = () => async (dispatch) => {
  dispatch(acResetNominatorDetails());
};
