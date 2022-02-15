import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-content: center;

  background-color: #f9f9f9;
`;

export const LinkArea = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;

  margin-top: 8px;
  margin-bottom: 32px;
  height: 30px;
`;

export const Link = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-decoration-line: underline;

  color: #007dc5;
`;

export const SummaryArea = styled.View`
  flex: 1;
  margin-bottom: 20px;
`;

export const SummaryTitle = styled.Text`
  margin-left: 3px;
  margin-bottom: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 19px;

  color: #303030;
`;

export const SummaryDetails = styled.View`
  flex: 1;
  height: 100px;
  padding-top: 5px;

  background-color: #ffffff;
  border: 0.5px solid rgba(243, 243, 243, 10);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05);

  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  border-width: 1px;
`;

export const SummaryQtd = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SummaryQtdLabel = styled.Text`
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 17px;

  color: #666666;
`;

export const SummaryQtdValue = styled.Text`
  margin-top: 8px;
  margin-bottom: 8px;
  margin-right: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 17px;
  text-align: right;

  color: #666666;
`;

export const SummaryDiscount = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const SummaryDiscountLabel = styled.Text`
  margin-left: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 17px;

  color: #666666;
`;

export const SummaryDiscountPrice = styled.Text`
  margin-right: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 17px;

  color: #8c8c8c;
`;

export const SummaryCoupon = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SummaryCouponLabel = styled.Text`
  margin-bottom: 10px;
  margin-left: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 17px;

  color: #666666;
`;

export const SummaryCouponButton = styled.TouchableOpacity``;

export const SummaryCouponPrice = styled.Text`
  margin-right: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 17px;

  color: #007dc5;
`;
export const SummaryDiscountArea = styled.View`
  flex: 1;
`;

export const SummaryLabel = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 17px;

  color: #666666;
`;

export const DiscountArea = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const DiscountButtonModal = styled.TouchableOpacity`
  margin-right: 10px;
`;
