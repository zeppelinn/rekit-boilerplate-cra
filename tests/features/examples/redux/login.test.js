import {
  EXAMPLES_LOGIN,
} from '../../../../src/features/examples/redux/constants';

import {
  login,
  reducer,
} from '../../../../src/features/examples/redux/login';

describe('examples/redux/login', () => {
  it('returns correct action by login', () => {
    expect(login()).toHaveProperty('type', EXAMPLES_LOGIN);
  });

  it('handles action type EXAMPLES_LOGIN correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: EXAMPLES_LOGIN }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
