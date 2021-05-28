import { isEmpty } from "lodash";
import moment from "moment";
import PriceApis from "src/services/apis/price";
import { formatDollarAmount } from "src/utils/numbers";
import {
  loadPriceHistory,
  priceHistoryLoaded,
  priceHistoryError,
  loadAllGlitchInfo,
  allGlitchInfoLoaded,
  allGlitchInfoError,
  loadGlitchMarketData,
  glitchMarketDataLoaded,
  glitchMarketDataError,
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
            price: prices[key],
          });
        });
    }
    dispatch(priceHistoryLoaded(data));
  } catch (error) {
    dispatch(priceHistoryError(error));
  }
};

/**
 *
 */
export const fetchAllGlitchInfo = () => async (dispatch) => {
  try {
    dispatch(loadAllGlitchInfo());
    const res = await PriceApis.getAllGlitchInfo();
    dispatch(allGlitchInfoLoaded(!isEmpty(res.data) ? res.data[0] : null));
  } catch (error) {
    dispatch(allGlitchInfoError(error));
  }
};

/**
 *
 */
export const fetchGlitchMarketData = () => async (dispatch) => {
  try {
    dispatch(loadGlitchMarketData());
    const res = await PriceApis.getGlitchMarketData();

    let data = {};

    if (res?.data) {
      Object.keys(res.data).map((key) => {
        if (res.data[key]?.length) {
          data[key] = res.data[key].map((o, i) => {
            return {
              date: moment(o[0]).format("DD.MMM"),
              fullStringDate: moment(o[0]).format("dddd, MMM DD, YYYY"),
              cap: o[1],
              avgPrice: formatDollarAmount(res.data.prices[i][1]),
            };
          });
        }
      });
    }

    dispatch(glitchMarketDataLoaded(data));
  } catch (error) {
    dispatch(glitchMarketDataError(error));
  }
};
