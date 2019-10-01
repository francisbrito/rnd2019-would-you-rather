import React, { Fragment } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as propTypes from 'prop-types';

import { selectProfileAction } from '../actions';
import { ChooseProfileButton } from '../components';

const Wrapper = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-weight: lighter;
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin: 0;
`;

const SubTitle = styled.h4`
  font-family: 'Open Sans', sans-serif;
  font-weight: normal;
  color: #9b9b9b;
  margin: 0;
`;

function SignInPage({ savedProfiles, onSelectProfile, isAuthenticated }) {
  return (
    <Fragment>
      {isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <Wrapper>
          <Title>Would you rather?</Title>
          <SubTitle>A fun game to play with friends</SubTitle>
          <ChooseProfileButton
            defaultProfile={savedProfiles[0]}
            onClick={onSelectProfile}
            savedProfiles={savedProfiles}
          >
            Continue as <strong>Guest</strong>
          </ChooseProfileButton>
        </Wrapper>
      )}
    </Fragment>
  );
}

SignInPage.propTypes = {
  savedProfiles: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      playerName: propTypes.string.isRequired,
      playerPicture: propTypes.string.isRequired
    })
  ),
  onSelectProfile: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool
};

SignInPage.defaultProps = {
  savedProfiles: [],
  isAuthenticated: false
};

const mapStateToProps = ({ authentication }) => ({
  selectedProfile: authentication.selectedProfile,
  savedProfiles: Object.values(authentication.savedProfiles),
  isAuthenticated: !!authentication.currentUser
});

const mapDispatchToProps = dispatch => ({
  onSelectProfile: id => dispatch(selectProfileAction(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage);
