var express = require('express');
var router = express.Router();

const _ = require('lodash');
const getPlayerPuuids = require('../../helper/playerPuuids');
const logger = require('../../config/logger');
const profileIconApi = require('../../services/dataDragon/profileIcon');
const summonerApi = require('../../services/riotGames/summoner');

/* GET team. */
router.get('/', async function (req, res, next) {
  const playerPuuids = getPlayerPuuids();
  let summoners = [];

  try {
    // Get summoner data
    await Promise.all(
      playerPuuids.map(async (puuid) => {
        const summoner = await summonerApi.byPuuid(puuid);
        if (summoner) summoners.push(summoner);
      })
    );

    // Get profile icon URLs
    summoners.forEach((summoner) => {
      summoner.profileIcon = profileIconApi.pngUrl(summoner.profileIconId);
    });

    res.status(200).json({ status: 200, data: { summoners } });
  } catch (err) {
    logger.error(JSON.stringify(err));
    next(err);
  }
});

module.exports = router;
