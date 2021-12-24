import { applyMiddleware, createStore, compose } from "redux"
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'

import handleBlog from './blogs';
import authenticationReducer from './users';

const rootReducer = combineReducers({
  handleBlog,
  authenticationReducer,
})

const initState = {
  
}

export default function makeStore(initialState = initState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk)
    )
  )
  return store;
}
