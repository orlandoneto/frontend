import styled from 'styled-components/native';

export const Modal = styled.View`
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 110px;
  padding-bottom: 5px;
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  border-color: rgba(243, 243, 243, 10);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05);
`;

export const ContainerTotal = styled.View`
  flex: 1;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30px;
`;

export const TotalLabel = styled.Text`
  height: 20px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 19px;

  color: #303030;
`;

export const TotalValue = styled.Text`
  height: 20px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 19px;

  color: #303030;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  margin-bottom: 4%;
  height: 46px;
  border-radius: 4px;
  background-color: #007dc5;
  justify-content: center;
  align-items: center;
`;

export const ButtonLabel = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;

  text-align: center;
  color: #ffffff;
`;

export const EmptyButton = styled.TouchableOpacity`
  width: 250px;
  height: 46px;
  border-radius: 4px;
  background-color: #007dc5;
  justify-content: center;
  align-items: center;
`;

export const EmptyButtonLabel = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  text-align: center;
  color: #ffffff;
`;

export const Indicator = styled.View`
  width: 100px;
  height: 4px;
  background-color: transparent;
  border-radius: 4px;
  align-self: center;
  margin-top: 15px;
`;
