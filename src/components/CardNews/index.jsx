import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import colors from 'styles/colors';
import { ProgressiveImage } from 'components';
import { formatNewDateUpdated } from 'helpers';
import {
  styles,
  Assunto,
  Titulo,
  CardBody,
  CardFooter,
  CardContent,
  CardHeader,
  Categorias,
  Descricao,
  Atualizado,
  ButtonIcon,
  Canal,
  CanalLogo,
} from './styles';

const CardNews = ({
  item: { title, editorial, provider, thumbnail, pubDate, canal, canalLogo, link },
  openLink,
}) => (
  <View style={styles.surface}>
    <CardContent
      onPress={() =>
        openLink({
          link,
          color: colors[provider],
          canal,
          canalLogo:
            canalLogo ||
            'https://oplanetatv.clickgratis.com.br/_upload/content/2019/01/14/saiba-quais-as-series-a-tv-globo-produzira-em-2019-5c3c7004a1060_featured.jpg',
        })
      }>
      <CardHeader>
        <Assunto color={colors[provider]}>{editorial || canal}</Assunto>
        <Categorias color={colors[provider]}>{provider}</Categorias>
      </CardHeader>
      <CardBody>
        {thumbnail ? (
          <ProgressiveImage style={styles.image} resizeMode="cover" source={{ uri: thumbnail }} />
        ) : null}
        <Titulo numberOfLines={4}>{title}</Titulo>
        <Descricao numberOfLines={2}>
          Empresa foi investigada pelo MPMG em 2016 quando empresários e políticos foram presos.
          Parte do acordo será destinada à UEMG e restante vai para o Estado; G1 procurou os
          envolvidos. Parcela de R$ 10,2 milhões será destinada ao custeio de projetos da
          Universidade Estadual de Minas Gerais (UEMG), de Frutal{' '}
        </Descricao>
        <View style={styles.canal}>
          <CanalLogo
            resizeMode="cover"
            source={{
              uri:
                canalLogo ||
                'https://oplanetatv.clickgratis.com.br/_upload/content/2019/01/14/saiba-quais-as-series-a-tv-globo-produzira-em-2019-5c3c7004a1060_featured.jpg',
            }}
          />
          <Canal>{canal}</Canal>
        </View>
      </CardBody>
    </CardContent>
    <CardFooter>
      <Atualizado>{formatNewDateUpdated(pubDate)}</Atualizado>
      <View style={styles.row}>
        <ButtonIcon>
          <Icon name="heart" size={20} />
        </ButtonIcon>
        <ButtonIcon>
          <Icon name="more-vertical" size={20} />
        </ButtonIcon>
      </View>
    </CardFooter>
  </View>
);

CardNews.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    pubDate: PropTypes.string.isRequired,
    editorial: PropTypes.string,
    provider: PropTypes.string.isRequired,
    canal: PropTypes.string.isRequired,
    canalLogo: PropTypes.string,
    link: PropTypes.string,
    thumbnail: PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
  }),
  openLink: PropTypes.func,
};

export default React.memo(CardNews);
