import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as propTypes from 'prop-types';

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
  topPlayers: propTypes.shape(TopPlayersSection.propTypes),
  latestPolls: propTypes.shape(LatestPollsSection.propTypes),
  onAddNewPoll: propTypes.func,
  onOpenPoll: propTypes.func
};

const mapStateToProps = (state, { history }) => ({
  topPlayers: state.topPlayers,
  latestPolls: state.latestPolls,
  onAddNewPoll: () => history.push('/polls/new'),
  onOpenPoll: id => history.push(`/polls/${id}`)
});

export default connect(mapStateToProps)(HomePage);
