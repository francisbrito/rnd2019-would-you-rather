import { put, takeEvery, select, all } from 'redux-saga/effects';
import * as uuid from 'uuid';

import {
  addNewPollAction,
  addNewUserAction,
  refreshLatestPollsAction,
  refreshTopScoresAction,
  signInAction
} from './actions';
import { ADD_NEW_POLL, ADD_NEW_USER, SELECT_PROFILE } from './actionTypes';

export function* initialSaga() {}

export function* refreshTopScoresSaga() {
  const players = yield select(state => state.scoreboard);

  yield put(refreshTopScoresAction(players));
}

export function* refreshLatestPolls() {
  const polls = yield select(state => state.polls);

  yield put(refreshLatestPollsAction(polls));
}

export function* signIn() {
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
  yield takeEvery(ADD_NEW_POLL, refreshLatestPolls);
}

export function* watchSelectProfile() {
  yield takeEvery(SELECT_PROFILE, signIn);
}

export default function* rootSaga() {
  yield all([
    initialSaga(),
    watchAddNewUserSaga(),
    watchAddNewPoll(),
    watchSelectProfile()
  ]);
}
