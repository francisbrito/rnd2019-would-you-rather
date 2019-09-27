import { SET_HEADER } from '../actionTypes';

const INITIAL = {
  current: null
};

export default function pageReducer(state = INITIAL, action) {
  switch (action.type) {
    case SET_HEADER:
      return { ...state, current: action.payload };

    default:
      return state;
  }
}
