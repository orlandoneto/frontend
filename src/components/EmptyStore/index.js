import React from 'react';

import { Container, ImageArea, InfoArea, InfoLabel, Label } from './styles';

import EmptyStore from '~/assets/svg/EmptyStore';

export default () => {
  return (
    <Container>
      <ImageArea>
        <EmptyStore />
      </ImageArea>
      <InfoArea>
        <InfoLabel>
          <Label>Não encontramos lojas para retirada disponíveis próximo a você. </Label>
          <Label>Tente outro endereço, ou outra opção como a entrega e locker.</Label>
        </InfoLabel>
      </InfoArea>
    </Container>
  );
};
