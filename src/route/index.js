import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../page/Home/index'
import Login from '../page/Login/index'

export default [
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