import React from 'react';

import { Poll } from '../components';

export default {
  title: 'Poll'
};

export const basic = () => (
  <Poll
    options={['Drink a cup of wine', 'Drink a cup of tea']}
    createdBy="Amelia Jean"
    creationDate={Date.now() - 1000 * 60}
  />
);

export const withoutCreationDate = () => (
  <Poll
    options={['Drink a cup of wine', 'Drink a cup of tea']}
    createdBy="Amelia Jean"
  />
);
