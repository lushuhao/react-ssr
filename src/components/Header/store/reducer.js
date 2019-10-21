import { CHANGE_LOGIN } from './constants'

const defaultState = {
  login: true
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return {...state, login: action.login}
    default:
      return state;
  }
}