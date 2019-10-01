import { SET_HEADER, FINISH_LOADING } from '../actionTypes';

const INITIAL = {
  current: null,
  isInitialized: false,
};

export default function pageReducer(state = INITIAL, action) {
  switch (action.type) {
    case SET_HEADER:
      return { ...state, current: action.payload };

    case FINISH_LOADING:
      return { ...state, isInitialized: true };

    default:
      return state;
  }
}
