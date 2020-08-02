const ApiClient = require('../../config/apiClient').ApiClient;

/**
 * Create a Riot Games API client.
 */
function createApiClient() {
  return new ApiClient(process.env.RG_API_URL, {
    'X-Riot-Token': process.env.RG_API_KEY,
  });
}

module.exports = { createApiClient };
