import React from 'react';
import styled from 'styled-components';

const Separator = styled.span`
  text-align: center;
  font-size: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SeparatorWrapper = styled.div`
  color: rgba(0, 0, 0, 0.1);
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SeparatorSpan = styled.span`
  margin: 0 4px;
`;

export default function InputCardSeparator({ className }) {
  return (
    <SeparatorWrapper className={className}>
      <Separator />
      <SeparatorSpan>Or</SeparatorSpan>
      <Separator />
    </SeparatorWrapper>
  );
}
