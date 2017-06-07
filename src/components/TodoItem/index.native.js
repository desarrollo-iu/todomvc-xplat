import React from 'react'
import {
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import TodoTextInput from '../TodoTextInput'
import container from '../../containers/TodoItem'
import withFadeIn from '../../hocs/withFadeIn'

const TodoItem = ({
  todo, editing, completeTodo, deleteTodo, handleSave, handleDoubleClick
}) => {
  let element
  if (editing) {
    element = (
      <TodoTextInput text={todo.text}
                     editing={editing}
                     onSave={(text) => handleSave(todo.id, text)} />
    )
  } else {
    element = (
      <View style={styles.view} key={todo.id} todo={todo}>
        <Switch
          style={styles.toggle}
          value={todo.completed}
          onTintColor={'rgba(175, 47, 47, 0.25)'}
          onChange={() => completeTodo(todo.id)}
        />
        <TouchableOpacity
          style={styles.label}
          onPress={handleDoubleClick}
        >
          <Text
            style={[
              styles.text,
              todo.completed && styles.textCompleted
            ]}
          >
            {todo.text}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.destroy}
          onPress={() => deleteTodo(todo.id)}
        >
          <Text style={{ fontFamily: 'Verdana' }}>{'x'}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return element
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleDoubleClick: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  editing: PropTypes.bool,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    padding: 8,
    shadowOffset: { y: 0.5 },
    shadowOpacity: 0.2,
    shadowColor: 'black',
    shadowRadius: 0,
  },
  toggle: {},
  label: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 17,
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: 'lightgray'
  },
  destroy: {
    padding: 12
  }
})

export default withFadeIn(container(TodoItem))
