import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from "./components/App";
import reducers from "./reducers";
console.log(1)
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
console.log('store', store)
console.log(2)

// proveder tag it is a react component that knows how to read changes from our redux store, any time thr redux store
// gets some new states produced inside of it, the provider will inform all of its children components.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
