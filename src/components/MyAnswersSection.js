import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { SectionLabel, SectionTitle, Answer } from './index';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ClickableWrapper = styled.button`
  display: flex;
  background: none;
  border: none;
  outline: none;
  justify-content: center;
  align-items: flex-end;
  &:hover {
    outline: none;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const StyledAnswer = styled(Answer)`
  margin-top: 12px;
  &:first-of-type {
    margin-top: 0;
  }
`;

const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default function MyAnswersSection({ answers }) {
  return (
    <Wrapper>
      <SectionHeader>
        <SectionTitle>My answers</SectionTitle>
        <ClickableWrapper>
          <SectionLabel>View answers</SectionLabel>
        </ClickableWrapper>
      </SectionHeader>
      <AnswerWrapper>
        {answers.map((a, index) => (
          <StyledAnswer key={index}>{a}</StyledAnswer>
        ))}
      </AnswerWrapper>
    </Wrapper>
  );
}

MyAnswersSection.propTypes = {
  answers: propTypes.arrayOf(propTypes.string)
};

MyAnswersSection.defaultProps = {
  answers: []
};
