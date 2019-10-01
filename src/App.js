import React from 'react';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  HomePage,
  PrivateRoute,
  SignInPage,
  AddNewPollPage,
  PollDetailPage,
  LeaderboardPage,
  PollsPage
} from './containers';
import { createStore } from './reducers';

const { store } = createStore();

function SignUp() {
  return <h1>Sign Up</h1>;
}

function NotFound() {
  return <h1>Not Found</h1>;
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route component={SignInPage} path="/authenticate" />
          <Route component={SignUp} path="/register" />
          <PrivateRoute component={HomePage} path="/" exact />
          <PrivateRoute component={PollsPage} path="/polls" exact />
          <PrivateRoute component={AddNewPollPage} path="/polls/new" exact />
          <PrivateRoute component={PollDetailPage} path="/polls/:id" />
          <PrivateRoute component={LeaderboardPage} path="/leaderboard" />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
