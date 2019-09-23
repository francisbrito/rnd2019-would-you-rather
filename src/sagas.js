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

export function* initialSaga() {
  yield put(
    addNewUserAction({
      id: uuid.v4(),
      playerName: 'Veronica Viking',
      playerPicture: 'https://placekitten.com/300',
      pollsCreated: 0,
      pollsAnswered: 0
    })
  );
  yield put(
    addNewPollAction({
      id: uuid.v4(),
      options: ['Drink a cup of wine', 'Drink a cup of tea'],
      createdBy: 'Veronica Viking',
      creationDate: Date.now()
    })
  );
}

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