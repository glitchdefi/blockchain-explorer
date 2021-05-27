import { Request } from "../request";

/**
 * Search block by id
 * @param {Object} params
 * @param {number} params.term - address/txn/block id
 * @returns {Promise} - The response data
 */
function searchById(params) {
  return Request.get("search", { params });
}

export default { searchById };
