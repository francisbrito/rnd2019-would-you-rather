import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { DropdownMenu } from './index';
import { DefaultMenu } from './DropdownMenu';

const StyledDropdownMenu = styled(DropdownMenu)``;

const ProfilePicture = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 24px;
  object-fit: cover;
`;

const StyledMenu = styled(DefaultMenu)`
  margin-left: -76px;
`;

function HeaderDropdownMenu({ currentUser, onLogOut }) {
  return (
    <StyledDropdownMenu
      ToggleComponent={props => (
        <ProfilePicture
          {...props}
          src={currentUser.playerPicture}
          alt={currentUser.playerName}
        />
      )}
      MenuComponent={StyledMenu}
      items={[{ label: 'Log out', onClick: onLogOut }]}
    />
  );
}

HeaderDropdownMenu.propTypes = {
  currentUser: propTypes.shape({
    playerName: propTypes.string.isRequired,
    playerPicture: propTypes.string.isRequired
  })
};

export default HeaderDropdownMenu;
