import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  width: 60px;
`;

export const TouchableButton = styled.TouchableWithoutFeedback``;

export const ButtonContainer = styled.View`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  border: 1px solid #d9d9d9;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
  
  ${(props) =>
    props.isSelected && 
    css`
      border-color: #80bee2;
      background-color: #cce5f3;
    `}
    ${(props) =>
      !props.isSelected &&
      css`
      
        background-color: #F9F9F9;
      `}
`;

export const Title = styled.Text`
  font-family: ${(props) =>
    props.isSelected ? 'Roboto-Medium' : 'Roboto-Regular'};
  margin-top: 4px;
  font-size: 12px;
  height: 40px;
  flex-wrap: wrap;
  text-align: center;
  color: #666666;
`;
