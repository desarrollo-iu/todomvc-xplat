import React, { Component } from 'react'
import PropTypes from 'prop-types'
import container from '../../containers/MainSection'
import TodoItem from '../../components/TodoItem'

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    filteredTodos: PropTypes.array.isRequired,
    completedCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    handleShow: PropTypes.func.isRequired,
    handleClearCompleted: PropTypes.func.isRequired,
  }

  render() {
    const { todos, actions, filteredTodos, completedCount } = this.props

    return (
      <View style={styles.main}>
        <View style={styles.todoList}>
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    margin: 16,
  },
  todoList: {
    backgroundColor: 'white',
  },
})

export default container(MainSection)
