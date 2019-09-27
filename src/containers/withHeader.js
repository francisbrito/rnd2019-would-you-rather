import React, { Fragment } from 'react';

import { ConnectedHeader } from './index';

export default function withHeader(Component) {
  return (props) => {
    return (
      <Fragment>
        <ConnectedHeader />
        <Component {...props} />
      </Fragment>
    );
  };
}
