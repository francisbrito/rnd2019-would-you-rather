import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import * as uuid from 'uuid';
import { addNewPollAction } from '../actions';

import { Card, FloatingActionButton } from '../components';

import checkIcon from '../icons/check.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
`;

const disabledButton = css`
  background: rgba(0, 0, 0, 0.1);
  cursor: not-allowed;
  box-shadow: none;

  &:hover,
  &:active {
    transform: none;
  }
`;

const SaveNewPollButton = styled(FloatingActionButton)`
  position: absolute;
  right: 24px;
  bottom: 24px;
  ${props => props.disabled && disabledButton}
`;

const InputWrapper = styled(Card)`
  display: flex;
  padding: 0 12px;
  min-height: 235px;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  &:first-of-type {
    margin-top: 0;
  }
`;

const OptionInput = styled.input`
  height: 56px;
  font-size: 18px;
  padding: 0 12px;
  font-family: 'Open Sans', sans-serif;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
`;

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

function AddNewPollPage({ currentUser, onAddNewPoll }) {
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');
  const isValidPoll = optionA && optionB;

  return (
    <Wrapper>
      <InputWrapper>
        <OptionInput
          placeholder="Option A"
          value={optionA}
          onChange={e => setOptionA(e.target.value)}
        />
      </InputWrapper>
      <SeparatorWrapper>
        <Separator />
        <SeparatorSpan>Or</SeparatorSpan>
        <Separator />
      </SeparatorWrapper>
      <InputWrapper>
        <OptionInput
          placeholder="Option B"
          value={optionB}
          onChange={e => setOptionB(e.target.value)}
        />
      </InputWrapper>
      <SaveNewPollButton
        icon={checkIcon}
        disabled={!isValidPoll}
        onClick={() => {
          const newPoll = {
            id: uuid.v4(),
            creationDate: Date.now(),
            createdBy: currentUser.playerName,
            options: [optionA, optionB]
          };

          onAddNewPoll(newPoll);

          setOptionA('');
          setOptionB('');
        }}
      />
    </Wrapper>
  );
}

const mapStateToProps = ({ authentication }) => ({
  currentUser: authentication.currentUser
});

const mapDispatchToProps = (dispatch, { history }) => ({
  onAddNewPoll: newPoll => {
    dispatch(addNewPollAction(newPoll));
    history.push('/');
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewPollPage);
