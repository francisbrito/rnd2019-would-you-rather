import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import {
  HorizontalList,
  PlayerScoreCard,
  SectionLabel,
  SectionTitle
} from './index';
import scoreboardIcon from '../icons/scoreboard.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledPlayerScoreCard = styled(PlayerScoreCard)`
  margin-left: 12px;
  min-width: 150px;
  &:first-of-type {
    margin-left: 0;
  }
`;

const AlignedSectionTitle = styled(SectionTitle)`
  align-self: flex-start;
`;

const ViewScoreboardClickableWrapper = styled.button`
  display: flex;
  background: none;
  border: none;
  outline: none;
  justify-content: center;
  align-items: flex-end;
  &:hover {
    outline: none;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CenteredWrapper = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: rgba(187, 187, 187, 0.1);
  margin: 0 12px;
  border-radius: 4px;
  min-height: 100px;
`;

const EmptyListTitle = styled.h4`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  margin: 0;
  color: #8a8a8a;
`;

const EmptySection = () => (
  <CenteredWrapper>
    <img src={scoreboardIcon} alt="Scoreboard" />
    <EmptyListTitle>No players found</EmptyListTitle>
  </CenteredWrapper>
);

export default function TopPlayersSection({ players }) {
  const isEmpty = players.length === 0;

  return (
    <Wrapper>
      <SectionHeader>
        <AlignedSectionTitle>Top players</AlignedSectionTitle>
        <ViewScoreboardClickableWrapper>
          <SectionLabel>View scoreboard</SectionLabel>
        </ViewScoreboardClickableWrapper>
      </SectionHeader>
      {isEmpty ? (
        <EmptySection />
      ) : (
        <HorizontalList>
          {players.map(p => (
            <StyledPlayerScoreCard key={p.id} {...p} />
          ))}
        </HorizontalList>
      )}
    </Wrapper>
  );
}

TopPlayersSection.propTypes = {
  players: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      ...PlayerScoreCard.propTypes
    })
  ).isRequired
};
