// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
import {
  WelcomePage,
  CounterPage,
  RedditListPage,
  Layout,
  Login,
  Page403,
} from './';

export default {
  path: 'examples',
  name: 'Examples',
  component: Layout,
  childRoutes: [
    { path: '', name: 'Welcome page', component: WelcomePage },
    { path: 'counter', name: 'Counter page', component: CounterPage },
    { path: 'reddit',protected: true, name: 'Reddit list page', component: RedditListPage },
    { path: 'login', name: 'Login', component: Login },
    { path: '403', name: 'Page 403', component: Page403 },
  ],
};
