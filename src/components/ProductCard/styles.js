import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';
import colors from '~/styles/colors';

const productMargin = Dimensions.get('screen').width * 0.0195;
const screenPadding = Dimensions.get('screen').width * 0.042;

export const PRODUCT_CARD_WIDTH = Dimensions.get('screen').width * 0.438;
export const PRODUCT_CARD_HEIGHT = 305;

export const Container = styled.TouchableWithoutFeedback``;

export const Content = styled.View`
  background-color: #ffffff;
  margin: 16px;

  height: ${PRODUCT_CARD_HEIGHT}px;
  width: ${PRODUCT_CARD_WIDTH}px;

  ${props =>
    props.side === 'left'
      ? css`
          margin-right: ${productMargin}px;
          margin-left: ${screenPadding}px;
        `
      : css`
          margin-left: ${productMargin}px;
          margin-right: ${screenPadding}px;
        `}
  ${props =>
    props.lastItem &&
    css`
      margin-right: ${productMargin * 2 + screenPadding}px;
    `}
    box-shadow: 0px 0px 4.5px rgba(0, 0, 0, 0.12);
  ${css`
    elevation: 1;
  `}
  border-radius: 5px;
`;
export const HeaderDiscountContainer = styled.View`
  position: absolute;
  top: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 9%;
  width: 100%;
  background-color: #fde9ea;
  justify-content: center;
  align-items: center;
`;

export const LabDiscountText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  font-weight: bold;
  color: #f14a50;
  line-height: 15px;
`;

export const ProductImageContainer = styled.View``;

export const ProductImage = styled.Image`
  margin-top: 31px;
  margin-bottom: 2px;
  width: 108px;
  height: 117px;
  align-self: center;
`;

export const ProductName = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #666666;
  margin-left: 10px;
  margin-right: 4px;
  height: 50px;
  line-height: 16px;
`;
export const DiscountContainer = styled.View`
  flex-direction: row;
  height: 18px;
  margin-top: 8px;
  margin-bottom: 7px;
`;

export const PriceWithoutDiscountContainer = styled.View`
  height: 22px;
`;

export const PriceWithoutDiscountText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #a5a5a5;
  /* text-decoration-line: line-through; */
  text-decoration-style: solid;
  margin-left: 11px;
  margin-right: 9px;
`;

export const PercentageOffContainer = styled.View`
  padding: 2px 4px;
  background-color: ${colors.primary.lightBlue80};
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

export const PercentageOffText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 11px;
  color: #ffffff;
`;
export const ProductPriceText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  font-weight: bold;
  color: ${colors.primary.blue100};
  margin-left: 11px;
  /* text-decoration-line: ${props => props.lineThrough}; */
  text-decoration-style: solid;
`;

export const AddToCardButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: #007dc5;
  box-shadow: 0px 0px 4.5px rgba(0, 0, 0, 0.16);
  border-radius: 3.75px;
  margin: 10px;
  height: 30px;
  opacity: ${props => props.opacity};
`;
export const AddToCardButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 14px;
  color: #ffffff;
`;

export const HeaderDiscountAppContainer = styled.View`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 9%;
  width: 100%;
  background-color: #ff0000;
  justify-content: center;
  align-items: center;
`;

export const AppDiscountText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  line-height: 20px;
  padding-left: 6px;
`;

export const AreaButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 10px;
  /* margin-right: 10px; */

  background-color: #ffffff;
  border: 2px solid rgba(243, 243, 243, 10);
  border-radius: 2px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
`;

export const LabelTotal = styled.Text`
  margin-top: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;

  color: #666666;
`;

export const ButtonPlus = styled.TouchableOpacity`
  padding: 10px 12px;
`;
export const ButtonSubtract = styled.TouchableOpacity`
  padding: 10px 12px;
`;

export const DiscountKitContainer = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0px 0px 10px 10px;
`;

export const TextCouponLeve = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 13px;
  display: flex;
  align-items: center;

  color: #8c8c8c;
`;

export const TextCouponValor = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 13px;
  display: flex;
  align-items: center;
  color: #ed1d24;
`;

export const ViewPrice = styled.View`
  flex-direction: row;
  padding-top: 5px;
`;

export const TextUnit = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  margin-left: 6px;
  margin-top: 8px;
  color: #8c8c8c;
`;
