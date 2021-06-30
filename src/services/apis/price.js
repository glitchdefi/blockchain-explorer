import { Request } from "../request";
import axios from "axios";

const COINGEKO_API_URL = process.env.REACT_APP_COINGECKO_URL;

/**
 * Get price history for 7 days
 * @returns {Promise} - The response data
 */
function getPriceHistory7Days() {
  return Request.get("price/history");
}

/**
 *  Get all glitch info (price, marketcap, total supply ...)
 * @returns {Promise} - The response data
 */
function getAllGlitchInfo() {
  return axios.get(
    `${COINGEKO_API_URL}api/v3/coins/markets?vs_currency=usd&ids=glitch-protocol&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );
}

/**
 * Get historical market data include price, market cap, and 24h volume
 * @returns {Promise} - The response data
 */
function getGlitchMarketData() {
  return axios.get(
    `${COINGEKO_API_URL}api/v3/coins/glitch-protocol/market_chart?vs_currency=usd&days=365&interval=daily`
  );
}

export default {
  getPriceHistory7Days,
  getAllGlitchInfo,
  getGlitchMarketData,
};
