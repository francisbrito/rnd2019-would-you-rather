import { SAVE_PROFILE, LOGOUT, SELECT_PROFILE } from '../actionTypes';

const GUEST_PROFILE = {
  id: 'guest-profile',
  playerName: 'Guest',
  playerPicture: 'https://via.placeholder.com/300?text=G'
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
    case LOGOUT:
      return INITIAL;
    default:
      return state;
  }
}
