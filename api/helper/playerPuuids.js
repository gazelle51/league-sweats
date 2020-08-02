function getPlayerPuuids() {
  return [
    process.env.PLAYER_1_PUUID,
    process.env.PLAYER_2_PUUID,
    process.env.PLAYER_3_PUUID,
    process.env.PLAYER_4_PUUID,
    process.env.PLAYER_5_PUUID,
  ];
}

module.exports = getPlayerPuuids;
