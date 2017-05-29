import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';

import {App} from './app/App';
import {Main} from './app/main';
import {Video} from './app/video';
import {Payments} from './app/Payments';

import './index.scss';

// Hash history no querykey
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main}/>
      <Route path="video" component={Video}/>
    </Route>
    <Route path="/pagos" component={Payments}/>
  </Router>,
  document.getElementById('root')
);
