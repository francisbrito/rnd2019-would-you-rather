import React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';
import { formatDistance } from 'date-fns';

import { Card, Label } from './index';

const Wrapper = styled(Card)`
  padding: 12px;
  flex-direction: column;
  display: inline-flex;
  max-width: 300px;
`;

const Text = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 28px;
  font-weight: lighter;
  padding-bottom: 6px;
  margin: 0 0 6px 0;
  border-bottom: 1px solid rgba(151, 151, 151, 0.1);
`;

const CreationInformation = styled(Label)`
  align-self: flex-end;
  flex: 1;
`;

export default function Poll({ className, options, createdBy, creationDate }) {
  const playerFirstName = createdBy.playerName.split(' ')[0];
  const question = options.join(' or ');
  const creationTimeInformation = creationDate
    ? formatDistance(creationDate, new Date(), { addSuffix: true })
    : null;

  return (
    <Wrapper className={className}>
      <Label>Would you rather...</Label>
      <Text>{question}?</Text>
      <CreationInformation>
        Asked by <strong>{playerFirstName}</strong> {creationTimeInformation}
      </CreationInformation>
    </Wrapper>
  );
}

Poll.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  createdBy: propTypes.shape({
    playerName: propTypes.string.isRequired
  }).isRequired,
  creationDate: propTypes.number
};
