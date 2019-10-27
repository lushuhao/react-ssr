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

  matchedRoutes.forEach(({route: {path, loadData}}) => {
    if (loadData) {
      const promise = new Promise(
        resolve =>
          loadData(store).then(resolve).catch(resolve)
      )
      promises.push(promise);
    }
  });

  Promise.all(promises).then(() => {
    const context = {}
    const html = render(store, routes, req, context)
    if (context.action === 'REPLACE') {
      return res.redirect(context.url)
    } else if (context.NOT_FOUND_ERR) {
      res.status(404)
    }
    res.send(html);
  });
});

app.listen(3000, () => {
  console.log('listen: 3000');
});