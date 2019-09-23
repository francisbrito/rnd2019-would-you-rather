import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { Poll, SectionTitle, Label } from './index';

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

export default function LatestPollsSection({
  polls,
  onClickViewPolls,
  onClickPoll
}) {
  return (
    <Wrapper>
      <SectionHeader>
        <AlignedSectionTitle>Latest Polls</AlignedSectionTitle>
        <ViewPollsClickableWrapper onClick={onClickViewPolls}>
          <Label>View List</Label>
        </ViewPollsClickableWrapper>
      </SectionHeader>
      <PollsWrapper>
        {polls.map((p, index) => (
          <PollClickableWrapper key={index} onClick={() => onClickPoll(p)}>
            <StyledPoll {...p} />
          </PollClickableWrapper>
        ))}
      </PollsWrapper>
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
