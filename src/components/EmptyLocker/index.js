import React from 'react';

import { Container, ImageArea, InfoArea, InfoLabel, Label } from './styles';

import EmptyLocker from '~/assets/svg/EmptyLocker';

export default () => {
  return (
    <Container>
      <ImageArea>
        <EmptyLocker />
      </ImageArea>
      <InfoArea>
        <InfoLabel>
          <Label>Não encontramos lockers para retirada disponíveis próximo a você.</Label>
          <Label>Tente outro endereço, ou outra opção como a entrega e retirar na loja.</Label>
        </InfoLabel>
      </InfoArea>
    </Container>
  );
};
