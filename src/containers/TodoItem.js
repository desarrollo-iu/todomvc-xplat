import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItemComponent from '../components/TodoItem'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    return (
      <TodoItemComponent
        {...this.props}
        {...this.state}
        handleDoubleClick={this.handleDoubleClick}
        handleSave={this.handleSave}
      />
    )
  }
}
