/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import colors from 'styles/colors';

export const styles = StyleSheet.create({
  circleRow: {
    alignItems: 'center',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    marginRight: 10,
    width: 65,
  },
  container: {
    backgroundColor: colors.white,
    flexGrow: 0,
    padding: 15,
  },
  img: {
    borderColor: colors.white,
    borderRadius: 50,
    borderWidth: 2.5,
    height: 50,
    marginBottom: 5,
    top: 2,
    width: 50,
  },
  imgContent: {
    alignItems: 'center',
    borderRadius: 27,
    height: 54,
    justifyContent: 'center',
    width: 54,
  },
});

export const Text = styled.Text`
  font-size: 10px;
  font-family: 'Ubuntu-Bold';
  text-align: center;
`;
