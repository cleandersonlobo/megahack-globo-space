/* eslint-disable react-native/no-color-literals */
import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import colors from 'styles/colors';

const { width } = Dimensions.get('screen');
export const styles = StyleSheet.create({
  canal: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  image: {
    height: 200,
    marginBottom: 10,
    marginTop: 5,
    width: width - 30,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  surface: {
    backgroundColor: '#FFFFFF',
    elevation: 0,
    marginVertical: 10,
    padding: 15,
  },
});

export const Assunto = styled.Text`
  text-align: left;
  letter-spacing: 0.45px;
  font-family: 'Ubuntu-Bold';
  color: ${colors.dark};
  opacity: 0.6;
  font-size: 10px;
  margin-bottom: 5px;
`;

export const Categorias = styled.Text`
  margin-top: 15px;
  opacity: 0.9;
  margin-bottom: 15px;
  text-align: left;
  font-family: 'Ubuntu-Bold';
  color: ${(props) => props.color || colors.dark};
  font-size: 10px;
  margin-bottom: 5px;
`;

export const Atualizado = styled.Text`
  text-align: left;
  font-family: 'Ubuntu-Bold';
  color: ${colors.dark};
  opacity: 0.6;
  font-size: 10px;
  margin-bottom: 5px;
`;

export const CanalLogo = styled.Image`
  height: 24px;
  width: 24px;
  border-radius: 24px;
  margin-right: 8px;
`;

export const Canal = styled.Text`
  font-size: 12px;
  letter-spacing: 0.4px
  font-family: 'Ubuntu-Bold';
  color: ${colors.dark};
  opacity: 1;
`;

export const Titulo = styled.Text`
  letter-spacing: 0.4px;
  font-size: 18px;
  line-height: 26px;
  font-family: 'Ubuntu-Bold';
  padding-right: 15px;
  margin-bottom: 10px;
`;

export const Descricao = styled.Text`
  margin-bottom: 10px;
  opacity: 0.6;
  line-height: 20px;
  padding-right: 15px;
`;

export const LineVertical = styled.View`
  width: 5px;
  background-color: ${(props) => props.color || '#000'};
`;
export const CardContent = styled.TouchableOpacity`
  width: 100%;
  justify-content: space-around;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const CardBody = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const CardFooter = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`;

export const ButtonIcon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-left: 30px;
`;
