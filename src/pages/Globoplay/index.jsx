import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ContainerSafe, TitlePage, colors } from 'styles';
import { styles } from './styles';

const Globoplay = () => {
  return (
    <ContainerSafe>
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="play-circle" size={26} color={colors.dark} />
          <TitlePage style={styles.title}>PLAY</TitlePage>
        </View>
      </View>
    </ContainerSafe>
  );
};

export default Globoplay;
