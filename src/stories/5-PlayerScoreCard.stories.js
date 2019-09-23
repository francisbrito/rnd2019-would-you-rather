import React from 'react';

import { PlayerScoreCard } from '../components';

export default {
  title: 'Player Score Card'
};

export const basic = () => (
  <PlayerScoreCard
    pollsCreated={8}
    pollsAnswered={8}
    playerName="Agatha Wilkins"
    playerPicture="https://placekitten.com/300/300"
  />
);
