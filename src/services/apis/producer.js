import { Request } from "../request";
/**
 * Get producer list
 * @returns {Promise} - The response data
 */
function getProducerList(params) {
  return Request.get("validator/list", { params });
}

export default {
  getProducerList,
};
