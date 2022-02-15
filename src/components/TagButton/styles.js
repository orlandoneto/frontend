import styled, { css } from 'styled-components/native';

export const TouchableButton = styled.TouchableWithoutFeedback``;

export const ButtonContainer = styled.View`
  margin-right: 6px;
  margin-top: 6px;
  border-radius: 34px;
  padding: 4px 11px;
  justify-content: center;
  align-items: center;
  background-color: #e8e8e8;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #cce5f3;
    `}
`;

export const Title = styled.Text`
  text-align: center;
  color: #666666;
  font-size: 12px;
  ${(props) =>
    props.isSelected &&
    css`
      color: #007dc5;
    `}
`;
