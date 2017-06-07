import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../../containers/TodoItem'
import Footer from '../Footer'

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    filteredTodos: PropTypes.array.isRequired,
    completedCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    handleShow: PropTypes.func.isRequired,
    handleClearCompleted: PropTypes.func.isRequired,
  }

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props
    if (todos.length > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === todos.length}
               onChange={actions.completeAll} />
      )
    }
  }

  renderFooter(completedCount) {
    const { todos, filter, handleShow, handleClearCompleted } = this.props
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={handleClearCompleted}
                onShow={handleShow} />
      )
    }
  }

  render() {
    const { actions, filteredTodos, completedCount } = this.props

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    )
  }
}
