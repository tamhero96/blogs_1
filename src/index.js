import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {rootReducer} from './redux/reducers/index'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  compose (
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App  />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
