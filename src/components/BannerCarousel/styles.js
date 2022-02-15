import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const horizontalMargin = 6;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth * 0.84 + horizontalMargin * 2;
const itemWidthSecodary = sliderWidth * 0.9 + horizontalMargin * 2;

export const Container = styled.View`
  height: ${props => (props.main ? 180 : 120)}px;
`;

export const BannerContainer = styled.View`
  width: ${sliderWidth}px;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding-left: ${horizontalMargin}px;
  padding-right: ${horizontalMargin}px;
`;

export const BannerImage = styled.Image`
  height: ${props => (props.main ? '160px' : '100px')};
  width: ${itemWidth - horizontalMargin * 2}px;
  border-radius: 6px;
`;
