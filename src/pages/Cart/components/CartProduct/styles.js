import styled from 'styled-components/native';

export const ContainerProduct = styled.View`
  flex: 1;
  margin-bottom: 15px;
`;

export const ShadowContainer = styled.View`
  flex: 1;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05);
`;

export const ProductArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  background-color: #ffffff;
  border: 0.5px solid rgba(243, 243, 243, 10);
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;

  border-width: 1px;
  border-bottom-width: 0px;
`;

export const ProductImage = styled.Image`
  flex: 0.5;
  height: 70px;
  padding: 17px;
`;

export const TextProductArea = styled.View`
  flex: 2;
  padding: 10px;
`;

export const DescriptionProduct = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
`;

export const InfoProduct = styled.Text`
  padding-top: 6px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;

  color: #8c8c8c;
`;

export const DiscountProductArea = styled.View`
  height: 30px;
  width: 100%;
  background: #ffebf1;
  border-radius: 5px;
  margin-top: 10px;
`;

export const DiscountProduct = styled.Text`
  margin-top: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  text-align: center;

  color: #f14a50;
`;

export const ValuePriceArea = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #ffffff;
  border: 0.5px solid rgba(243, 243, 243, 10);
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  border-width: 1px;
`;

export const AreaButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 120px;
  margin-left: 10px;

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

export const ValueArea = styled.View`
  margin: 19px;
`;
export const ValueProduct = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 19px;

  color: #666666;
`;

export const ButtonCloseArea = styled.View``;
export const ButtonClose = styled.TouchableOpacity`
  flex: 1;
  padding: 8px;
`;

export const DiscountContainer = styled.View`
  flex-direction: row;
  height: 18px;
  margin-top: 8px;
  margin-bottom: 7px;
`;
export const PriceWithoutDiscountText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #a5a5a5;
  text-decoration-line: line-through;
  text-decoration-style: solid;
  margin-left: 11px;
  margin-right: 9px;
`;
export const SignatureTouch = styled.TouchableOpacity``;
export const SignatureProduct = styled.Text`
  margin-top: 10px;
  height: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;

  color: #007dc5;
`;

export const HeaderDiscountAppContainer = styled.View`
  margin-top: 10px;

  display: flex;
  flex-direction: row;
  border-radius: 5px;
  height: 30px;
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
