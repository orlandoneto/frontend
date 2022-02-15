import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
`;

export const LabelText = styled.Text`
  font-family: 'Roboto-Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 6px;
  color: ${(props) =>
    props.isFocused ? '#007DC5' : props.isErrored ? '#F14A50' : '#8c8c8c'};
`;

export const InputText = styled.TextInput`
  height: 45px;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  background: #ffffff;
  opacity: 0.8;
  border: ${(props) =>
    props.isFocused
      ? '2px solid #007DC5'
      : props.isErrored
      ? '2px solid #F14A50'
      : '2px solid #e8e8e8'};
  border-radius: 4px;
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: #666666;
`;

export const ErrorContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const ErrorText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: #f14a50;
  line-height: 17.68px;
  margin-left: 8px;
`;
