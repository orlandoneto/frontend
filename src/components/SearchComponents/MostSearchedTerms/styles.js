import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 13px 0px 0px 12px;
`;

export const ContainerResults = styled.TouchableOpacity`
  margin-top: 12px;
  flex-direction: row;
`;

export const TitleText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 18px;
  color: #666666;
  font-weight: 500;
`;

export const NumberText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 14px;
  color: #007dc5;
  margin-right: 12px;
  margin-bottom: 14px;
`;

export const ResultText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: #666666;
  margin-bottom: 14px;
`;
