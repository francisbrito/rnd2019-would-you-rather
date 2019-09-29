import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as propTypes from 'prop-types';
import { selectPollAction } from '../actions';

import {
  AddQuestionButton,
  LatestPollsSection,
  TopPlayersSection,
  MyAnswersSection
} from '../components';
import { useHeader } from '../hooks';
import { withHeader } from './index';

const Wrapper = styled.div`
  padding: 0 24px 24px 24px;
`;

const FloatingAddQuestionButton = styled(AddQuestionButton)`
  position: absolute;
  bottom: 24px;
  right: 24px;
`;

function HomePage({
  topPlayers,
  latestPolls,
  onOpenPoll,
  onAddNewPoll,
  currentUserAnswers
}) {
  useHeader('Home');

  return (
    <Wrapper>
      <TopPlayersSection players={topPlayers} />
      <LatestPollsSection polls={latestPolls} onClickPoll={onOpenPoll} />
      <FloatingAddQuestionButton onClick={onAddNewPoll} />
      <MyAnswersSection answers={currentUserAnswers} />
    </Wrapper>
  );
}

HomePage.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired
  }),
  topPlayers: TopPlayersSection.propTypes.players,
  latestPolls: LatestPollsSection.propTypes.polls,
  onAddNewPoll: propTypes.func,
  onOpenPoll: propTypes.func
};

const mapStateToProps = state => ({
  topPlayers: state.topPlayers,
  latestPolls: state.latestPolls,
  currentUserAnswers: state.answers
    .filter(a => a.userId === state.authentication.selectedProfile)
    .map(a => a.answer)
});

const mapDispatchToProps = (dispatch, { history }) => ({
  onAddNewPoll: () => {
    history.push('/polls/new');
  },
  onOpenPoll: poll => {
    dispatch(selectPollAction(poll.id));
    history.push(`/polls/${poll.id}`);
  }
});

export default withHeader(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
);
