import styled from 'styled-components/native';

export const ContainerModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 7px;
`;

export const Titulo = styled.Text`
  margin-top: ${props => props.position}px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 22px;
  text-align: center;

  color: #ffffff;
`;

export const ContainerBarCode = styled.View`
  /* position: absolute; */
  margin-top: 30%;
  width: 100%;
  height: 100%;
  padding-bottom: 30%;
`;
