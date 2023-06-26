import { Request } from "../request";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

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
    `${BASE_URL}coins/markets`
  );
}

/**
 * Get historical market data include price, market cap, and 24h volume
 * @returns {Promise} - The response data
 */
function getGlitchMarketData() {
  return axios.get(
    `${BASE_URL}coins/market_chart`
  );
}

export default {
  getPriceHistory7Days,
  getAllGlitchInfo,
  getGlitchMarketData,
};
