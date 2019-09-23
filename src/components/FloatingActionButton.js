import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import helpIcon from '../icons/help.svg';

const Wrapper = styled.button`
  display: flex;
  height: 56px;
  width: 56px;
  align-items: center;
  justify-content: center;
  background-color: #55b000;
  border-radius: 56px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
  outline: none;
  transition: all 100ms ease-in-out;
  border: none;
  &:hover {
    outline: none;
    transform: scale(0.9);
  }
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

export default function FloatingActionButton({ className, onClick, icon }) {
  return (
    <Wrapper className={className} onClick={onClick}>
      <Icon src={icon} alt="Add" />
    </Wrapper>
  );
}

FloatingActionButton.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string,
  icon: propTypes.string
};

FloatingActionButton.defaultProps = {
  onClick: () => {},
  icon: helpIcon
};
