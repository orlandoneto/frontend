import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const PRODUCT_CARD_WIDTH = Dimensions.get('screen').width * 0.4;
export const SEPARATOR_WIDTH = Dimensions.get('window').width * 0.045;

export const Container = styled.View`
  margin-bottom: 10px;
`;

export const HrTitle = styled.Text`
  background: #d9d9d9;
  border-radius: 1px;
  width: 45px;
  margin-left: 20px;
  margin-bottom: 10px;
  height: 2px;
  margin-top: -15px;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px 20px 20px;
`;

export const TitlesArea = styled.View``;

export const Title = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;

  margin-bottom: 5px;
  color: #4af4ff;
`;

export const SubTitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;

  color: #fff;
`;

export const BannerImage = styled.Image`
  width: ${PRODUCT_CARD_WIDTH}px;
  height: 139px;
`;
