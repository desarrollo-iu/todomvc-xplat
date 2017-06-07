import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderComponent from '../components/Header'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return <HeaderComponent handleSave={this.handleSave} />
  }
}
