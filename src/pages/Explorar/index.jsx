import React from 'react';
import { View } from 'react-native';
import { ContainerSafe, TitlePage } from 'styles/ui';
import { styles } from './styles';

const Explorar = () => {
  return (
    <ContainerSafe>
      <View style={styles.container}>
        <TitlePage>EXPLORAR</TitlePage>
      </View>
    </ContainerSafe>
  );
};

export default Explorar;
