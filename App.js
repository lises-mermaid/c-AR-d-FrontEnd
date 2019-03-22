import React from 'react';
import { Provider } from 'react-redux';
import { Routes } from './components';
import store from './store';

export default (App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
));
