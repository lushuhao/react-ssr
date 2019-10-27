import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'

class Translation extends PureComponent {
  render() {
    return (
      this.props.login
        ? <p>翻译列表</p>
        : <Redirect to="/"/>
    )
  }
}

export default Translation