import React, { Component } from 'react'

class NotFound extends Component {
  render() {
    const {staticContext} = this.props
    staticContext && (staticContext.NOT_FOUND_ERR = true)
    return (
      <p>404, page not found</p>
    )
  }
}

export default NotFound