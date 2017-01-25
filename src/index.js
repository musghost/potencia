import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import {Main} from './app/main';
import {Video} from './app/video';

import './index.scss';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}/>
    <Route path="/video" component={Video}/>
  </Router>,
  document.getElementById('root')
);
