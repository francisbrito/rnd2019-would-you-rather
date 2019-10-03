import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { HeaderDropdownMenu, Title } from './index';

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

const StyledSectionTitle = styled(Title)`
  text-align: center;
  flex: 1;
`;

export default function Header({ title, user, onLogOut }) {
  return (
    <Wrapper>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      <HeaderDropdownMenu currentUser={user} onLogOut={onLogOut} />
    </Wrapper>
  );
}

Header.propTypes = {
  user: propTypes.shape({
    playerName: propTypes.string.isRequired,
    playerPicture: propTypes.string.isRequired
  }),
  title: propTypes.string,
  onLogOut: propTypes.func
};

Header.defaultProps = {
  title: 'Header'
};

Header.defaultProps = {
  onLogOut: () => {}
};
