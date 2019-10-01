import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .3);
`;

const ListItem = styled.li`
  display: inline-flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background: transparent;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  &:hover {
    cursor: pointer;
  }
`;

function Menu({ className, items, onClickItem }) {
  return (
    <List className={className}>
      {items.map((i, index) => (
        <ListItem
          key={index}
          onClick={() => {
            i.onClick();
            onClickItem(i);
          }}
        >
          {i.component ? <i.component /> : i.label}
        </ListItem>
      ))}
    </List>
  );
}

Menu.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      component: propTypes.elementType,
      onClick: propTypes.func.isRequired
    })
  ),
  onClickItem: propTypes.func
};

Menu.defaultProps = {
  items: [],
  onClickItem: () => {}
};

export default Menu;
