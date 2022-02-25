import { Request } from "../request";

/**
 * Get the list of address with pagination
 * @param {Object} params
 * @param {number} params.page_size - Number of blocks in result. No more than 100
 * @param {number} parmas.page_index - Index of the page, start from 1
 * @returns {Promise} - The response data
 */
function getValidatorList(params) {
  return Request.get("validator/list", { params });
}

export default {
  getValidatorList,
};
