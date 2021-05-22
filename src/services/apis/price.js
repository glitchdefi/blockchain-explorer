import { Request } from "../request";
/**
 * Get price history for 7 days
 * @returns {Promise} - The response data
 */
function getPriceHistory7Days() {
  return Request.get("price/history");
}

export default {
  getPriceHistory7Days,
};
