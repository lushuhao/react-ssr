import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, logout } from './store/actions'
import styles from './index.css'

class Header extends Component {

  constructor(props) {
    super(props)
    if (props.staticContext) {
      props.staticContext.css.push(styles._getCss())
    }
  }

  render() {
    const {login, handleLogin, handleLogout} = this.props
    return (
      <header className={styles.header}>
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