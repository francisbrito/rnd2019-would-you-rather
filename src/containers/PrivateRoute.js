import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

function PrivateRoute({
  component: Component,
  authenticatedUser,
  ...routeProps
}) {
  const isAuthenticated = !!authenticatedUser;

  console.log(isAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/authenticate',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = ({ authentication }) => ({
  authenticatedUser: authentication.currentUser
});

export default connect(mapStateToProps)(PrivateRoute);
