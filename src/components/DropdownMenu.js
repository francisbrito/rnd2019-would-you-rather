import React, { useState, Fragment } from 'react';
import styled from 'styled-components';

import { Menu } from './index';

const StyledMenu = styled(Menu)`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 36px;
  margin-right: 24px;
`;

function DropdownMenu({ items, ToggleComponent }) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Fragment>
      <ToggleComponent onClick={() => setIsShowing(!isShowing)} />
      {isShowing && (
        <StyledMenu items={items} onClickItem={() => setIsShowing(false)} />
      )}
    </Fragment>
  );
}

export default DropdownMenu;
