import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RotateLoader } from 'react-spinners';
import styled from 'styled-components';

import {
  AddNewPollPage,
  HomePage,
  LeaderboardPage,
  PollDetailPage,
  PollsPage,
  PrivateRoute,
  SignInPage
} from './index';

function NotFound() {
  return <h1>Not Found</h1>;
}

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
`;

function AppContainer({ isInitialized }) {
  return (
    <Fragment>
      {isInitialized ? (
        <Router>
          <Switch>
            <Route component={SignInPage} path="/authenticate" />
            <PrivateRoute component={HomePage} path="/" exact />
            <PrivateRoute component={PollsPage} path="/polls" exact />
            <PrivateRoute component={AddNewPollPage} path="/polls/new" exact />
            <PrivateRoute component={PollDetailPage} path="/polls/:id" />
            <PrivateRoute component={LeaderboardPage} path="/leaderboard" />
            <Route component={NotFound} />
          </Switch>
        </Router>
      ) : (
        <LoaderWrapper>
          <RotateLoader loading={!isInitialized} color="#dadada" />
        </LoaderWrapper>
      )}
    </Fragment>
  );
}

const mapStateToProps = ({ page }) => ({
  isInitialized: page.isInitialized
});

export default connect(mapStateToProps)(AppContainer);
