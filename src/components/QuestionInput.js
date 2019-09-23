import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';

import { Card } from './index';

const Wrapper = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  min-height: 235px;
`;

const Input = styled.input`
  height: 22px;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  border: 1px solid rgba(74, 74, 74, 0.3);
  flex: 1;
  padding: 6px 12px;
`;

export default function QuestionInput({ onChange, placeholder, value }) {
  return (
    <Wrapper>
      <Input onChange={onChange} placeholder={placeholder} value={value} />
    </Wrapper>
  );
}

QuestionInput.propTypes = {
  onChange: propTypes.func,
  placeholder: propTypes.string,
  value: propTypes.string
};

QuestionInput.defaultProps = {
  onChange: () => {}
};
