import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { Card, Label } from './index';

const Wrapper = styled(Card)`
  padding: 12px;
  min-width: 100px;
  display: inline-flex;
  flex-direction: column;
`;

const PlayerInformationWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(151, 151, 151, 0.1);
  padding-bottom: 6px;
  margin-bottom: 6px;
`;

const PollStatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScoreInformationWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
  justify-content: center;
`;

const PlayerName = styled.span`
  margin-left: 6px;
  color: #4a4a4a;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
`;

const ProfilePicture = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  object-fit: cover;
`;

const ScoreNumber = styled.span`
  color: #4a4a4a;
  font-size: ${props => (props.big ? '24px' : '12px')};
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
`;

export default function PlayerScoreCard({
  className,
  id,
  playerName,
  playerPicture,
  pollsCreated,
  pollsAnswered
}) {
  const [firstName] = playerName.split(' ');
  return (
    <Wrapper className={className}>
      <PlayerInformationWrapper>
        <ProfilePicture src={playerPicture} alt={playerName} />
        <PlayerName>
          {firstName}
        </PlayerName>
      </PlayerInformationWrapper>
      <ScoreInformationWrapper>
        <PollStatisticsWrapper>
          <Label>Polls created</Label>
          <ScoreNumber>{pollsCreated}</ScoreNumber>
          <Label>Polls answered</Label>
          <ScoreNumber>{pollsAnswered}</ScoreNumber>
        </PollStatisticsWrapper>
        <ScoreWrapper>
          <Label>Score</Label>
          <ScoreNumber big>{pollsAnswered + pollsCreated}</ScoreNumber>
        </ScoreWrapper>
      </ScoreInformationWrapper>
    </Wrapper>
  );
}

PlayerScoreCard.propTypes = {
  playerName: propTypes.string.isRequired,
  playerPicture: propTypes.string.isRequired,
  pollsCreated: propTypes.number,
  pollsAnswered: propTypes.number
};

PlayerScoreCard.defaultProps = {
  pollsCreated: 0,
  pollsAnswered: 0
};
