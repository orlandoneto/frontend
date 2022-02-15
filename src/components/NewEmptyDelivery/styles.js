import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-content: center;
`;

export const InfoArea = styled.View`
  flex: 1;
  position: absolute;

  margin-bottom: 20%;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
`;

export const Info = styled.Text`
  margin-top: 22px;
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #666666;
`;

export const ButtonArea = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
export const Button = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  background: #00a02a;
  border-radius: 4px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.14);
`;

export const ButtonLabel = styled.Text`
  color: #fff;
  font-size: 18px;
`;
