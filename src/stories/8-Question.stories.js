import React from 'react';
import { action } from '@storybook/addon-actions';

import { Question } from '../components';

export default {
  title: 'Question'
};

export const basic = () => (
  <Question options={['Drink a cup of tea', 'Drink a beer']} />
);

export const answered = () => (
  <Question
    onSelectOption={(action('onSelectOption'))}
    optionSelected={0}
    options={['Drink a cup of tea', 'Drink a beer']}
  />
);
