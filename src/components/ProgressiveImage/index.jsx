/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageOverlay: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

class ProgressiveImage extends React.Component {
  thumbnailAnimated = new Animated.Value(1);

  imageAnimated = new Animated.Value(0);

  onImageLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 0,
      duration: 250,
    }).start();
    Animated.timing(this.imageAnimated, {
      toValue: 1,
      duration: 150,
    }).start();
  };

  render() {
    const { source, style, ...props } = this.props;

    return (
      <View style={styles.container}>
        <Animated.View
          {...props}
          style={[style, { opacity: this.thumbnailAnimated, backgroundColor: '#e1e4e8' }]}
          onLoad={this.handleThumbnailLoad}
          blurRadius={10}
        />
        <Animated.Image
          {...props}
          source={source}
          style={[styles.imageOverlay, { opacity: this.imageAnimated }, style]}
          onLoad={this.onImageLoad}
        />
      </View>
    );
  }
}

export default ProgressiveImage;
