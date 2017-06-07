import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native'
import PropTypes from 'prop-types'

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  state = {
    text: this.props.text || ''
  }

  handleSubmit = () => {
    this.props.onSave(this.state.text)
    if (this.props.newTodo) {
      this.setState({ text: '' })
    }
  }

  handleChangeText = text => this.setState({ text })

  handleBlur = () => {
    if (!this.props.newTodo) {
      this.props.onSave(this.state.text)
    }
  }

  render() {
    const { editing, newTodo, placeholder } = this.props
    return (
      <TextInput
        style={[
          styles.input,
          editing && styles.editing,
          newTodo && styles.newTodo,
        ]}
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChangeText={this.handleChangeText}
        onSubmitEditing={this.handleSubmit} />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 44,
    borderWidth: 0.5,
    borderColor: '#fafafa',
    padding: 8,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: 'white',
  },
  editing: {},
  newTodo: {}
})
