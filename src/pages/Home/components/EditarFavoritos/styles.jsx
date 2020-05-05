import { StyleSheet } from 'react-native';
import { fullHeight, HEIGHT_TAB, colors } from 'styles';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  container: {
    backgroundColor: colors.white,
    height: fullHeight - HEIGHT_TAB,
    padding: 20,
  },
  content: {
    flex: 1,
  },
  icon: {
    color: colors.dark,
    fontSize: 30,
    opacity: 0.8,
  },
  texto: {
    color: colors.dark,
    fontFamily: 'Ubuntu-Medium',
    fontSize: 24,
    opacity: 0.8,
  },
});
