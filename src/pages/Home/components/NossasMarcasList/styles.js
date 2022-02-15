import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const PRODUCT_CARD_WIDTH = Dimensions.get('screen').width * 0.555;

export const SEPARATOR_WIDTH = Dimensions.get('window').width * 0.045;
export const Container = styled.View`
  margin-bottom: 10px;
`;

export const HeaderMenus = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;

export const ListLength = styled.Text`
  color: #666666;
  font-family: 'Roboto-Regular';
  font-style: italic;
  font-size: 14px;
`;