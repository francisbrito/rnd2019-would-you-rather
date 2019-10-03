import * as r from 'ramda';

import {
  ADD_NEW_POLL,
  CHANGE_FILTER,
  RESET_POLLS,
  SELECT_OPTION,
  SELECT_POLL,
  SET_POLLS
} from '../actionTypes';

const INITIAL = {
  selected: null,
  all: {},
  selectedFilter: 'UNANSWERED'
};

export default function pollsReducer(state = INITIAL, action) {
  switch (action.type) {
    case RESET_POLLS:
      return INITIAL;

    case SET_POLLS:
      return {
        ...state,
        all: action.payload.polls
      };

    case ADD_NEW_POLL:
      return r.set(
        r.lensPath(['all', action.payload.poll.id]),
        action.payload.poll,
        state
      );

    case SELECT_POLL:
      return r.mergeDeepRight(state, { selected: action.payload });

    case SELECT_OPTION:
      return r.set(
        r.lensPath(['all', state.selected, 'answers', action.payload.user]),
        action.payload.option,
        state
      );

    case CHANGE_FILTER:
      return {
        ...state,
        selectedFilter: action.payload
      };

    default:
      return state;
  }
}
