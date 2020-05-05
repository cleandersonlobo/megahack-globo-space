import styled from 'styled-components/native';
import colors from './colors';

export const ContainerSafe = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Text = styled.Text`
  font-family: 'Ubuntu';
`;

export const TitlePage = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: ${colors.dark};
  opacity: 0.9;
  letter-spacing: 0.6px;
  margin-bottom: 15px;
`;
