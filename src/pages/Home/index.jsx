import React, { useCallback, useState } from 'react';
import { FlatList, Dimensions, Platform, View } from 'react-native';
import { TabView } from 'react-native-tab-view';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import BottomSheet from 'reanimated-bottom-sheet';
import { CardNews, Loading } from 'components';
import { ContainerSafe } from 'styles/ui';
import { fullWidth, fullHeight, HEIGHT_TAB } from 'styles';
import { RoutesTabs } from 'helpers';
import TabBarCategoria from './TabBarCategoria';
import { styles } from './styles';
import TabBarStories from './components/TabBarStories';
import EditarFavoritos from './components/EditarFavoritos';
import { useNavigation } from '@react-navigation/native';
import { useCategoriasSpace } from 'hooks';

const Home = () => {
  const sheetRef = React.createRef();
  const navigation = useNavigation();
  const { categoriasRoutes, categoriasOpcoes } = useCategoriasSpace();
  const [nextSnapTo, setSnap] = useState(1);
  const [routes, setRoutes] = useState({
    index: 0,
    routes: categoriasRoutes,
  });

  function handleOnChangeIndex(index) {
    setRoutes((vals) => ({ ...vals, index }));
  }

  const renderContent = () => {
    return <EditarFavoritos data={categoriasOpcoes} />
  }

  function handleOpenLink(values) {
    navigation.navigate('WebPage', values);
  }

  const handleShowBottomSheet = useCallback(() => {
    sheetRef.current.snapTo(nextSnapTo);
  }, [nextSnapTo, sheetRef]);

  const onOpenStart = useCallback(() => {
    setSnap(0);
  }, [setSnap]);

  const onCloseStart = useCallback(() => {
    setSnap(1);
  }, [setSnap]);

  const renderTab = useCallback(
    (props) => {
      return <TabBarCategoria {...props} handleBottomSheet={handleShowBottomSheet} nextSnapTo={nextSnapTo}/>;
    },
    [routes.index, nextSnapTo]
  );

  const renderScene = useCallback(({ route }) => {
    if (Math.abs(routes.index - routes.routes.map((it) => it.key).indexOf(route.key) > 2)) {
      return null;
    }
    return (
      <FlatList
        data={route.news}
        ListHeaderComponent={route.key === 'Meu Espaço' ? TabBarStories : null}
        initialNumToRender={1}
        useNativeDriver
        keyExtractor={(item, index) => `news-${index}-${item.pubDate}`}
        renderItem={({ item }) => <CardNews item={item} route={route} openLink={handleOpenLink} />}
      />
    );
  }, []);

  return (
    <>
      <BottomSheet
        ref={sheetRef}
        enabledManualSnapping={false}
        snapPoints={[0, fullHeight - HEIGHT_TAB]}
        renderContent={renderContent}
        onOpenStart={onOpenStart}
        onOpenEnd={onOpenStart}
        onCloseStart={onCloseStart}
      />
      <ContainerSafe>
        <TabView
          style={styles.tabView}
          navigationState={routes}
          renderScene={renderScene}
          onIndexChange={handleOnChangeIndex}
          renderTabBar={renderTab}
          renderLazyPlaceholder={() => <Loading />}
          initialLayout={{ width: fullWidth }}
          useNativeDriver
          lazy
          removeClippedSubviews={Platform.OS === 'android'}
        />
      </ContainerSafe>
    </>
  );
};

export default gestureHandlerRootHOC(Home);
