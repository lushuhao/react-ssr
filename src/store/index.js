import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as homeReducer } from '../page/Home/store'

const reducer = combineReducers({
  home: homeReducer
})

const getStore = () => createStore(reducer, applyMiddleware(thunkMiddleware))

export {
  getStore
}