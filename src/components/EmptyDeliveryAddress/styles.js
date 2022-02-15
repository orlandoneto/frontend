import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-content: center;
  background: #f9f9f9;
`;

export const ImageArea = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InfoArea = styled.View`
  justify-content: center;
`;

export const Info = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: rgba(0, 0, 0, 0.7);
`;

export const InfoLabel = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Label = styled.Text`
  width: 310px;
  margin-bottom: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: rgba(0, 0, 0, 0.5);
`;
