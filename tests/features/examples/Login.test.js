import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../../src/features/examples/Login';

describe('examples/Login', () => {
  it('renders node with correct class name', () => {
    const props = {
      examples: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Login {...props} />
    );

    expect(
      renderedComponent.find('.examples-login').length
    ).toBe(1);
  });
});
