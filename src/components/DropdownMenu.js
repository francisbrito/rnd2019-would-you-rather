import React, { useState } from 'react';
import styled from 'styled-components';

import { Menu } from './index';

export const DefaultMenu = styled(Menu)`
  display: flex;
  width: 100%;
  min-width: 100px;
  position: absolute;
  z-index: 1;
`;

function DropdownMenu({ items, className, ToggleComponent, MenuComponent }) {
  const [isShowing, setIsShowing] = useState(false);
  const StyledMenu = MenuComponent || DefaultMenu;

  return (
    <div
      className={className}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <ToggleComponent onClick={() => setIsShowing(!isShowing)} />
      {isShowing && (
        <StyledMenu items={items} onClickItem={() => setIsShowing(false)} />
      )}
    </div>
  );
}

export default DropdownMenu;
