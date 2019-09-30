import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../page/Home/index'
import Login from '../page/Login/index'

export default (
  <div>
    <Route path="/" exact component={Home}/>
    <Route path="/login" exact component={Login}/>
  </div>
)