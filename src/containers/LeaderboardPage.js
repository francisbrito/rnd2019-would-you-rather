import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';
import { connect } from 'react-redux';
import * as r from 'ramda';

import { PlayerScoreCard } from '../components';

import { useHeader } from '../hooks';
import { withHeader } from './index';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

function LeaderboardPage({ scores }) {
  useHeader('Leaderboard');

  return (
    <Wrapper>
      {scores.map(s => (
        <PlayerScoreCard key={s.id} {...s} />
      ))}
    </Wrapper>
  );
}

LeaderboardPage.propTypes = {
  scores: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      ...PlayerScoreCard.propTypes
    })
  )
};

const calculateScore = s => s.pollsAnswered + s.pollsCreated;

const mapStateToProps = ({ scoreboard }) => ({
  scores: r.pipe(
    r.values,
    r.sort(r.descend(calculateScore))
  )(scoreboard)
});

export default withHeader(connect(mapStateToProps)(LeaderboardPage));
