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
  let profileIcons = {};

  try {
    // Get summoner data
    const summoners = await Promise.all(
      playerPuuids.map(async (puuid) => await summonerApi.byPuuid(puuid))
    );

    // Get profile icon images
    const profileIconIds = _.uniq(summoners.map((s) => s.profileIconId));
    await Promise.all(
      profileIconIds.map(async (profileIconId) => {
        profileIcons[profileIconId] = await profileIconApi.png(profileIconId);
      })
    );

    res.status(200).json({ status: 200, data: { message: 'team', summoners, profileIcons } });
  } catch (err) {
    logger.error(JSON.stringify(err));
    next(err);
  }
});

module.exports = router;
