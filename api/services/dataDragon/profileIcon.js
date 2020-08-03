const dataDragon = require('./dataDragon');
const logger = require('../../config/logger');

/**
 * Get a list of all summoner icon data.
 */
async function all() {
  try {
    const apiClient = dataDragon.createApiClient();
    const res = await apiClient.get(`/data/en_AU/profileicon.json`);
    return res.data;
  } catch (err) {
    logger.error(err.message);
  }
}

/**
 * Get a summoner icon PNG by it's ID.
 * @param {string} id
 */
async function png(id) {
  try {
    const apiClient = dataDragon.createApiClient();
    const res = await apiClient.get(`/img/profileicon/${id}.png`);
    return res.data;
  } catch (err) {
    logger.error(err.message);
  }
}

/**
 * Get the URL for a summoner icon PNG by it's ID.
 * @param {string} id
 */
function pngUrl(id) {
  return `${process.env.DDRAGON_API_URL}/img/profileicon/${id}.png`;
}

module.exports = { all, png, pngUrl };
