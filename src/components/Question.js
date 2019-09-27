import React, { Fragment } from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { Card, InputCardSeparator } from './index';

import circleCheckIcon from '../icons/circle-check.svg';

const QuestionOption = styled(Card)`
  background-color: ${({ isSelected }) =>
    isSelected ? 'rgba(85, 176, 0, .3)' : 'transparent'};
  position: relative;
`;

const Text = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  font-weight: lighter;
`;

const QuestionOptionClickableContainer = styled.button`
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
  top: 12px;
  right: 12px;
`;

const Separator = styled(InputCardSeparator)`
  margin-bottom: 12px;
`;

export default function Question({ options, optionSelected, onSelectOption }) {
  const [option1, option2] = options;
  const isOption1Selected = optionSelected === 0;
  const isOption2Selected = optionSelected === 1;
  const isAnswered = isOption1Selected || isOption2Selected;

  return (
    <Fragment>
      <QuestionOption isSelected={isOption1Selected}>
        {isOption1Selected && <Icon src={circleCheckIcon} />}
        <QuestionOptionClickableContainer
          onClick={() => onSelectOption(0)}
          disabled={isAnswered}
        >
          <Text>{option1}?</Text>
        </QuestionOptionClickableContainer>
      </QuestionOption>
      <Separator />
      <QuestionOption isSelected={isOption2Selected}>
        {isOption2Selected && <Icon src={circleCheckIcon} />}
        <QuestionOptionClickableContainer
          onClick={() => onSelectOption(1)}
          disabled={isAnswered}
        >
          <Text>{option2}?</Text>
        </QuestionOptionClickableContainer>
      </QuestionOption>
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
