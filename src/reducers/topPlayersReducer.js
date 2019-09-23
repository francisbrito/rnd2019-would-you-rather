import { REFRESH_TOP_SCORES } from '../actionTypes';

const score = x => x.pollsCreated + x.pollsAnswered;

export default function topPlayersReducer(state = [], action) {
  switch (action.type) {
    case REFRESH_TOP_SCORES:
      return Object.entries(action.payload.players)
        .sort(([, a], [, b]) => score(b) - score(a))
        .slice(0, 10)
        .map(([, player]) => player);
    default:
      return state;
  }
}
