import React from 'react'
import { StaticRouter, Route } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

export const render = (store, routes, req, context) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>
          {renderRoutes(routes)}
        </div>
      </StaticRouter>
    </Provider>
  ))
  const css = context.css
  return `
    <html>
    <head>
      <title>react ssr</title>
      <style>${css}</style>
    </head>
    <body>
    <div id="root">${content}</div>
    <script>
       window.context = {state: ${JSON.stringify(store.getState())}}
    </script>
    <script src="/index.js"></script>
    </body>
    </html>
  `
}