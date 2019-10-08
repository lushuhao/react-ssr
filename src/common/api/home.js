import request from './request';

export function getNews() {
  const url = '/news.json';
  return request.get(url).then(res => res.data);
}
