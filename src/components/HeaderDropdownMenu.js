import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { DropdownMenu, HeaderProfile } from './index';
import { DefaultMenu } from './DropdownMenu';

const StyledDropdownMenu = styled(DropdownMenu)`
  min-width: 100px;
`;

const StyledMenu = styled(DefaultMenu)``;

function HeaderDropdownMenu({ currentUser, onLogOut }) {
  return (
    <StyledDropdownMenu
      ToggleComponent={props => (
        <HeaderProfile
          {...props}
          name={currentUser.playerName}
          picture={currentUser.playerPicture}
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
