import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { LatestPollsSection, TopPlayersSection } from '../components';

const Wrapper = styled.div`
  padding: 12px;
`;

function Home({ topPlayers, latestPolls, openPoll }) {
  return (
    <Wrapper>
      <TopPlayersSection players={topPlayers} />
      <LatestPollsSection polls={latestPolls}  onClickPoll={openPoll} />
    </Wrapper>
  );
}

const mapDispatchToProps = state => ({
  topPlayers: state.topPlayers,
  latestPolls: state.latestPolls
});

export default connect(mapDispatchToProps)(Home);
