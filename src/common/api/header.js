import request from './request';

export function loginInfo() {
  const url = '/login.json';
  return request.get(url).then(res => res.data);
}

export function logoutInfo() {
  const url = '/logout.json';
  return request.get(url).then(res => res.data);
}

export function getLoginInfo() {
  const url = '/isLogin.json';
  return request.get(url).then(res => res.data);
}
