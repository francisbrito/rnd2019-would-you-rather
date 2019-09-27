import { put, takeEvery, select, all } from 'redux-saga/effects';

import {
  addNewUserAction,
  answerPollSuccessAction,
  refreshLatestPollsAction,
  refreshTopScoresAction,
  signInAction
} from './actions';
import {
  ADD_NEW_POLL,
  ADD_NEW_USER,
  SELECT_OPTION,
  SELECT_PROFILE
} from './actionTypes';
import { GUEST_PROFILE } from './reducers/authenticationReducer';

export function* initialSaga() {
  yield put(addNewUserAction(GUEST_PROFILE));
}

export function* refreshTopScoresSaga() {
  const players = yield select(state => state.scoreboard);

  yield put(refreshTopScoresAction(players));
}

export function* refreshLatestPollsSaga() {
  const polls = yield select(state => state.polls.all);

  yield put(refreshLatestPollsAction(polls));
}

export function* signInSaga() {
  const { selectedProfile, savedProfiles } = yield select(
    state => state.authentication
  );
  const currentUser = savedProfiles[selectedProfile];

  yield put(signInAction(currentUser));
}

export function* watchAddNewUserSaga() {
  yield takeEvery(ADD_NEW_USER, refreshTopScoresSaga);
}

export function* watchAddNewPoll() {
  yield takeEvery(ADD_NEW_POLL, refreshLatestPollsSaga);
  yield takeEvery(ADD_NEW_POLL, refreshTopScoresSaga);
}

export function* watchSelectProfile() {
  yield takeEvery(SELECT_PROFILE, signInSaga);
}

export function* addAnswerToScoreSaga({ option }) {
  const { polls, selectedPollId } = yield select(s => ({
    polls: s.polls.all,
    selectedPollId: s.polls.selected
  }));
  const poll = polls[selectedPollId];

  yield put(answerPollSuccessAction({ selectedOption: option, poll }));

  yield refreshTopScoresSaga();
}

export function* watchSelectOption() {
  yield takeEvery(SELECT_OPTION, addAnswerToScoreSaga);
}

export default function* rootSaga() {
  yield all([
    watchAddNewUserSaga(),
    watchAddNewPoll(),
    watchSelectProfile(),
    watchSelectOption(),
    initialSaga()
  ]);
}
