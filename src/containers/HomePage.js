import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as propTypes from 'prop-types';
import { selectPollAction } from '../actions';

import {
  AddQuestionButton,
  LatestPollsSection,
  TopPlayersSection
} from '../components';

const Wrapper = styled.div`
  padding: 12px;
`;

const FloatingAddQuestionButton = styled(AddQuestionButton)`
  position: absolute;
  bottom: 24px;
  right: 24px;
`;

function HomePage({ topPlayers, latestPolls, onOpenPoll, onAddNewPoll }) {
  return (
    <Wrapper>
      <TopPlayersSection players={topPlayers} />
      <LatestPollsSection polls={latestPolls} onClickPoll={onOpenPoll} />
      <FloatingAddQuestionButton onClick={onAddNewPoll} />
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
  latestPolls: state.latestPolls
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
