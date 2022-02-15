import React from 'react';
import { Container, ButtonText } from './styles';

const BlueButton = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default BlueButton;
