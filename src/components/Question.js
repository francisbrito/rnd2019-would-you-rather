import React, { Fragment } from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { Card } from './index';
import circleCheckIcon from '../icons/circle-check.svg';

const QuestionOption = styled(Card)`
  background-color: ${({ isSelected }) =>
    isSelected ? 'rgba(85, 176, 0, .3)' : 'transparent'};
`;

const Text = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  font-weight: lighter;
`;

const QuestionOptionClickableContainer = styled.button`
  padding: 12px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  min-height: 235px;
  width: 100%;
  transition: all 100ms ease-in-out;
  &:hover {
    transform: scale(0.9);
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 24px;
  right: 24px;
`;

export default function Question({ options, optionSelected, onSelectOption }) {
  return (
    <Fragment>
      {options.map((option, index) => (
        <QuestionOption isSelected={index === optionSelected} key={index}>
          {index === optionSelected && <Icon src={circleCheckIcon} />}
          <QuestionOptionClickableContainer onClick={onSelectOption}>
            <Text>{option}?</Text>
          </QuestionOptionClickableContainer>
        </QuestionOption>
      ))}
    </Fragment>
  );
}

Question.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  optionSelected: propTypes.number,
  onSelectOption: propTypes.func
};

Question.defaultProps = {
  onSelectOption: () => {}
};
