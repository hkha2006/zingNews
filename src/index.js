import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga";
import reducers from './Components/reudx/reducers'
import sagas from './Components/reudx/sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers(), {}, applyMiddleware(sagaMiddleware));
// const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
