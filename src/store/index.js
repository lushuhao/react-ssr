import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as homeReducer } from '../page/Home/store'
import { reducer as headerReducer } from '../components/Header/store'

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer
})

const getStore = () => createStore(reducer, applyMiddleware(thunkMiddleware))

const getClientStore = () => {
  const defaultStore = window.context.state
  return createStore(reducer, defaultStore, applyMiddleware(thunkMiddleware))
}

export {
  getStore,
  getClientStore
}