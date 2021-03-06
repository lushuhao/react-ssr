import React from 'react'
import { Route } from 'react-router-dom'

import App from '../App'
import Home from '../page/Home/index'
import Login from '../page/Login/index'
import Translation from '../page/Translation/index'
import Adjoin from '../page/Adjoin/index'
import NotFound from '../page/NotFound'

export default [{
  path: '/',
  component: App,
  loadData: App.loadData,
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
    }, {
      path: "/translation",
      exact: true,
      component: Translation,
      key: 'translation'
    }, {
      path: "/adjoin",
      exact: true,
      component: Adjoin,
      key: 'adjoin'
    }, {
      component: NotFound,
      key: 'notFound'
    }
  ]
}]