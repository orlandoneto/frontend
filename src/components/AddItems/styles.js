import styled, { css } from 'styled-components/native';
export const Container = styled.View`
  width: 100%;
  height: auto;
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.View`
  background-color: #007dc5;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-family: Roboto-Medium;
`;

export const TextArea = styled.View`
  width: 50%;
  justify-content: space-around;
`;

export const OtherTextArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const GreenText = styled.Text`
  font-size: 12px;
  font-family: Roboto-Regular;
  color: #00a02a;
  margin-top: 3px;
`;

export const GrayText = styled.Text`
  font-size: 16px;
  font-family: Roboto-Regular;
  color: #bababa;
  margin-right: 6px;
  margin-top: 3px;
  text-decoration-line: line-through;
`;

export const Price = styled.Text`
  font-size: 22px;
  font-family: Roboto-Bold;
  color: #666666;
`;
export const InputBox = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 40%;
  height: 46px;

  background-color: #ffffff;
  border: 0.5px solid rgba(243, 243, 243, 10);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

  border-radius: 4px;
`;

export const MinusArea = styled.View`
  width: 20px;
  height: 20px;
  justify-content: center;
`;

export const PlusArea = styled.View`
  width: 20px;
  height: 20px;
  justify-content: center;
`;

export const CouponArea = styled.View`
  margin-top: 22px;
  align-items: center;
  justify-content: center;
`;
