const ApiClient = require('../../config/apiClient').ApiClient;

/**
 * Create a Data Dragon API client.
 */
function createApiClient() {
  return new ApiClient(process.env.DDRAGON_API_URL, {});
}

module.exports = { createApiClient };
