import React from 'react';
import { action } from '@storybook/addon-actions';

import { SelectProfileDropdownMenu } from '../components';

export default {
  title: 'SelectProfileDropdownMenu'
};

const profiles = [{ playerName: "Francis Brito" }];

export const basic = () => <SelectProfileDropdownMenu profiles={profiles} />;
