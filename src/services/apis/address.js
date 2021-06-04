import { Request } from "../request";
/**
 * Get address details
 * @returns {Promise} - The response data
 */
function getAddressDetails(address) {
  return Request.get(`address/${address}`);
}

/**
 *
 */
function getTxsByAddress(address, params) {
  return Request.get(`producer/${address}/tx_list`, { params });
}

export default {
  getAddressDetails,
  getTxsByAddress,
};