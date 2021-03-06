import React from 'react'
import Header from './components/Header'
import { renderRoutes } from 'react-router-config'
import { getHeaderInfo } from './components/Header/store'

const App = (props) => {
  return (
    <div>
      <Header staticContext={props.staticContext}/>
      {renderRoutes(props.route.routes)}
    </div>
  )
}

App.loadData = (store) => store.dispatch(getHeaderInfo())

export default App