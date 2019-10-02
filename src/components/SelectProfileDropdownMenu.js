import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { DropdownMenu } from './index';

const StyledDropdownMenu = styled(DropdownMenu)`
  width: 280px;
`;

const ProfileButton = styled.button`
  width: 100%;
  box-sizing: border-box;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  color: #fff;
  outline: none;
  height: 48px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #55b000;
  margin-top: 8px;
  margin-right: auto;
  border: none;

  &:active,
  &:focus,
  &:hover {
    outline: none;
  }
`;

function SelectProfileDropdownMenu({ profiles, onProfileSelected }) {
  const menuItems = profiles.map(p => ({
    label: p.playerName,
    onClick: () => {
      onProfileSelected(p.id);
    }
  }));

  return (
    <StyledDropdownMenu
      ToggleComponent={props => (
        <ProfileButton {...props}>Select a profile</ProfileButton>
      )}
      items={menuItems}
    />
  );
}

SelectProfileDropdownMenu.propTypes = {
  profiles: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      playerName: propTypes.string.isRequired
    })
  ),
  onProfileSelected: propTypes.func
};

SelectProfileDropdownMenu.defaultProps = {
  onProfileSelected: () => {}
};

export default SelectProfileDropdownMenu;
