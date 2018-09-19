import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App'

const store = createStore(() => [], {}, applyMiddleware());

// proveder tag it is a react component that knows how to read changes from our redux store, any time thr redux store
// gets some new states produced inside of it, the provider will inform all of its children components.

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);