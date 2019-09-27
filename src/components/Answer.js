import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { Card } from './index';

const Wrapper = styled(Card)`
  padding: 12px;
  display: inline-block;
`;

const Text = styled.span`
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
`;

export default function Answer({ className, children }) {
  return (
    <Wrapper className={className}>
      <Text>{children}</Text>
    </Wrapper>
  );
}

Answer.propTypes = {
  children: propTypes.string.isRequired
};
