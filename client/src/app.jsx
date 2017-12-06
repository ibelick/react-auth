import React from 'react';
import ReactDom from 'react-dom';
import Routes from './config/routes.jsx'
import Auth from './modules/Auth'

ReactDom.render((
  <Routes />
), document.getElementById('react-app'));
