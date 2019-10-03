import React from 'react';
import { connect } from 'react-redux';
import * as propTypes from 'prop-types';
import styled from 'styled-components';
import * as r from 'ramda';

import { selectOptionAction } from '../actions';
import { Label, Poll, Question } from '../components';
import { useHeader } from '../hooks';
import { withHeader } from './index';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const StyledLabel = styled(Label)`
  color: #0a0a0a;
  margin-top: 12px;
  font-size: 12px;
  margin-left: auto;
`;

function PollDetailPage({
  poll,
  onSelectOption,
  optionSelected,
  currentUser,
  answerCount,
  userCount
}) {
  useHeader('Would you rather...');

  const answerRate = (answerCount / userCount).toFixed(2) * 100;

  return (
    <Wrapper>
      <Question
        options={poll.options}
        onSelectOption={index => onSelectOption(index, currentUser.id)}
        optionSelected={optionSelected}
      />
      <StyledLabel>
        Answered by {answerCount} out of {userCount} ({answerRate}%) of users
      </StyledLabel>
    </Wrapper>
  );
}

PollDetailPage.propTypes = {
  poll: propTypes.shape(Poll.propTypes)
};

const mapStateToProps = ({ polls, authentication }) => {
  return {
    poll: {
      ...polls.all[polls.selected],
      createdBy:
        authentication.savedProfiles[polls.all[polls.selected].createdBy]
    },
    optionSelected: r.pathOr(
      null,
      ['all', polls.selected, 'answers', authentication.currentUser.id],
      polls
    ),
    currentUser: authentication.currentUser,
    userCount: Object.values(authentication.savedProfiles).length,
    answerCount: Object.values(polls.all[polls.selected].answers).length
  };
};

const mapDispatchToProps = (dispatch, { history }) => ({
  onSelectOption: (index, user) => {
    dispatch(selectOptionAction(index, user));
    history.goBack();
  }
});

export default withHeader(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PollDetailPage)
);
