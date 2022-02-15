import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const BadgeContainer = styled.View`
  position: absolute;
  background-color: #f14a50;
  padding: 0px 5px;

  border-radius: 8px;
  right: ${props => (props.isBig ? '3' : '5')}px;
  bottom: 5px;
  align-items: center;
  justify-content: center;
`;

export const BadgeValue = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 11px;
  color: #ffffff;
`;
