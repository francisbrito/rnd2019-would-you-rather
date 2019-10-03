import React from 'react';
import * as propTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as r from 'ramda';
import { selectPollAction } from '../actions';

import { Poll, PollList } from '../components';
import { useHeader } from '../hooks';
import { FloatingAddQuestionButton, withHeader } from './index';

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

function PollsPage({ polls, onOpenPoll, history }) {
  useHeader('Polls');

  return (
    <Wrapper>
      <PollList polls={polls} onClickPoll={onOpenPoll} />
      <FloatingAddQuestionButton history={history} />
    </Wrapper>
  );
}

const mapStateToProps = ({ polls, authentication }) => ({
  polls: r.pipe(
    r.prop('all'),
    r.values,
    r.sort(r.descend(r.prop('creationDate'))),
    r.map(
      r.evolve({
        createdBy: id => authentication.savedProfiles[id]
      })
    )
  )(polls)
});

const mapDispatchToProps = (dispatch, { history }) => ({
  onOpenPoll: poll => {
    dispatch(selectPollAction(poll.id));
    history.push(`/questions/${poll.id}`);
  },
  onAddNewPoll: () => {}
});

export default withHeader(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PollsPage)
);
