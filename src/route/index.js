import React from 'react'
import { Route } from 'react-router-dom'

import App from '../App'
import Home from '../page/Home/index'
import Login from '../page/Login/index'

export default [{
  path: '/',
  component: App,
  routes: [
    {
      path: "/",
      exact: true,
      component: Home,
      loadData: Home.loadData,
      key: 'home',
    }, {
      path: "/login",
      exact: true,
      component: Login,
      key: 'login'
    },
  ]
}]