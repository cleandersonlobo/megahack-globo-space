/* eslint-disable react/prop-types */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { TabBar } from 'react-native-tab-view';
import { styles, TextTab } from './styles';

const TabBarCategoria = ({ handleBottomSheet, nextSnapTo, ...props }) => {
  return (
    <View style={styles.row}>
      <View style={styles.contentButton}>
        <TouchableOpacity style={styles.button} onPress={handleBottomSheet}>
          <Icon name={['x', 'menu'][nextSnapTo]} size={30} />
        </TouchableOpacity>
      </View>
      <TabBar
        style={styles.tabbar}
        tabStyle={styles.tabStyle}
        indicatorStyle={styles.indicatorBox}
        scrollEnabled
        disabled
        bounces
        renderLabel={({ route, focused }) => (
          <TextTab allowFontScaling focused={focused}>
            {route.title}
          </TextTab>
        )}
        {...props}
      />
    </View>
  );
};

export default TabBarCategoria;
