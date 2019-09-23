import React from 'react';
import { action } from '@storybook/addon-actions';

import { QuestionInput } from '../components';

export default {
  title: 'QuestionInput'
};

export const basic = () => <QuestionInput />;
export const withOnChangeHandler = () => (
  <QuestionInput onChange={action('onChange')} />
);
export const withPlaceholder = () => <QuestionInput placeholder="Option A" />;
