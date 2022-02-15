import React from 'react';
import { TouchableButton, ButtonContainer, Title } from './styles';

const TagButton = ({ name, selected, onPress, ...rest }) => (
  <TouchableButton onPress={onPress} {...rest}>
    <ButtonContainer isSelected={selected}>
      <Title isSelected={selected}>{name}</Title>
    </ButtonContainer>
  </TouchableButton>
);

export default TagButton;
