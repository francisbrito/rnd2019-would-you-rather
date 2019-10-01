import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { DropdownMenu } from './index';

const ProfilePicture = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 24px;
`;

function HeaderDropdownMenu({ currentUser, onLogOut }) {
  return (
    <DropdownMenu
      ToggleComponent={props => (
        <ProfilePicture
          {...props}
          src={currentUser.playerPicture}
          alt={currentUser.playerName}
        />
      )}
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
