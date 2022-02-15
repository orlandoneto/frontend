import React from 'react';

import { Container, ImageArea, InfoArea, Info, InfoLabel, Label } from './styles';

import EmptyCartIcon from '~/assets/svg/cart/empty-cesta';

export default () => {
  return (
    <Container>
      <ImageArea>
        <EmptyCartIcon width='200.57' height='186' />
      </ImageArea>
      <InfoArea>
        <Info>Ah não!</Info>
        <Info>Cesta vazia</Info>
      </InfoArea>
      <InfoLabel>
        <Label>Aproveite nossas ofertas!</Label>
      </InfoLabel>
    </Container>
  );
};
