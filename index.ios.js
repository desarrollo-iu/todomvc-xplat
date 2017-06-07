/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers';
import App from './src/containers/App';

const store = createStore(reducer);

const TodoReduxWebNative = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('TodoReduxWebNative', () => TodoReduxWebNative);
