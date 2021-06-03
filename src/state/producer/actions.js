import ProducerApis from "src/services/apis/producer";
import {
  loadProducerList,
  producerListLoaded,
  producerListError,
  producerNameLoaded,
  producerNameError,
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

export const fetchProducerName = () => async (dispatch) => {
  try {
    const data = await ProducerApis.getProducerName();
    dispatch(producerNameLoaded(data?.producer_name));
  } catch (error) {
    dispatch(producerNameError(error));
  }
};
