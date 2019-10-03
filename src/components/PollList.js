import React, { Fragment } from 'react';
import * as propTypes from 'prop-types';
import styled from 'styled-components';

import pollsIcon from '../icons/polls.svg';

import { HorizontalList, Poll, Title } from './index';

const VerticalList = styled.div`
  display: flex;
  flex-direction: column;
`;

const VerticalPollClickableWrapper = styled.button`
  text-align: start;
  background: none;
  border: none;
  outline: none;
  padding: 0;
  margin-top: 12px;
  &:hover {
    outline: none;
    cursor: pointer;
  }
  &:first-of-type {
    margin-top: 0;
  }
`;

const HorizontalPollClickableWrapper = styled.button`
  text-align: start;
  background: none;
  border: none;
  outline: none;
  padding: 0;
  margin-left: 12px;
  &:hover {
    outline: none;
    cursor: pointer;
  }
  &:first-of-type {
    margin-left: 0;
  }
`;

const CenteredWrapper = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: rgba(187, 187, 187, 0.1);
  border-radius: 4px;
  min-height: 100px;
`;

const HorizontallyStyledPoll = styled(Poll)`
  min-width: 200px;

  &:first-child {
    margin-top: 0;
  }
`;

const VerticallyStyledPoll = styled(Poll)`
  display: flex;
`;

const EmptyList = () => (
  <CenteredWrapper>
    <img src={pollsIcon} alt="Polls" />
    <Title>No polls found</Title>
  </CenteredWrapper>
);

function PollList({ polls, onClickPoll, isHorizontal }) {
  const isEmpty = polls.length === 0;

  return (
    <Fragment>
      {isEmpty ? (
        <EmptyList />
      ) : isHorizontal ? (
        <HorizontalList>
          {polls.map((p, index) => (
            <HorizontalPollClickableWrapper key={index} onClick={() => onClickPoll(p)}>
              <HorizontallyStyledPoll {...p} />
            </HorizontalPollClickableWrapper>
          ))}
        </HorizontalList>
      ) : (
        <VerticalList>
          {polls.map((p, index) => (
            <VerticalPollClickableWrapper key={index} onClick={() => onClickPoll(p)}>
              <VerticallyStyledPoll {...p} />
            </VerticalPollClickableWrapper>
          ))}
        </VerticalList>
      )}
    </Fragment>
  );
}

PollList.propTypes = {
  polls: propTypes.arrayOf(propTypes.shape(Poll.propTypes)).isRequired,
  onClickPoll: propTypes.func,
  isHorizontal: propTypes.bool
};

PollList.defaultProps = {
  onClickPoll: () => {},
  isHorizontal: false
};

export default PollList;
