import React from 'react'
import {
  Animated,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Animation from 'lottie-react-native'
import {
  compose,
  lifecycle,
  withState,
} from 'recompose'
import PropTypes from 'prop-types'
import TodoTextInput from '../TodoTextInput'
import container from '../../containers/Header'
import animation from '../../animations/LottieLogo1.json'

const Header = ({ handleSave, animationProgress }) => (
  <View style={styles.header}>
    <Animation
        style={styles.headerLogo}
        source={animation}
        progress={animationProgress}
      />
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
  headerLogo: {
    flex: 1,
    height: 200,
  },
})

export default compose(
  withState('animationProgress', 'setAnimationProgress', new Animated.Value(0)),
  lifecycle({
    componentDidMount() {
      Animated.timing(this.props.animationProgress, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start()
    },
  }),
  container,
)(Header)
