import { Request } from "../request";

/**
 * Get dashboard data (Active account ...)
 * @returns {Promise} - The response data
 */
function getDashboardData() {
  return Request.get("dashboard");
}

/**
 * Get dashboard data (Daily data ...)
 * @returns {Promise} - The response data
 */
function getDashboardDailyData() {
  return Request.get("dashboard/daily");
}

export default {
  getDashboardData,
  getDashboardDailyData,
};
