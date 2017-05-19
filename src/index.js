import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';

import {Main} from './app/main';
import {Video} from './app/video';

import './index.scss';

// Hash history no querykey
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" component={Main}/>
    <Route path="video" component={Video}/>
  </Router>,
  document.getElementById('root')
);
