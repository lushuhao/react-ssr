import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, logout } from './store/actions'

class Header extends Component {
  render() {
    const {login, handleLogin, handleLogout} = this.props
    return (
      <header>
        <Link to="/">home</Link>
        <br/>
        {
          login ?
            <Fragment>
              <div onClick={handleLogout}>退出</div>
            </Fragment> :
            <div onClick={handleLogin}>登录</div>
        }
      </header>
    )
  }
}

export default connect(
  state => state.header,
  {
    handleLogin: login,
    handleLogout: logout
  })
(Header)