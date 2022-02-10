import { Request } from "../request";

/**
 * Get the list of address with pagination
 * @param {Object} params
 * @param {number} params.page_size - Number of blocks in result. No more than 100
 * @param {number} parmas.page_index - Index of the page, start from 1
 * @returns {Promise} - The response data
 */
function getAddressList(params) {
  return Request.get("address/list", { params });
}

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
  return Request.get(`address/${address}/tx`, { params });
}

/**
 *
 */
function getBalanceTransferByAddress(address, params) {
  return Request.get(`address/${address}/balance_tx`, { params });
}

/**
 *
 */
function getBalanceHistoryByAddress(address) {
  return Request.get(`address/${address}/balance_history`);
}

export default {
  getAddressList,
  getAddressDetails,
  getTxsByAddress,
  getBalanceTransferByAddress,
  getBalanceHistoryByAddress,
};
