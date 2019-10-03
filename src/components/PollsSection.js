import React, { Fragment } from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { SectionTitle, FilterToggle, PollList } from './index';

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
`;

const FilterWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 6px;
  display: flex;
  height: 100%;
  margin-left: auto;
`;

function PollsSection({ polls, selectedFilter, onChangeFilter, onClickPoll }) {
  return (
    <Fragment>
      <SectionHeader>
        <SectionTitle>Polls</SectionTitle>
        <FilterWrapper>
          <FilterToggle
            isActive={selectedFilter === 'UNANSWERED'}
            onToggle={() => onChangeFilter('UNANSWERED')}
          >
            Pending
          </FilterToggle>
          <FilterToggle
            isActive={selectedFilter === 'ANSWERED'}
            onToggle={() => onChangeFilter('ANSWERED')}
          >
            Answered
          </FilterToggle>
        </FilterWrapper>
      </SectionHeader>
      <PollList polls={polls} onClickPoll={onClickPoll} isHorizontal />
    </Fragment>
  );
}

PollsSection.propTypes = {
  selectedFilter: propTypes.oneOf(['ALL', 'ANSWERED', 'UNANSWERED']),
  onChangeFilter: propTypes.func,
  onClickPoll: propTypes.func
};

PollsSection.defaultProps = {
  selectedFilter: 'ALL',
  onChangeFilter: () => {},
  onClickPoll: () => {}
};

export default PollsSection;
