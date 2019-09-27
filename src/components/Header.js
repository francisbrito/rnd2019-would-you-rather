import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { SectionTitle } from './index';

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

const StyledSectionTitle = styled(SectionTitle)`
  text-align: center;
  flex: 1;
`;

const ProfilePicture = styled.img`
  border-radius: 24px;
  height: 24px;
  width: 24px;
  margin-left: auto;
`;

export default function Header({ title, user, onLogOut }) {
  return (
    <Wrapper>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      <ProfilePicture src={user.profilePicture} alt={user.name} />
    </Wrapper>
  );
}

Header.propTypes = {
  user: propTypes.shape({
    name: propTypes.string.isRequired,
    profilePicture: propTypes.string.isRequired
  }),
  title: propTypes.string.isRequired,
  onLogOut: propTypes.func
};

Header.defaultProps = {
  onLogOut: () => {}
};
