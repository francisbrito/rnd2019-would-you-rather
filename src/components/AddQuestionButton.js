import React from 'react';
import * as propTypes from 'prop-types';

import addIcon from '../icons/add.svg';
import { FloatingActionButton } from './index';

export default function AddQuestionButton({ className, onClick }) {
  return (
    <FloatingActionButton
      className={className}
      icon={addIcon}
      onClick={onClick}
    />
  );
}

AddQuestionButton.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string
};

AddQuestionButton.defaultProps = {
  onClick: () => {}
};
