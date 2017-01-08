import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import diffyApp from './reducers'
import App from './components/App'

let store = createStore(
  diffyApp, {},
  applyMiddleware(thunkMiddleware, promiseMiddleware())
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)