import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';
import colors from '~/styles/colors';

export const PRODUCT_CARD_WIDTH = Dimensions.get('screen').width * 0.555;

export const Container = styled.TouchableWithoutFeedback``;

export const Content = styled.View`
  background-color: #ffffff;
  margin-bottom: 16px;
  height: 360px;
  width: ${PRODUCT_CARD_WIDTH}px;
  box-shadow: 0px 0px 4.5px rgba(0, 0, 0, 0.12);
  ${css`
    elevation: 1;
  `}
  border-radius: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const HeaderDiscountContainer = styled.View`
  position: absolute;
  top: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 9%;
  width: 100%;
  background-color: #fde9ea;
  justify-content: center;
  align-items: center;
`;

export const LabDiscountText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  font-weight: bold;
  color: #f14a50;
  line-height: 20px;
`;

export const HeaderDiscountAppContainer = styled.View`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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

export const ProductImageContainer = styled.View``;

export const ProductImage = styled.Image`
  margin-top: 40px;
  margin-bottom: 2px;
  width: 140px;
  height: 141px;
  align-self: center;
`;

export const ProductName = styled.Text`
  margin-top: 20px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #303030;
  margin-left: 14px;
  margin-right: 14px;
  height: 41px;
  line-height: 16px;
`;

export const DiscountContainer = styled.View`
  flex-direction: row;
  height: 22px;
  margin-bottom: 2px;
`;
export const PriceWithoutDiscountText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 13px;
  line-height: 22px;
  color: #a5a5a5;
  text-decoration-style: solid;
  margin-left: 15px;
  margin-right: 9px;
`;

export const PercentageOffContainer = styled.View`
  padding: 2px 4.5px;
  background-color: ${colors.primary.lightBlue80};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const PercentageOffText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
`;
export const ProductPriceText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  font-weight: bold;
  color: ${colors.primary.blue100};
  margin-left: 14px;
  text-decoration-line: ${props => props.lineThrough};
  text-decoration-style: solid;
`;
export const AddToCardButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: #007dc5;
  box-shadow: 0px 0px 4.5px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  margin: 10px;
  height: 38px;
  opacity: ${props => props.opacity};
`;
export const AddToCardButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 15px;
  color: #ffffff;
  line-height: 20px;
`;

export const PriceSign = styled.Text`
  color: ${colors.primary.blue100};
  font-size: 15px;
`;

export const PriceDiscountSign = styled.Text`
  color: #a5a5a5;
  font-size: 10px;
  margin-right: 10px;
`;

export const Price = styled.Text`
  text-decoration-line: line-through;
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
