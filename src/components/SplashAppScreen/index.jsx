/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, View } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import { LinearGradient } from 'expo-linear-gradient';

const SplashAppScreen = (props) => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={['#6041A5', '#6F45A8']}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={{ width: '50%', height: 100 }}
          resizeMode="contain"
          source={require('../../assets/images/globospace.png')}
          {...props}
        />
        <View style={{ height: 2 }}>
          <BallIndicator size={20} color="#fff" />
        </View>
      </View>
    </LinearGradient>
  );
};

export default SplashAppScreen;
