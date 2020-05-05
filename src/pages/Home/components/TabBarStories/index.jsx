import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { ProgressiveImage } from 'components';
import colors from 'styles/colors';
import { styles, Text } from './styles';

const MOCK_STORIES = [
  {
    id: '1',
    avatar:
      'https://servico.globoradio.globo.com/uploads/fotos/2019/07/01458911-a755-43b7-a268-ca15dfd0929d.jpg.400x400_q75_box-420%2C0%2C1500%2C1080_crop_detail.jpg',
    user: 'TOP 10',
    source:
      'https://servico.globoradio.globo.com/uploads/fotos/2019/07/01458911-a755-43b7-a268-ca15dfd0929d.jpg.400x400_q75_box-420%2C0%2C1500%2C1080_crop_detail.jpg',
    color: colors.gshow,
  },
  {
    id: '2',
    avatar: 'https://pbs.twimg.com/profile_images/1214293550218780682/XDALC3AU_400x400.jpg',
    source: 'https://pbs.twimg.com/profile_images/1214293550218780682/XDALC3AU_400x400.jpg',
    user: 'BBB 20',
    color: colors.gshow,
  },
  {
    id: '3',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Video_Show.jpg',
    source: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Video_Show.jpg',
    user: 'Video Show',
    color: colors.gshow,
  },
  {
    id: '4',
    avatar: 'https://img.estadao.com.br/thumbs/640/resources/jpg/4/7/1588348422074.jpg',
    source: 'https://img.estadao.com.br/thumbs/640/resources/jpg/4/7/1588348422074.jpg',
    user: 'Jornal Nacional',
    color: colors.g1,
  },
  {
    id: '5',
    avatar:
      'data:image/jpeg;base64,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',
    source:
      'data:image/jpeg;base64,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',
    user: 'Brasileirão',
    color: colors.globoesporte,
  },
];

const TabBarStories = () => {
  return (
    <FlatList
      style={styles.container}
      keyExtractor={(item) => item.id}
      data={MOCK_STORIES}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.circleRow}>
          <View style={[styles.imgContent, { backgroundColor: item.color }]}>
            <ProgressiveImage style={styles.img} source={{ uri: item.source }} />
          </View>
          <Text numberOfLines={1}>{item.user}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default TabBarStories;
