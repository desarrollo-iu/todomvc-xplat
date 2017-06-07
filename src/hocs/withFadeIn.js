import React from 'react';
import { Animated } from 'react-native';

const withFadeIn = T => class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 500,
        useNativeDriver: true,
      }
    ).start();                        // Starts the animation
  }

  render() {
    const { fadeAnim } = this.state;
    const AnimatedT = Animated.createAnimatedComponent(T);

    return (
      <AnimatedT                     // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
        {...this.props}
      />
    );
  }
};

export default withFadeIn;
