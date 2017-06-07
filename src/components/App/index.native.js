import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../containers/Header';
import MainSection from '../../containers/MainSection';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = ({todos, actions}) => (
  <ScrollView
    contentInset={{ top: 20 }}
    style={styles.container}
  >
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} />
  </ScrollView>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  todo: {
    backgroundColor: 'red'
  }
});

export default App
