import axios from "axios";
import { Request } from "../request";

const ZENDESK_URL = process.env.REACT_APP_ZEN_DESK;

/**
 * Search block by id
 * @param {Object} params
 * @param {number} params.term - address/txn/block id
 * @returns {Promise} - The response data
 */
function searchById(params) {
  return Request.get("search", { params });
}

/**
 *
 * @param {Object} data
 * @param {Object} data.requester
 * @param {string} data.subject
 * @param {Object} data.comment
 *
 * @returns {Promise} - The response data
 */
function createTicketOnZendesk(data) {
  return axios.post(`${ZENDESK_URL}api/v2/requests.json`, data);
}

export default { searchById, createTicketOnZendesk };
