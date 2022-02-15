import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  justify-content: center;
  height: 46px;
  background: #007dc5;
  opacity: ${(props) => (props.enabled ? 1 : 0.5)};
  border-radius: 4px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  color: #ffffff;
  font-size: 14px;
`;
