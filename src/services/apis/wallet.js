import { Request } from "../request";
/**
 * Get wallet count
 * @returns {Promise} - The response data
 */
function getWalletCount() {
  return Request.get("wallet/count");
}

export default {
  getWalletCount,
};
