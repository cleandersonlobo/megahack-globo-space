/* eslint-disable react-native/no-color-literals */
import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import colors from 'styles/colors';

const { width } = Dimensions.get('window');
export const styles = StyleSheet.create({
  button: { alignItems: 'center', justifyContent: 'center', minWidth: 30, top: 7 },
  contentButton: {
    backgroundColor: '#ffffff',
    height: 48,
    paddingLeft: 10,
    paddingRight: 15,
    position: 'absolute',
    right: 0,
    zIndex: 2,
  },
  indicatorBox: {
    backgroundColor: colors.purple,
    height: 4,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabStyle: {
    elevation: 0,
    flexDirection: 'row',
    shadowRadius: 0,
    width: 'auto',
  },
  tabUnderlineStyle: {
    backgroundColor: 'white',
    bottom: 0,
    height: 5,
    position: 'absolute',
  },
  tabView: {
    backgroundColor: '#eee',
  },
  tabbar: {
    backgroundColor: 'white',
    elevation: 0,
    overflow: 'hidden',
    width: width - 55,
  },
});

export const TextTab = styled.Text`
  color: ${colors.dark};
  font-size: 16px;
  line-height: 16px;
  height: 16px;
  opacity: ${(props) => (props.focused ? 1 : 0.6)};
  font-weight: 700;
  text-align: center;
`;
