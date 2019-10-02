import {
  SAVE_PROFILE,
  LOGOUT,
  SELECT_PROFILE,
  SIGN_IN,
  SET_USER_PROFILES
} from '../actionTypes';

export const GUEST_PROFILE = {
  id: 'guest-profile',
  playerName: 'Guest',
  playerPicture:
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=beautiful-brunette-cute-774909.jpg&fm=jpg&w=320'
};

const INITIAL = {
  selectedProfile: null,
  currentUser: null,
  savedProfiles: {}
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
      return {
        ...state,
        selectedProfile: null,
        currentUser: null
      };

    case SET_USER_PROFILES:
      return {
        ...state,
        savedProfiles: {
          ...action.payload.profiles,
          [GUEST_PROFILE.id]: GUEST_PROFILE
        }
      };
    default:
      return state;
  }
}
