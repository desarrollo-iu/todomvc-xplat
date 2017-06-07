import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import TodoTextInput from '../TodoTextInput'
import container from '../../containers/Header'

const Header = ({ handleSave }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>todos</Text>
    <TodoTextInput newTodo
                   onSave={handleSave}
                   placeholder="What needs to be done?" />
  </View>
)

Header.propTypes = {
  handleSave: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  headerText: { // via https://github.com/tastejs/todomvc-app-css/blob/master/index.css#L70
    margin: 16,
    marginTop: 24,
    fontSize: 72,
    fontWeight: '100',
    textAlign: 'center',
    color: 'rgba(175, 47, 47, 0.15)',
  }
})

export default container(Header)
