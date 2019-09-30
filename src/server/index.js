import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from '../page/Home'

const app = express()

app.use(express.static('public'))

const content = renderToString(<Home/>)
app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>react ssr</title>
    </head>
    <body>
    <div id="root">${content}</div>
       <script src="/index.js"></script>
    </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log('listen: 3000')
})