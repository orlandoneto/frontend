import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const productMargin = Dimensions.get('screen').width * 0.0195;
const screenPadding = Dimensions.get('screen').width * 0.042;

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export const Container = styled.View`
  flex: 1;
  height: 151px;
  background-color: #ffffff;
  box-shadow: 0px 0px 4.5px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  margin-bottom: 16px;
  ${css`
    elevation: 3;
  `}
  ${props =>
    props.side === 'left'
      ? css`
          margin-right: ${productMargin}px;
        `
      : css`
          margin-right: ${productMargin}px;
        `}
  margin-top: 8px;
`;

export const ProductImageContainer = styled.View``;

export const ProductImage = styled(ShimmerPlaceholder)`
  margin-top: 31px;
  margin-bottom: 2px;
  width: 60px;
  height: 65px;
  margin-left: 22px;
  border-radius: 3px;
`;



export const ProductName = styled(ShimmerPlaceholder)`
  height: 22px;
  margin-top: 2px;
  margin-left: 10px;
  margin-right: 4px;
  width: 80%;
  border-radius: 3px;
`;

export const DiscountContainer = styled(ShimmerPlaceholder)`
  height: 18px;
  width: 80px;
  margin-left: 11px;
  margin-top: 8px;
  margin-bottom: 7px;
  border-radius: 3px;
`;
