var express = require('express');
var router = express.Router();

const getPlayerPuuids = require('../../helper/playerPuuids');
const logger = require('../../config/logger');
const summonerApi = require('../../services/riotGames/summoner');

/* GET team. */
router.get('/', async function (req, res, next) {
  const playerPuuids = getPlayerPuuids();

  try {
    const summoners = await Promise.all(
      playerPuuids.map(async (puuid) => await summonerApi.byPuuid(puuid))
    );

    res.status(200).json({ status: 200, data: { message: 'team', summoners, profileIcons: [] } });
  } catch (err) {
    logger.error(JSON.stringify(err));
    next(err);
  }
});

module.exports = router;
