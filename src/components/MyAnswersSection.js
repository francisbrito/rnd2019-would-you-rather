import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { SectionTitle, Answer } from './index';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
