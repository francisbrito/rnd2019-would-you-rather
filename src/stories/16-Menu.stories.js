import React from 'react';
import { action } from '@storybook/addon-actions';

import { Menu } from '../components';

export default {
  title: 'Menu'
};

export const basic = () => (
  <Menu
    items={[
      { label: 'Item A', onClick: action('Item A clicked') },
      { label: 'Item B', onClick: action('Item B clicked') },
      { label: 'Item C', onClick: action('Item C clicked') }
    ]}
  />
);

export const withCustomComponents = () => (
  <Menu
    items={[
      {
        component: () => (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              alt="Item"
              src="https://placekitten.com/300"
              style={{ height: 24, width: 24, borderRadius: 24 }}
            />
            <span
              style={{
                marginLeft: 12,
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              Guest
            </span>
          </div>
        ),
        onClick: action('Item A clicked')
      },
      { label: 'Item B', onClick: action('Item B clicked') },
      { label: 'Item C', onClick: action('Item C clicked') }
    ]}
  />
);
