import * as r from 'ramda';

import {
  ADD_NEW_POLL,
  ADD_NEW_USER,
  ANSWER_POLL_SUCCESS,
  RESET_SCOREBOARD
} from '../actionTypes';

const INITIAL = {};

export default function scoreboardReducer(state = INITIAL, action) {
  switch (action.type) {
    case RESET_SCOREBOARD:
      return INITIAL;
    case ADD_NEW_USER:
      return {
        ...state,
        [action.payload.user.id]: {
          ...action.payload.user,
          pollsCreated: 0,
          pollsAnswered: 0
        }
      };
    case ADD_NEW_POLL:
      return r.evolve(
        {
          [action.payload.poll.createdBy]: {
            pollsCreated: r.add(1)
          }
        },
        state
      );
    case ANSWER_POLL_SUCCESS:
      return r.evolve(
        {
          [action.payload.userId]: {
            pollsAnswered: r.add(1)
          }
        },
        state
      );
    default:
      return state;
  }
}
