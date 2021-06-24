import { Request } from "../request";

/**
 * Get producer list
 * @returns {Promise} - The response data
 */
function getProducerList(params) {
  return Request.get("producer/list", { params });
}

/**
 * Get producer name
 * @returns {Promise} - The response data
 */
function getProducerName() {
  return Request.get("producer/producing_producer");
}

/**
 * Get producer details
 * @returns {Promise} - The response data
 */
function getProducerDetails(address) {
  return Request.get(`producer/${address}`);
}

export default {
  getProducerList,
  getProducerName,
  getProducerDetails,
};
