/* This is the Root component mainly initializes Redux and React Router. */

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from './common/history';

//1.标记当前登录状态
let loggedIn;

function renderRouteConfigV3(routes, contextPath) {
  // Resolve route config object in React Router v3.
  const children = []; // children component list

  const renderRoute = (item, routeContextPath) => {
  //4.在解析JSON的时候去判断路由的protected属性，以及当前是否是登录状态
    if(item.protected && !loggedIn){
      //5.当路由处于保护状态并且用户没有登录的时候，我们把解析出来的路由对应的component重定位到403(禁止访问)
      //使用immutable的方式生成新的路由配置
      item = {
        ...item,
        component: () => (<Redirect to="/examples/403"/>),
        children:[],
      }
    }
    let newContextPath;
    if (/^\//.test(item.path)) {
      newContextPath = item.path;
    } else {
      newContextPath = `${routeContextPath}/${item.path}`;
    }
    newContextPath = newContextPath.replace(/\/+/g, '/');
    if (item.component && item.childRoutes) {
      const childRoutes = renderRouteConfigV3(item.childRoutes, newContextPath);
      children.push(
        <Route
          key={newContextPath}
          render={props => <item.component {...props}>{childRoutes}</item.component>}
          path={newContextPath}
        />
      );
    } else if (item.component) {
      children.push(<Route key={newContextPath} component={item.component} path={newContextPath} exact />);
    } else if (item.childRoutes) {
      item.childRoutes.forEach(r => renderRoute(r, newContextPath));
    }
  };

  routes.forEach(item => renderRoute(item, contextPath));

  // Use Switch so that only the first matched route is rendered.
  return <Switch>{children}</Switch>;
}

export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routeConfig: PropTypes.array.isRequired,
  };

  //3.因为Root组件没有绑定到Redux store，所以当store产生变化的时候，这里记录的路由状态不会自动更新
  //在这里监听store状态的变化，并强制更新该组件
  
  componentDidMount() {
    this.props.store.subscribe(() => {
      this.forceUpdate();
    })
  }

  render() {
    //2.在解析路由之前拿到当前用户登录状态
    loggedIn = this.props.store.getState().examples.loggedIn;
    const children = renderRouteConfigV3(this.props.routeConfig, '/');
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={history}>{children}</ConnectedRouter>
      </Provider>
    );
  }
}
