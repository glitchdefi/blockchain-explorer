import ProducerApis from "src/services/apis/producer";
import {
  loadProducerList,
  producerListLoaded,
  producerListError,
} from "./reducer";

export const fetchProducerList = (params) => async (dispatch) => {
  try {
    dispatch(loadProducerList());
    const data = await ProducerApis.getProducerList(params);
    dispatch(producerListLoaded(data));
  } catch (error) {
    dispatch(producerListError(error));
  }
};

export const resetLoadProducerList = () => async (dispatch) => {
  dispatch(loadProducerList());
};
