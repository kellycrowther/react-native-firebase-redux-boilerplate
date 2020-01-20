/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './core/reducer';
import epics from './core/epics';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = composeWithDevTools({
  realtime: true,
  hostname: 'localhost',
  port: 8000,
  suppressConnectErrors: false,
});

const store = createStore(
  rootReducer,
  /* Preloaded State, */
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(epics);

function createIndex() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => createIndex);
