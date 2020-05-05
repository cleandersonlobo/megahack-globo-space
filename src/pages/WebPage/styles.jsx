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
  flex-direction: row;
  align-items: center;
  height: 45px;
  padding-bottom: 15px;
  justify-content: space-between;
`;

export const ButtonBack = styled.TouchableOpacity`
  flex: 1;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: flex-start;
`;

export const Button = styled.TouchableOpacity`
  padding: 15px;
  justify-content: center;
  align-items: center;
`;

export const ContentUrl = styled.Text`
  flex: 2;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

export const ContentRight = styled.Text`
  flex: 1;
`;

export const Url = styled.Text`
  font-weight: bold;
  text-align: center;
  color: ${colors.dark};
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
  font-weight: 800;
  color: ${colors.dark};
  opacity: 1;
`;
