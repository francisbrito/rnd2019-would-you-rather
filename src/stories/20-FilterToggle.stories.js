import React from 'react';
import { action } from '@storybook/addon-actions';

import { FilterToggle } from '../components';

export default {
  title: 'FilterToggle'
};

export const basic = () => (
  <FilterToggle onToggle={action('onToggle')}>Filter</FilterToggle>
);

export const activated = () => (
  <FilterToggle isActive={true} onToggle={action('onToggle')}>
    Filter
  </FilterToggle>
);
