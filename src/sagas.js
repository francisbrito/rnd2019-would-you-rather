import { put, takeEvery, select, all } from 'redux-saga/effects';

import {
  addNewUserAction,
  refreshLatestPollsAction,
  refreshTopScoresAction,
  signInAction
} from './actions';
import { ADD_NEW_POLL, ADD_NEW_USER, SELECT_PROFILE } from './actionTypes';
import { GUEST_PROFILE } from './reducers/authenticationReducer';

export function* initialSaga() {
  yield put(addNewUserAction(GUEST_PROFILE));
}

export function* refreshTopScoresSaga() {
  const players = yield select(state => state.scoreboard);

  yield put(refreshTopScoresAction(players));
}

export function* refreshLatestPollsSaga() {
  const polls = yield select(state => state.polls);

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

export default function* rootSaga() {
  yield all([
    watchAddNewUserSaga(),
    watchAddNewPoll(),
    watchSelectProfile(),
    initialSaga(),
  ]);
}
