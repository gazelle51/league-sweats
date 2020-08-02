const logger = require('../../config/logger');
const riotGames = require('./riotGames');

/**
 * Get a summoner by account ID.
 * @param {string} accountId
 */
async function byAccountId(accountId) {
  try {
    const apiClient = riotGames.createApiClient();
    const res = await apiClient.get(`/lol/summoner/v4/summoners/by-account/${accountId}`);
    return res.data;
  } catch (err) {
    logger.error(err.message);
  }
}

/**
 * Get a summoner by summoner name.
 * @param {string} summonerName
 */
async function bySummonerName(summonerName) {
  try {
    const apiClient = riotGames.createApiClient();
    const res = await apiClient.get(`/lol/summoner/v4/summoners/by-name/${summonerName}`);
    return res.data;
  } catch (err) {
    logger.error(err.message);
  }
}

/**
 * Get a summoner by PUUID.
 * @param {string} puuid
 */
async function byPuuid(puuid) {
  try {
    const apiClient = riotGames.createApiClient();
    const res = await apiClient.get(`/lol/summoner/v4/summoners/by-puuid/${puuid}`);
    return res.data;
  } catch (err) {
    logger.error(err.message);
  }
}

/**
 * Get a summoner by summoner ID.
 * @param {string} summonerId
 */
async function bySummonerId(summonerId) {
  try {
    const apiClient = riotGames.createApiClient();
    const res = await apiClient.get(`/lol/summoner/v4/summoners/${summonerId}`);
    return res.data;
  } catch (err) {
    logger.error(err.message);
  }
}

module.exports = { byAccountId, bySummonerName, byPuuid, bySummonerId };
