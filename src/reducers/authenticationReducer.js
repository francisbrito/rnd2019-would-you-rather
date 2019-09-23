import { SAVE_PROFILE, LOGOUT, SELECT_PROFILE, SIGN_IN } from '../actionTypes';

export const GUEST_PROFILE = {
  id: 'guest-profile',
  playerName: 'Guest',
  playerPicture: 'https://placekitten.com/300'
};

const INITIAL = {
  guestProfile: GUEST_PROFILE,
  selectedProfile: null,
  currentUser: null,
  savedProfiles: {
    [GUEST_PROFILE.id]: GUEST_PROFILE
  }
};

export default function authenticationReducer(state = INITIAL, action) {
  switch (action.type) {
    case SAVE_PROFILE:
      return {
        ...state,
        savedProfiles: {
          ...state.savedProfiles,
          [action.payload.profile.id]: action.payload.profile
        }
      };
    case SELECT_PROFILE:
      return {
        ...state,
        selectedProfile: action.payload.id
      };
    case SIGN_IN:
      return {
        ...state,
        currentUser: action.payload.user
      };
    case LOGOUT:
      return INITIAL;
    default:
      return state;
  }
}
