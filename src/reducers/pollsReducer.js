import { ADD_NEW_POLL, RESET_POLLS } from '../actionTypes';

const INITIAL = {};

export default function pollsReducer(state = INITIAL, action) {
  switch (action.type) {
    case RESET_POLLS:
      return INITIAL;

    case ADD_NEW_POLL:
      return {
        ...state,
        [action.payload.poll.id]: action.payload.poll
      };

    default:
      return state;
  }
}
