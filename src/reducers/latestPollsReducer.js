import { REFRESH_LATEST_POLLS } from '../actionTypes';

const INITIAL = [];

export default function latestPollsReducer(state = INITIAL, action) {
  switch (action.type) {
    case REFRESH_LATEST_POLLS:
      return Object.entries(action.payload.polls)
        .sort(([, a], [, b]) => b.creationDate - a.creationDate)
        .slice(0, 10)
        .map(([, poll]) => poll);
    default:
      return state;
  }
}
