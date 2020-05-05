/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, View } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import { colors } from 'styles';

const SplashAppScreen = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.primay }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={{ width: 300, height: 50 }}
          resizeMode="contain"
          source={require('../../assets/images/globospace.png')}
          {...props}
        />
        <View style={{ height: 2 }}>
          <BallIndicator size={30} color="#fff" style={{ marginTop: 30 }} />
        </View>
      </View>
    </View>
  );
};

export default SplashAppScreen;
