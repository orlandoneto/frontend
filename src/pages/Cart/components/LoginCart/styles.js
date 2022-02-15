import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  margin-left: 37px;
  margin-right: 37px;
`;

export const Title = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #666666;

  padding-top: 13px;
  padding-bottom: 5px;
`;

export const InputLabel = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.action};

  margin-top: 8px;
  margin-bottom: 7px;
`;

export const InputEmail = styled.TextInput`
  background: #ffffff;
  opacity: 0.8;
  border: ${props => props.action};
  border-radius: 4px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #666666;

  padding: 12px;
`;

export const OrArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 20px;
  border-radius: 1px;

  margin-top: 5px;
`;
export const OrLeftArea = styled.View`
  height: 1px;
  border-radius: 1px;
  background: #bababa;
  flex: 1;
`;
export const OrRightArea = styled.View`
  height: 1px;
  flex: 1;
  border-radius: 1px;
  background: #bababa;
`;
export const OrTextArea = styled.View``;
export const OrText = styled.Text`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-right: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #8c8c8c;
`;

export const FormContainer = styled.View`
  margin-top: 11px;
  align-items: center;
`;

export const BottonsArea = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 6px;
`;
export const BottonsAreaGoogle = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;
export const BottonGoogleArea = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const BottonAppleArea = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const BottonCodEmailArea = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const BottonGoogle = styled.TouchableOpacity`
  padding: 0px 1%;
`;
export const BottonApple = styled.TouchableOpacity`
  padding: 0px 1%;
`;
export const BottonCodEmail = styled.TouchableOpacity`
  padding: 0px 8px;
`;
export const IconButtonGoogle = styled.Image``;
export const IconButtonApple = styled.Image``;
export const IconButtonEmail = styled.Image``;

export const ButtonCad = styled.TouchableOpacity`
  align-items: center;
  padding: 8px 0;
`;

export const ButtonCadLabel = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #0054a6;
`;

export const ButtonCadLabel2 = styled.Text`
  font-weight: bold;
  text-decoration-line: underline;
`;

export const ButtonRecPassword = styled.TouchableOpacity`
  align-items: flex-end;
  padding-top: 8px;
`;

export const ButtonRecPasswordLabel = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #0054a6;
  text-decoration-line: underline;
`;

export const ButtonLogin = styled.TouchableOpacity`
  background: ${props => (props.disabled ? '#ccc' : '#007dc5')};
  border-radius: 4px;
  padding: 13px 0px;
`;

export const ButtonLoginLabel = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;

export const ButtonVoltar = styled.TouchableOpacity`
  margin-top: 5px;
  align-items: center;
  padding: 8px 0;
`;

export const ButtonVoltarLabel = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #0054a6;
  text-decoration-line: underline;
`;

export const ErrorArea = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;
export const ErrorIcon = styled.Image``;
export const ErrorText = styled.Text`
  font-size: 14px;
  color: #f14a50;
  padding-left: 5px;
`;
