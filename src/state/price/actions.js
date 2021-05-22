import { isEmpty } from "lodash";
import moment from "moment";
import PriceApis from "src/services/apis/price";
import {
  loadPriceHistory,
  priceHistoryLoaded,
  priceHistoryError,
} from "./reducer";

export const fetchPriceHistory = () => async (dispatch) => {
  try {
    dispatch(loadPriceHistory());
    const res = await PriceApis.getPriceHistory7Days();

    // Handle logic
    let data = [];
    const { prices } = res;

    if (!isEmpty(prices)) {
      Object.keys(prices)
        .reverse()
        .map((key) => {
          data.push({
            date: moment(key, "DD-MM-YYYY").format("DD.MMM"),
            fullStringDate: moment(key, "DD-MM-YYYY").format(
              "dddd, MMM DD, YYYY"
            ),
            price: prices[key].toFixed(2),
          });
        });
    }
    dispatch(priceHistoryLoaded(data));
  } catch (error) {
    dispatch(priceHistoryError(error));
  }
};
