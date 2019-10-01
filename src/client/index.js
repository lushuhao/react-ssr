import React from 'react'
import ReactDOM from 'react-dom/'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../route/index'
import { Provider } from 'react-redux'
import { getStore } from '../store'

const App = () => (
  <Provider store={getStore()}>
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  </Provider>
)

ReactDOM.hydrate(<App/>, document.getElementById('root'))