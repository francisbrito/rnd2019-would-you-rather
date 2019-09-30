import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { PollList, Poll, SectionTitle, SectionLabel } from './index';

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
          <SectionLabel>See more</SectionLabel>
        </ViewPollsClickableWrapper>
      </SectionHeader>
      <PollList polls={polls} onClickPoll={onClickPoll} isHorizontal />
    </Wrapper>
  );
}

LatestPollsSection.propTypes = {
  polls: propTypes.arrayOf(propTypes.shape(Poll.propTypes)).isRequired,
  onClickViewPolls: propTypes.func,
  onClickPoll: propTypes.func
};

LatestPollsSection.defaultProps = {
  onClickViewPolls: () => {},
  onClickPoll: () => {}
};
