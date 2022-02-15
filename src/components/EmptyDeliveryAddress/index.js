import React from 'react';

import { Container, ImageArea, InfoArea, InfoLabel, Label } from './styles';

import EmptyDeliveryAddress from '~/assets/svg/EmptyDeliveryAddress';

export default () => {
  return (
    <Container>
      <ImageArea>
        <EmptyDeliveryAddress />
      </ImageArea>
      <InfoArea>
        <InfoLabel>
          <Label>Não encontramos transportadora disponível para este endereço. </Label>
          <Label>Tente outro endereço, ou outra opção como o retirar na loja e locker.</Label>
        </InfoLabel>
      </InfoArea>
    </Container>
  );
};
