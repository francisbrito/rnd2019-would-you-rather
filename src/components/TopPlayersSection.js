import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { PlayerScoreCard, Label, SectionTitle } from './index';

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

const PlayerCardsWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  overflow-x: scroll;
  padding: 4px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function TopPlayersSection({ players }) {
  return (
    <Wrapper>
      <SectionHeader>
        <AlignedSectionTitle>Top players</AlignedSectionTitle>
        <ViewScoreboardClickableWrapper>
          <Label>View scoreboard</Label>
        </ViewScoreboardClickableWrapper>
      </SectionHeader>
      <PlayerCardsWrapper>
        {players.map(p => (
          <StyledPlayerScoreCard key={p.id} {...p} />
        ))}
      </PlayerCardsWrapper>
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
