import React from 'react';
import { View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { ContainerSafe, TitlePage } from 'styles/ui';

import { CategoriesList } from 'helpers';
import { styles } from './styles';
import CardSeguindo from './CardSeguindo';

const Seguindo = () => {
  return (
    <ContainerSafe>
      <View style={styles.container}>
        <FlatList
          data={CategoriesList}
          numColumns={2}
          ListHeaderComponent={
            <View style={styles.header}>
              <TitlePage>SEGUINDO</TitlePage>
              <Searchbar placeholder="Buscar no Globo Space" style={styles.search} />
            </View>
          }
          contentContainerStyle={styles.containerList}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => <CardSeguindo {...item} />}
        />
      </View>
    </ContainerSafe>
  );
};

export default Seguindo;
