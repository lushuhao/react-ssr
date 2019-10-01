import axios from 'axios'

export function getNews() {
  const url = 'http://static.lushuhao.cn/news.json'

  return axios.get(url).then(res => res.data)
}
