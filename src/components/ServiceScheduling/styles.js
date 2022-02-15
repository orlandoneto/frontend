import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-content: center;
  background: #f9f9f9;
  padding: 10px;
`;

export const ImageArea = styled.View`
  margin-top: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InfoArea = styled.View`
  justify-content: center;
  margin-top: 20px;
`;

export const Info = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  width: 270px;

  color: rgba(0, 0, 0, 0.7);
`;

export const InfoLabel = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Label = styled.Text`
  width: 240px;
  height: 90px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: rgba(0, 0, 0, 0.5);
`;
export const ButtomArea = styled.View`
  justify-content: center;
`;
export const EmptyButton = styled.TouchableOpacity`
  width: 200px;
  height: 46px;
  border-radius: 4px;
  background-color: #007dc5;
  justify-content: center;
  align-items: center;
  justify-content: center;
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
