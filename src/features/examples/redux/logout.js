// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  EXAMPLES_LOGOUT,
} from './constants';

export function logout() {
  return {
    type: EXAMPLES_LOGOUT,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case EXAMPLES_LOGOUT:
      return {
        ...state,
        loggedIn:false
      };

    default:
      return state;
  }
}
