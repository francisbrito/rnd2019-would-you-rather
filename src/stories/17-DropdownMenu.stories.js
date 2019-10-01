import React from 'react';
import { action } from '@storybook/addon-actions';

import { DropdownMenu } from '../components';

export default {
  title: 'DropdownMenu'
};

export const basic = () => (
  <DropdownMenu
    items={[
      { label: 'Item A', onClick: action('Item A clicked') },
      { label: 'Item B', onClick: action('Item B clicked') },
      { label: 'Item C', onClick: action('Item C clicked') }
    ]}
    ToggleComponent={props => <button {...props}>Toggle</button>}
  />
);
