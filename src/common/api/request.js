import axios from 'axios';
import { env } from '../utils';

const instance = axios.create({
  baseURL: env.isClient ? '/api' : 'http://static.lushuhao.cn',
});

export default instance;