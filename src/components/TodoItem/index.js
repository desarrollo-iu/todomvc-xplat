import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from '../TodoTextInput'

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
      <div className="view">
        <input className="toggle"
               type="checkbox"
               checked={todo.completed}
               onChange={() => completeTodo(todo.id)} />
        <label onDoubleClick={handleDoubleClick}>
          {todo.text}
        </label>
        <button className="destroy"
                onClick={() => deleteTodo(todo.id)} />
      </div>
    )
  }

  return (
    <li className={classnames({
      completed: todo.completed,
      editing: editing
    })}>
      {element}
    </li>
  )
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleDoubleClick: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  editing: PropTypes.bool,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoItem
