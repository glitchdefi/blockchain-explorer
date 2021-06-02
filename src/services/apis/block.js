import { Request } from "../request";

/**
 * Get the list of blocks with pagination
 * @param {Object} params
 * @param {number} params.page_size - Number of blocks in result. No more than 100
 * @param {number} parmas.page_index - Index of the page, start from 1
 * @returns {Promise} - The response data
 */
function getBlockList(params) {
  return Request.get("block/list", { params });
}

/**
 * Get the number of blocks
 * @returns {Promise} - The response data
 */
function getBlockCount() {
  return Request.get("block/count");
}

/**
 * Get a block information by height
 * @param {number} height - block's height
 * @returns {Promise} - The response data
 */
function getBlockByHeight(height) {
  return Request.get(`block/${height}`);
}

/**
 *
 */
function getHeadBlockNumber() {
  return Request.get("block/head_block_number");
}

export default {
  getBlockList,
  getBlockCount,
  getBlockByHeight,
  getHeadBlockNumber,
};
