import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

const Wrapper = styled.span`
  cursor: pointer;
  background: ${({ isActive }) => (isActive ? '#dadada' : 'transparent')};
  padding: 2px 6px;
  border-radius: 4px;
  box-sizing: border-box;
  text-transform: uppercase;
  font-size: 10px;
  margin-left: 2px;
  
  &:first-of-type {
    margin-left: 0;
  }
`;

function FilterToggle({ children, isActive, onToggle }) {
  return (
    <Wrapper isActive={isActive} onClick={onToggle}>
      {children}
    </Wrapper>
  );
}

FilterToggle.propTypes = {
  children: propTypes.elementType.isRequired,
  isActive: propTypes.bool,
  onToggle: propTypes.func
};

FilterToggle.defaultProps = {
  isActive: false,
  onToggle: () => {}
};

export default FilterToggle;
