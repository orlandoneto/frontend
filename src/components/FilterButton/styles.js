import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 40px;
  background-color: #e8e8e8;
  border-radius: 20px;
`;

export const FilterText = styled.Text`
  font-family: 'Roboto-Regular';
  color: #666666;
  font-size: 14px;
  margin-left: 7px;
`;

export const BadgeContainer = styled.View`
  background-color: #f14a50;
  width: ${(props) => (props.isBig ? '20' : '14')}px;
  height: 14px;
  margin-left: 4px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const BadgeValue = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 11px;
  color: #ffffff;
`;
