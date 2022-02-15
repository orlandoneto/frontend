import styled from 'styled-components/native';

export const ModalContainer = styled.View``;

export const ContainerAnimation = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
  margin-left: 20%;
  margin-top: 55%;
`;

export const Tittle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin-top: 40%;

  /* Greys/004 */

  color: #8c8c8c;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 10%;
  margin-top: 15%;

  width: 80%;
  height: 46px;
  border-radius: 4px;
  background-color: ${props => props.colorBg};
  justify-content: center;
  align-items: center;
`;

export const ButtonLabel = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  text-align: center;
  color: #ffffff;
`;

export const TextButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: 17px;
  background-color: transparent;
`;

export const TextButtonLabel = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  display: flex;
  align-items: center;
  text-align: center;

  /* Primary/Light Blue */

  color: #007dc5;
`;
