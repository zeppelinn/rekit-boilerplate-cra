import {
  EXAMPLES_LOGOUT,
} from '../../../../src/features/examples/redux/constants';

import {
  logout,
  reducer,
} from '../../../../src/features/examples/redux/logout';

describe('examples/redux/logout', () => {
  it('returns correct action by logout', () => {
    expect(logout()).toHaveProperty('type', EXAMPLES_LOGOUT);
  });

  it('handles action type EXAMPLES_LOGOUT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: EXAMPLES_LOGOUT }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
