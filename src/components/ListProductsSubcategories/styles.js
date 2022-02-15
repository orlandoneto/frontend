import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const SEPARATOR_WIDTH = Dimensions.get('window').width * 0.045;

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-content: center;
  background: #f9f9f9;
  padding: 10px;
`;

export const Tittle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  /* Greys/005 */

  color: #666666;
`;

export const ButtonAddArea = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ButtonAdd = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: #007dc5;
  box-shadow: 0px 0px 4.5px rgba(0, 0, 0, 0.16);
  border-radius: 3.75px;
  height: 40px;
  width: 80px;
`;

export const ButtonAddText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;

  /* Primary/White */

  color: #ffffff;
`;
