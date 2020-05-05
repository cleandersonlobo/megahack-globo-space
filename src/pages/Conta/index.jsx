import React from 'react';
import { View } from 'react-native';
import { ContainerSafe, TitlePage } from 'styles/ui';
import { styles } from './styles';

const Conta = () => {
  return (
    <ContainerSafe>
      <View style={styles.container}>
        <TitlePage>PERFIL</TitlePage>
      </View>
    </ContainerSafe>
  );
};

export default Conta;
