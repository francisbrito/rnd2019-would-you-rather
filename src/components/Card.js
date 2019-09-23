import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 4px 0;
  border-radius: 4px;
`;

export default function Card({ children, ...otherProps }) {
  return <Wrapper {...otherProps}>{children}</Wrapper>;
}
