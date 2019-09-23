import React from 'react';
import { action } from '@storybook/addon-actions';

import { AddQuestionButton } from '../components';

export default {
  title: 'AddQuestionButton'
};

export const basic = () => <AddQuestionButton onClick={action('onClick')} />;
