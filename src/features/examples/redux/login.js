// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  EXAMPLES_LOGIN,
} from './constants';

export function login() {
  return {
    type: EXAMPLES_LOGIN,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case EXAMPLES_LOGIN:
      return {
        ...state,
        loggedIn:true
      };

    default:
      return state;
  }
}
