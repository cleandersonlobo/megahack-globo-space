/* eslint-disable react-native/no-color-literals */
import { StyleSheet, Dimensions } from 'react-native';
import { colors } from 'styles';

const { width } = Dimensions.get('window');
export const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  cardImage: { backgroundColor: '#000', height: 100, width: (width - 80) / 2 },
  cardText: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    position: 'absolute',
    width: '100%',
  },
  container: {
    flex: 1,
  },
  containerList: {
    padding: 15,
  },
  header: { justifyContent: 'flex-start', padding: 15, width: width - 30 },
  icon: {
    marginRight: 10,
  },
  img: { height: 100, opacity: 0.4 },
  search: {
    elevation: 1,
  },
  text: {
    color: colors.white,
    fontFamily: 'Ubuntu-Bold',
    fontSize: 12,
    textTransform: 'uppercase',
  },
});
