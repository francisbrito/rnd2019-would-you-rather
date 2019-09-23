import React from 'react';
import * as uuid from 'uuid';

import { action } from '@storybook/addon-actions';

import ChooseProfileButton from '../components/ChooseProfileButton';

export default {
  title: 'Choose Profile Button'
};

const defaultProfile = {
  id: uuid.v4(),
  playerName: 'Guest User',
  playerPicture: 'https://placekittem.com/300'
};

export const basic = () => (
  <ChooseProfileButton defaultProfile={defaultProfile} />
);

const savedProfiles = [
  {
    id: uuid.v4(),
    playerName: 'Francis Brito',
    playerPicture: 'https://placekittem.com/300'
  }
];
export const withSavedProfiles = () => (
  <ChooseProfileButton
    defaultProfile={defaultProfile}
    savedProfiles={savedProfiles}
  />
);
