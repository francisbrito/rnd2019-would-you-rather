import React from 'react';

import { action } from '@storybook/addon-actions';

import { Header } from '../components';

export default {
  title: 'Header'
};

export const basic = () => (
  <Header
    title="Header"
    user={{
      playerPicture: 'https://placekitten.com/301',
      playerName: 'Mittens'
    }}
  />
);
