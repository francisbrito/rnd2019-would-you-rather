import React from 'react';
import faker from 'faker';
import { action } from '@storybook/addon-actions';

import { LatestPollsSection } from '../components';

export default {
  title: 'Latest Polls Section'
};

const polls = Array.from(new Array(20)).map(() => ({
  options: ['Option A', 'Option B'],
  createdBy: `${faker.name.firstName()} ${faker.name.lastName()}`,
  creationDate: Date.now() - 1000 * faker.random.number()
}));

export const basic = () => (
  <LatestPollsSection
    polls={polls}
    onClickPoll={action('onClickPoll')}
    onClickViewPolls={action('onClickViewPolls')}
  />
);
