import { Request } from "../request";

/**
 * Get the list of transactions with pagination
 * @param {Object} params
 * @param {number} params.page_size - Number of blocks in result. No more than 100
 * @param {number} parmas.page_index - Index of the page, start from 1
 * @param {string} params.hash - hash of transaction (Optional)
 * @param {number} params.height - height of transaction (Optional)
 * @param {string} params.from - sender address (Optional)
 * @param {string} params.to - receiver address (Optional)
 * @returns {Promise} - The response data
 */
function getTxList(params) {
  return Request.get("tx/list", { params });
}

/**
 * Get the number of transactions
 * @returns {Promise} - The response data
 */
function getTxCount() {
  return Request.get("tx/count");
}

/**
 * Get the number of transactions
 * @param {number} hash - hash of transaction (required)
 * @returns {Promise} - The response data
 */
function getTxByHash(hash) {
  return Request.get(`tx/${hash}`);
}

export default {
  getTxList,
  getTxCount,
  getTxByHash,
};
