import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as propTypes from 'prop-types';
import * as r from 'ramda';

import { selectPollAction } from '../actions';

import {
  LatestPollsSection,
  TopPlayersSection,
  MyAnswersSection
} from '../components';
import { useHeader } from '../hooks';
import {
  FloatingAddQuestionButton,
  withHeader,
  ConnectedPollsList
} from './index';

const Wrapper = styled.div`
  padding: 0 24px 24px 24px;
`;

function HomePage({
  topPlayers,
  latestPolls,
  onOpenPoll,
  currentUserAnswers,
  onOpenLeaderboard,
  onOpenPolls,
  history
}) {
  useHeader('Home');

  return (
    <Wrapper>
      <TopPlayersSection
        players={topPlayers}
        onClickOpenLeaderboard={onOpenLeaderboard}
      />
      <ConnectedPollsList history={history} />
      <FloatingAddQuestionButton history={history} />
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
  onOpenPoll: propTypes.func,
  onOpenLeaderboard: propTypes.func,
  onOpenPolls: propTypes.func
};

const mapStateToProps = state => ({
  topPlayers: state.topPlayers.map(tp => ({
    ...tp,
    createdBy: state.authentication.savedProfiles[tp.id]
  })),
  latestPolls: state.latestPolls.map(lp => ({
    ...lp,
    createdBy: state.authentication.savedProfiles[lp.createdBy]
  })),
  currentUserAnswers: r.pipe(
    r.prop('answers'),
    r.filter(r.propEq('userId', state.authentication.selectedProfile)),
    r.sort(r.descend(r.prop('creationDate'))),
    r.map(r.prop('answer'))
  )(state)
});

const mapDispatchToProps = (dispatch, { history }) => ({
  onOpenPoll: poll => {
    dispatch(selectPollAction(poll.id));
    history.push(`/questions/${poll.id}`);
  },
  onOpenLeaderboard: () => {
    history.push('/leaderboard');
  },
  onOpenPolls: () => {
    history.push('/questions');
  }
});

export default withHeader(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
);
