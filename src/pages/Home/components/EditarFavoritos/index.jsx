/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import Icon from 'react-native-vector-icons/Feather';
import { TitlePage } from 'styles';
import { styles } from './styles';

const EditarFavoritos = ({ data }) => {
  const renderItem = ({ item, drag, isActive }) => {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          isActive
            ? {
                opacity: 0.8,
              }
            : {},
        ]}
        onLongPress={drag}>
        <Text style={styles.texto}>{item.title}</Text>
        <Icon name="menu" style={styles.icon} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <TitlePage>Favoritos</TitlePage>
      <View style={styles.content}>
        <DraggableFlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => `draggable-item-${item.key}`}
        />
      </View>
    </View>
  );
};

export default EditarFavoritos;
