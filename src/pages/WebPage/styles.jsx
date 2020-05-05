import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { colors } from 'styles';

export const styles = StyleSheet.create({
  canal: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  footerButtons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  header: {
    borderBottomWidth: 0.4,
  },
  progress: {
    backgroundColor: colors.primary,
    height: 4,
  },
});
export const Header = styled.View`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  flex-direction: row;
  align-items: center;
  padding-bottom: 15px;
  justify-content: space-between;
`;

export const ButtonBack = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;

export const Button = styled.TouchableOpacity`
  padding: 15px;
  justify-content: center;
  align-items: center;
`;

export const ContentUrl = styled.View`
  flex: 9;
  justify-content: center;
  align-items: center;
`;

export const ContentRight = styled.Text`
  flex: 1;
`;

export const Url = styled.Text`
  font-family: 'Ubuntu-Bold';
  text-align: center;
  color: ${colors.dark};
`;

export const TextInputUrl = styled.TextInput`
  padding: 10px;
  font-family: 'Ubuntu-Medium';
  background-color: #eee;
  border-radius: 10px;
  color: ${colors.dark};
  opacity: 0.7;
`;

export const CanalLogo = styled.Image`
  height: 16px;
  width: 16px;
  border-radius: 24px;
  margin-right: 8px;
`;

export const CanalTexto = styled.Text`
  font-size: 12px;
  letter-spacing: 0.4px
  font-family: 'Ubuntu-Bold';
  color: ${colors.dark};
  opacity: 1;
`;
