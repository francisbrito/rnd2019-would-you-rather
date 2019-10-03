import { action } from '@storybook/addon-actions';
import faker from 'faker';
import React, { useState } from 'react';

import { PollsSection } from '../components';

export default {
  title: 'PollsSection'
};

const polls = Array.from(new Array(20)).map(() => ({
  options: ['Option A', 'Option B'],
  createdBy: {
    playerPicture: faker.image,
    playerName: `${faker.name.firstName()} ${faker.name.lastName()}`
  },
  creationDate: Date.now() - 1000 * faker.random.number()
}));

function Basic() {
  const [selectedFilter, setFilter] = useState('ALL');

  return (
    <PollsSection
      polls={polls}
      selectedFilter={selectedFilter}
      onChangeFilter={filter => {
        action('onChangeFilter');
        setFilter(filter);
      }}
    />
  );
}

export const basic = () => <Basic />;
