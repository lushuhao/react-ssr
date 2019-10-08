import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import routes from '../route/index';
import { render } from './utils';
import { getStore } from '../store';

const app = express();

app.use(express.static('public'));

app.use('/api', proxy('http://static.lushuhao.cn'));

app.get('*', (req, res) => {
  const store = getStore();

  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];

  matchedRoutes.forEach(({ route: { loadData } }) => {
    if (loadData) {
      promises.push(loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    res.send(render(store, routes, req));
  });
});

app.listen(3000, () => {
  console.log('listen: 3000');
});