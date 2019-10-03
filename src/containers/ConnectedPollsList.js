import { connect } from 'react-redux';
import * as r from 'ramda';

import { changeFilterAction, selectPollAction } from '../actions';
import { PollsSection } from '../components';

const isAnsweredBy = userId => p => userId in p.answers;
const isNotAnsweredBy = userId => p => !(userId in p.answers);
const inflateUserProfile = profiles => p => ({
  ...p,
  createdBy: profiles[p.createdBy]
});
const mapStateToProps = ({ polls, authentication }) => ({
  polls: r.pipe(
    r.filter(
      polls.selectedFilter === 'ANSWERED'
        ? isAnsweredBy(authentication.currentUser.id)
        : isNotAnsweredBy(authentication.currentUser.id)
    ),
    r.values,
    r.map(inflateUserProfile(authentication.savedProfiles)),
    r.tap(console.log)
  )(polls.all),
  selectedFilter: polls.selectedFilter
});

const mapDispatchToProps = (dispatch, { history }) => ({
  onChangeFilter: filter => dispatch(changeFilterAction(filter)),
  onClickPoll: poll => {
    dispatch(selectPollAction(poll.id));
    history.push(`/polls/${poll.id}`);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollsSection);
