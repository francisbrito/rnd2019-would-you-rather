import React from 'react';
import { action } from '@storybook/addon-actions';

import { HeaderDropdownMenu } from '../components';

export default {
  title: 'HeaderDropdownMenu'
};

export const basic = () => (
  <HeaderDropdownMenu
    currentUser={{
      playerName: 'Guest',
      playerPicture: 'https://placekitten.com/300'
    }}
    onLogOut={action('onLogOut')}
  />
);
