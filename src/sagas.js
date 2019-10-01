import { all, call, put, select, takeEvery } from 'redux-saga/effects';

import {
  addNewPollAction,
  addNewUserAction,
  answerPollSuccessAction,
  finishInitializationAction,
  refreshLatestPollsAction,
  refreshTopScoresAction,
  saveProfileAction,
  signInAction
} from './actions';
import {
  ADD_NEW_POLL,
  ADD_NEW_USER,
  SELECT_OPTION,
  SELECT_PROFILE,
  SET_POLLS,
  SET_USER_PROFILES
} from './actionTypes';
import * as api from './api';
import { GUEST_PROFILE } from './reducers/authenticationReducer';

export function* initialSaga() {
  yield put(saveProfileAction(GUEST_PROFILE));
  yield put(addNewUserAction(GUEST_PROFILE));
  yield fetchInitialUserProfilesSaga();
  yield fetchInitialPollsSaga();

  yield put(finishInitializationAction());
}

export function* refreshTopScoresSaga() {
  const players = yield select(state => state.scoreboard);

  yield put(refreshTopScoresAction(players));
}

export function* refreshLatestPollsSaga() {
  const polls = yield select(state => state.polls.all);

  yield put(refreshLatestPollsAction(polls));
}

export function* fetchInitialPollsSaga() {
  const polls = yield call(api.getPolls);

  for (const poll of Object.values(polls)) {
    yield put(addNewPollAction(poll));

    for (const [userId, answer] of Object.entries(poll.answers)) {
      yield put(
        answerPollSuccessAction({ selectedOption: answer, userId, poll })
      );
    }
  }
}

export function* fetchInitialUserProfilesSaga() {
  const profiles = yield call(api.getUserProfiles);

  for (const profile of Object.values(profiles)) {
    yield put(saveProfileAction(profile));
    yield put(addNewUserAction(profile));
  }
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

export function* watchSetPolls() {
  yield takeEvery(SET_POLLS, refreshLatestPollsSaga);
}

export function* watchSetUserProfiles() {
  yield takeEvery(SET_USER_PROFILES, refreshTopScoresSaga);
}

export function* addAnswerToScoreSaga({ payload }) {
  const { option } = payload;
  const { polls, selectedPollId, currentUserId } = yield select(s => ({
    polls: s.polls.all,
    selectedPollId: s.polls.selected,
    currentUserId: s.authentication.selectedProfile
  }));

  yield put(
    answerPollSuccessAction({
      selectedOption: option,
      poll: polls[selectedPollId],
      userId: currentUserId
    })
  );

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
    watchSetPolls(),
    watchSetUserProfiles(),
    initialSaga()
  ]);
}
