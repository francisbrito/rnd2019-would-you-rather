import React from 'react';
import { connect } from 'react-redux';
import * as propTypes from 'prop-types';
import styled from 'styled-components';
import * as r from 'ramda';

import { selectOptionAction } from '../actions';
import { Poll, Question } from '../components';
import { useHeader } from '../hooks';
import { withHeader } from './index';

const Wrapper = styled.div`
  padding: 12px;
`;

function PollDetailPage({ poll, onSelectOption, optionSelected, currentUser }) {
  useHeader('Would you rather...');

  return (
    <Wrapper>
      <Question
        options={poll.options}
        onSelectOption={index => onSelectOption(index, currentUser.id)}
        optionSelected={optionSelected}
      />
    </Wrapper>
  );
}

PollDetailPage.propTypes = {
  poll: propTypes.shape(Poll.propTypes)
};

const mapStateToProps = ({ polls, authentication }) => {
  return {
    poll: polls.all[polls.selected],
    optionSelected: r.pathOr(
      null,
      ['all', polls.selected, 'answers', authentication.currentUser.id],
      polls
    ),
    currentUser: authentication.currentUser
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
