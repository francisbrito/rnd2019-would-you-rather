import * as r from 'ramda';

import {
  ADD_NEW_POLL,
  ADD_NEW_USER,
  ANSWER_POLL,
  RESET_SCOREBOARD
} from '../actionTypes';

const INITIAL = {};

export default function scoreboardReducer(state = INITIAL, action) {
  switch (action.type) {
    case RESET_SCOREBOARD:
      return INITIAL;
    case ADD_NEW_USER:
      return {
        [action.payload.user.id]: {
          ...action.payload.user,
          pollsCreated: 0,
          pollsAnswered: 0
        }
      };
    case ADD_NEW_POLL:
      const out = r.evolve(
        {
          [action.payload.poll.createdBy.id]: {
            pollsCreated: r.add(1)
          }
        },
        state
      );
      console.log(out);
      return out;
    case ANSWER_POLL:
      return r.evolve(
        {
          [action.payload.poll.createdBy.id]: {
            pollsAnswered: r.add(1)
          }
        },
        state
      );
    default:
      return state;
  }
}
