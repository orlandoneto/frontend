import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 4.5px rgba(0, 0, 0, 0.12);
  padding: 13px 0px 0px 12px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerResults = styled.View`
  margin-top: 16px;
  padding: 0 28px;
`;

export const TitleText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 18px;
  color: #666666;
  font-weight: 500;
`;

export const ResultText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: #666666;
  margin-bottom: 14px;
`;

export const SeeMore = styled.Text`
  color: #007DC5;
  margin-right: 12px;
`;

export const SearchTab = styled.View`
  height: 30px;
  background-color: #E8E8E8;
`;

export const Footer = styled.View`
  height: 40px;
  background-color: #FFFFFF;
`;

export const ProductImage = styled.View`
  width: 70px;
  height: 53px;
  background-color: #E8E8E8;
  margin-bottom: 19px;
  align-items: center;
  justify-content: center;
`;

export const ProductName = styled.Text`
  font-size: 12px;
  color: #666666;
  width: 73px;
  flex-wrap: wrap;
  margin-bottom: 9px;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-family: Roboto-Bold;
  color: #0054A6;
  width: 73px;
  flex-wrap: wrap;
  margin-bottom: 2px;
`;

export const OtherPrice = styled.Text`
  font-size: 12px;
  font-family: Roboto-Regular;
  color: #8C8C8C;
  width: 73px;
  flex-wrap: wrap;
  text-decoration-line: line-through;
  text-decoration-style: solid;
`;

