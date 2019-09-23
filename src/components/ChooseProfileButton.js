import React, { useState } from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import downArrowIcon from '../icons/down-arrow.svg';

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 12px;
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  color: #fff;
  outline: none;
  height: 48px;
  margin-top: 16px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #55b000;

  &:hover,
  &:active {
    outline: none;
  }
`;

const SavedProfileList = styled.ul`
  padding: 0;
  list-style: none;
  position: absolute;
  width: 100%;
  max-width: 280px;
  transform: translate3d(0, 32px, 0);
`;

const SavedProfileListItem = styled.li`
  height: 48px;
  border: 1px solid #dadada;
  border-top: 0;
  &:first-child {
    border-top: 1px solid #dadada;
  }
  background: #fff;
  color: #000;
`;

const SavedProfile = styled.button`
  height: 48px;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
`;

const SelectProfileButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  height: 100%;
  background: transparent;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  outline: none;
  border: none;
  &:hover,
  &:active {
    outline: none;
  }
`;

const ConfirmProfileButton = styled.button`
  margin-left: auto;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  height: 100%;
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
  outline: none;
  &:hover,
  &:active {
    outline: none;
  }
`;

export default function ChooseProfileButton({
  onClick,
  defaultProfile,
  savedProfiles
}) {
  const hasSavedProfiles = savedProfiles.length > 0;
  const [selectedProfile, setSelectProfile] = useState(defaultProfile);
  const [isShowingSavedProfiles, setIsShowingSavedProfiles] = useState(false);

  return (
    <Wrapper>
      <ConfirmProfileButton onClick={() => onClick(selectedProfile.id)}>
        Continue as <strong>{selectedProfile.playerName}</strong>
      </ConfirmProfileButton>
      {hasSavedProfiles && (
        <SelectProfileButton onClick={() => setIsShowingSavedProfiles(true)}>
          <img src={downArrowIcon} alt="select a profile" />
        </SelectProfileButton>
      )}
      {isShowingSavedProfiles ? (
        <SavedProfileList>
          {savedProfiles.map(sp => (
            <SavedProfileListItem key={sp.id}>
              <SavedProfile
                onClick={() => {
                  setIsShowingSavedProfiles(false);
                  setSelectProfile(sp);
                }}
              >
                {sp.playerName}
              </SavedProfile>
            </SavedProfileListItem>
          ))}
        </SavedProfileList>
      ) : null}
    </Wrapper>
  );
}

ChooseProfileButton.propTypes = {
  onClick: propTypes.func,
  defaultProfile: propTypes.shape({
    id: propTypes.string.isRequired,
    playerName: propTypes.string.isRequired,
    playerPicture: propTypes.string.isRequired
  }).isRequired,
  savedProfiles: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      playerName: propTypes.string.isRequired,
      playerPicture: propTypes.string.isRequired
    })
  )
};

ChooseProfileButton.defaultProps = {
  onClick: () => {},
  savedProfiles: []
};
