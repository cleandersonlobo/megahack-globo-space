/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { WebView } from 'react-native-webview';
import { fullWidth, ContainerSafe } from 'styles';
import {
  styles,
  Header,
  ContentRight,
  ContentUrl,
  Url,
  ButtonBack,
  Button,
  CanalLogo,
  CanalTexto,
} from './styles';

const WebPage = ({ navigation, route }) => {
  const [progress, setProgress] = useState(0);
  const {
    params: { link, canalLogo, canal },
  } = route;
  function handleBack() {
    navigation.goBack();
  }
  return (
    <ContainerSafe>
      <View style={styles.header}>
        <Header>
          <ButtonBack onPress={handleBack}>
            <Icon name="arrow-left-circle" color="#000" size={30} />
          </ButtonBack>
          <ContentUrl>
            <Url numberOfLines={0}>{link}</Url>
          </ContentUrl>
          <ContentRight />
        </Header>
        {progress < 1 && <View style={[styles.progress, { width: fullWidth * progress }]} />}
      </View>
      <WebView
        source={{ uri: link }}
        onLoadProgress={({ nativeEvent }) => {
          setProgress(nativeEvent.progress);
        }}
        mediaPlaybackRequiresUserAction
      />
      <View style={styles.footer}>
        <View style={styles.canal}>
          <CanalLogo
            resizeMode="cover"
            source={{
              uri: canalLogo,
            }}
          />
          <CanalTexto>{canal}</CanalTexto>
        </View>
        <View style={styles.footerButtons}>
          <Button>
            <Icon name="share" color="#000" size={16} />
          </Button>
          <Button>
            <Icon name="heart" color="#000" size={16} />
          </Button>
          <Button>
            <Icon name="more-vertical" color="#000" size={16} />
          </Button>
        </View>
      </View>
    </ContainerSafe>
  );
};

export default WebPage;
