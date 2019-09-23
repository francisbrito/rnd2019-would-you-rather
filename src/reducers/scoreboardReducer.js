import {
  ADD_NEW_USER,
  ANSWER_POLL_SUCCESS,
  CREATE_POLL_SUCCESS,
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
        [action.payload.user.id]: action.payload.user
      };
    case CREATE_POLL_SUCCESS:
      return {
        [action.payload.poll.createdBy]: {
          ...(state[action.payload.poll.createdBy] || {
            pollsCreated: 0,
            pollsAnswered: 0
          }),
          pollsCreated:
            (
              state[action.payload.poll.createdBy] || {
                pollsCreated: 0,
                pollsAnswered: 0
              }
            ).pollsCreated + 1
        }
      };
    case ANSWER_POLL_SUCCESS:
      return {
        [action.payload.poll.createdBy]: {
          ...(state[action.payload.poll.createdBy] || {
            pollsCreated: 0,
            pollsAnswered: 0
          }),
          pollsAnswered:
            (
              state[action.payload.poll.createdBy] || {
                pollsCreated: 0,
                pollsAnswered: 0
              }
            ).pollsAnswered + 1
        }
      };
    default:
      return state;
  }
}
