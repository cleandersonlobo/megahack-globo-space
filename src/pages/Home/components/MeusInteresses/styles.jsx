import { StyleSheet } from 'react-native';
import { fullHeight, HEIGHT_TAB, colors } from 'styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: fullHeight - HEIGHT_TAB,
    padding: 20,
  },
  content: {
    flex: 1,
  },
});
