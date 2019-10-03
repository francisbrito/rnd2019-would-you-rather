import {
  ANSWER_POLL_SUCCESS,
  CREATE_POLL_SUCCESS,
  REFRESH_TOP_SCORES,
  RESET_SCOREBOARD,
  RETRIEVE_TOP_PLAYERS_FAILURE,
  RETRIEVE_TOP_PLAYERS_REQUEST,
  RETRIEVE_TOP_PLAYERS_SUCCESS,
  RESET_POLLS,
  REFRESH_LATEST_POLLS,
  ADD_NEW_USER,
  ADD_NEW_POLL,
  SELECT_PROFILE,
  SAVE_PROFILE,
  SIGN_IN,
  SELECT_OPTION,
  SELECT_POLL,
  SET_HEADER,
  LOGOUT,
  SET_POLLS,
  SET_USER_PROFILES,
  FINISH_LOADING,
  CHANGE_FILTER
} from './actionTypes';

export const retrieveTopPlayersAction = () => ({
  type: RETRIEVE_TOP_PLAYERS_REQUEST
});

export const retrieveToPlayersFailureAction = error => ({
  type: RETRIEVE_TOP_PLAYERS_FAILURE,
  payload: { error }
});

export const retrieveTopPlayersSuccessAction = players => ({
  type: RETRIEVE_TOP_PLAYERS_SUCCESS,
  payload: { players }
});

export const createPollSuccessAction = poll => ({
  type: CREATE_POLL_SUCCESS,
  payload: { poll }
});

export const answerPollSuccessAction = ({ selectedOption, poll, userId }) => ({
  type: ANSWER_POLL_SUCCESS,
  payload: { selectedOption, poll, userId }
});

export const refreshTopScoresAction = players => ({
  type: REFRESH_TOP_SCORES,
  payload: { players }
});

export const resetScoreboardAction = () => ({
  type: RESET_SCOREBOARD
});

export const resetPolls = () => ({
  type: RESET_POLLS
});

export const refreshLatestPollsAction = polls => ({
  type: REFRESH_LATEST_POLLS,
  payload: {
    polls: Object.values(polls)
  }
});

export const addNewUserAction = newUser => ({
  type: ADD_NEW_USER,
  payload: {
    user: newUser
  }
});

export const addNewPollAction = poll => ({
  type: ADD_NEW_POLL,
  payload: { poll }
});

export const selectProfileAction = id => ({
  type: SELECT_PROFILE,
  payload: { id }
});

export const saveProfileAction = profile => ({
  type: SAVE_PROFILE,
  payload: { profile }
});

export const signInAction = user => ({
  type: SIGN_IN,
  payload: { user }
});

export const selectOptionAction = (index, user) => ({
  type: SELECT_OPTION,
  payload: {
    option: index,
    user
  }
});

export const selectPollAction = pollId => ({
  type: SELECT_POLL,
  payload: pollId
});

export const setHeaderAction = title => ({
  type: SET_HEADER,
  payload: title
});

export const logOutAction = () => ({
  type: LOGOUT
});

export const setPollsAction = polls => ({
  type: SET_POLLS,
  payload: { polls }
});

export const setUserProfilesAction = profiles => ({
  type: SET_USER_PROFILES,
  payload: { profiles }
});

export const finishInitializationAction = () => ({
  type: FINISH_LOADING
});

export const changeFilterAction = filter => ({
  type: CHANGE_FILTER,
  payload: filter
});
