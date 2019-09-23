import React from 'react';
import faker from 'faker';
import { action } from '@storybook/addon-actions';

import { TopPlayersSection } from '../components';

export default {
  title: 'Top Players Section'
};

const players = Array.from(new Array(20)).map(() => ({
  playerName: `${faker.name.firstName()} ${faker.name.lastName()}`,
  playerPicture: faker.image.avatar()
}));

export const basic = () => (
  <TopPlayersSection
    players={players}
    onClickViewScoreboard={action('onClickViewScoreboard')}
  />
);

export const empty = () => (
  <TopPlayersSection
    players={[]}
    onClickViewScoreboard={action('onClickViewScoreboard')}
  />
);
