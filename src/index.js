import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import diffyApp from './reducers'
import AppContainer from './containers/AppContainer'
import createLogger from 'redux-logger';

let store = createStore(
  diffyApp, {},
  applyMiddleware(
    thunkMiddleware, 
    promiseMiddleware(),
    createLogger()  
  )
)

render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('root')
)