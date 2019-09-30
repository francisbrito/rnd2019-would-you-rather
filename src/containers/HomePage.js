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
import { FloatingAddQuestionButton, withHeader } from './index';

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
      <LatestPollsSection
        polls={latestPolls}
        onClickPoll={onOpenPoll}
        onClickViewPolls={onOpenPolls}
      />
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
  topPlayers: state.topPlayers,
  latestPolls: state.latestPolls,
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
    history.push(`/polls/${poll.id}`);
  },
  onOpenLeaderboard: () => {
    history.push('/leaderboard');
  },
  onOpenPolls: () => {
    history.push('/polls');
  }
});

export default withHeader(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
);
