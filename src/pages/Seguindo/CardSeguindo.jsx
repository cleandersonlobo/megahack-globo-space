import React from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import { styles } from './styles';

const CardSeguindo = ({ nome, avatar }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardImage}>
        <Image source={{ uri: avatar }} resizeMode="cover" style={styles.img} />
      </View>
      <View style={styles.cardText}>
        <Text style={styles.text}>{nome.toLocaleUpperCase()}</Text>
        <View style={styles.icon}>
          <Icon name="more-vertical" color="#FFFFFF" size={20} />
        </View>
      </View>
    </View>
  );
};
CardSeguindo.propTypes = {
  nome: PropTypes.string,
  avatar: PropTypes.string,
};

export default CardSeguindo;
