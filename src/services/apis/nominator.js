import { Request } from "../request";

/**
 * Get the list of nominator with pagination
 * @param {Object} params
 * @param {number} params.page_size - Number of blocks in result. No more than 100
 * @param {number} parmas.page_index - Index of the page, start from 1
 * @returns {Promise} - The response data
 */
function getNominatorList(params) {
  return Request.get("nominator/list", { params });
}

export default {
  getNominatorList,
};
