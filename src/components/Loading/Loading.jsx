import React from 'react';
import { View } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import PropTypes from 'prop-types';
import colors from 'styles/colors';
import { ContainerSafe } from 'styles/ui';
import styles from './styles';

const Loading = ({ size, color, visible }) =>
  visible ? (
    <ContainerSafe style={styles.container}>
      <View>
        <BallIndicator size={size} color={color} />
      </View>
    </ContainerSafe>
  ) : null;

Loading.propTypes = {
  visible: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.shape({}),
};

Loading.defaultProps = {
  size: 40,
  visible: true,
  color: colors.primary,
  style: {},
};
export default Loading;
