import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';

const inputWidth = Dimensions.get('screen').width * 0.66;
const inputWidthWhite = Dimensions.get('screen').width * 0.8;

const os = Platform.OS;

export const Container = styled.View`
  margin-top: 1%;
  width: ${inputWidthWhite}px;
  padding: ${os === 'ios' ? '12px' : '0 12px'};
  height: 45px;
  background: #f5f5f5;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${os === 'ios' ? '4%' : '2%'};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #666666;
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;
