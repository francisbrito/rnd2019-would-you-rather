import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { HeaderDropdownMenu } from '../components';

export default {
  title: 'HeaderDropdownMenu'
};

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const basic = () => (
  <CenteredWrapper>
    <HeaderDropdownMenu
      currentUser={{
        playerName: 'Guest',
        playerPicture: 'https://placekitten.com/300'
      }}
      onLogOut={action('onLogOut')}
    />
  </CenteredWrapper>
);
