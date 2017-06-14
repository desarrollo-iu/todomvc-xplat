import React, { Component } from 'react'
import PropTypes from 'prop-types'

const container = T => class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return <T handleSave={this.handleSave} {...this.props} />
  }
}

export default container
