import React from 'react';
import * as propTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as r from 'ramda';
import { selectPollAction } from '../actions';

import { Poll, PollList } from '../components';
import { useHeader } from '../hooks';
import { withHeader } from './index';

PollsPage.propTypes = {
  polls: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      ...Poll.propTypes
    })
  ),
  onOpenPoll: propTypes.func
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const StyledPoll = styled(Poll)`
  margin-top: 12px;

  &:first-of-type {
    margin-top: 0;
  }
`;

function PollsPage({ polls, onOpenPoll }) {
  useHeader('Polls');

  return (
    <Wrapper>
      <PollList polls={polls} onClickPoll={onOpenPoll} />
    </Wrapper>
  );
}

const mapStateToProps = ({ polls }) => ({
  polls: r.pipe(
    r.prop('all'),
    r.values,
    r.sort(r.descend(r.prop('creationDate')))
  )(polls)
});

const mapDispatchToProps = (dispatch, { history }) => ({
  onOpenPoll: poll => {
    dispatch(selectPollAction(poll.id));
    history.push(`/polls/${poll.id}`);
  }
});

export default withHeader(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PollsPage)
);
