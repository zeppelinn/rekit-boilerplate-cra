import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Page403 extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="examples-page-403">
        403: Forbidden.
        <div><Link to="/examples/login">去登录</Link></div>
      </div>
    );
  }
}
