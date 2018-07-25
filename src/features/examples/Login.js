import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Login extends Component {
  static propTypes = {
    examples: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { loggedIn } = this.props.examples;
    return (
      <div className="examples-login">
        {loggedIn ? (<button onClick={this.props.actions.logout}>log out</button>) : (<button onClick={this.props.actions.login}>log in</button>)}
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    examples: state.examples,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
