import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { Poll, SectionTitle, Label } from './index';
import pollsIcon from '../icons/polls.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AlignedSectionTitle = styled(SectionTitle)`
  align-self: flex-start;
`;

const ViewPollsClickableWrapper = styled.button`
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

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PollsWrapper = styled.div`
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  padding: 4px;
`;

const StyledPoll = styled(Poll)`
  min-width: 200px;
`;

const PollClickableWrapper = styled.button`
  text-align: start;
  background: none;
  border: none;
  outline: none;
  padding: 0;
  &:hover {
    outline: none;
    cursor: pointer;
  }
  margin-left: 12px;
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
  margin: 0 12px;
  border-radius: 4px;
  min-height: 100px;
`;

const EmptyListTitle = styled.h4`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  margin: 0;
  color: #8a8a8a;
`;

const EmptyList = () => (
  <CenteredWrapper>
    <img src={pollsIcon} alt="Polls" />
    <EmptyListTitle>No polls found</EmptyListTitle>
  </CenteredWrapper>
);

export default function LatestPollsSection({
  polls,
  onClickViewPolls,
  onClickPoll
}) {
  const isEmpty = polls.length === 0;

  return (
    <Wrapper>
      <SectionHeader>
        <AlignedSectionTitle>Latest Polls</AlignedSectionTitle>
        <ViewPollsClickableWrapper onClick={onClickViewPolls}>
          <Label>View List</Label>
        </ViewPollsClickableWrapper>
      </SectionHeader>
      {isEmpty ? (
        <EmptyList />
      ) : (
        <PollsWrapper>
          {polls.map((p, index) => (
            <PollClickableWrapper key={index} onClick={() => onClickPoll(p)}>
              <StyledPoll {...p} />
            </PollClickableWrapper>
          ))}
        </PollsWrapper>
      )}
    </Wrapper>
  );
}

LatestPollsSection.propTypes = {
  polls: propTypes.arrayOf(propTypes.shape(Poll.propTypes)).isRequired,
  onClickViewPolls: propTypes.func
};

LatestPollsSection.defaultProps = {
  onClickViewPolls: () => {}
};
