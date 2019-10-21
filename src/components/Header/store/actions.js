import { getLoginInfo, loginInfo, logoutInfo } from '../../../common/api/header';
import { CHANGE_LOGIN } from './constants';

const changeLogin = (login) => {
  return {
    type: CHANGE_LOGIN,
    login,
  };
};
export const login = () => dispatch => loginInfo().then(res => {
  return dispatch(changeLogin(true));
});
export const logout = () => dispatch => logoutInfo().then(res => {
  return dispatch(changeLogin(false));
});

export const getHeaderInfo = () => dispatch => getLoginInfo().then(res => {
  return dispatch(changeLogin(res.data.data.login));
});

