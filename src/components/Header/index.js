import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from '../TodoTextInput'

const Header = ({ handleSave }) => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput newTodo
                   onSave={handleSave}
                   placeholder="What needs to be done?" />
  </header>
)

Header.propTypes = {
  handleSave: PropTypes.func.isRequired
}

export default Header
