import * as r from 'ramda';

import {
  ADD_NEW_POLL,
  RESET_POLLS,
  SELECT_OPTION,
  SELECT_POLL
} from '../actionTypes';

const INITIAL = {
  selected: null,
  all: {}
};

export default function pollsReducer(state = INITIAL, action) {
  switch (action.type) {
    case RESET_POLLS:
      return INITIAL;

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

    default:
      return state;
  }
}
