import React from 'react';
import { useSelector } from 'react-redux';

import {
  Modal,
  ContainerTotal,
  TotalLabel,
  TotalValue,
  Button,
  ButtonLabel,
  EmptyButton,
  EmptyButtonLabel,
} from './styles';

import Utils from '~/utils/helpers/utils';

export default () => {
  const { subTotal } = useSelector(state => state.cart);

  return (
    <>
      <Modal style={Platform.OS !== 'ios' ? { elevation: 1, shadowColor: 'rgba(0, 0, 0, 0.1)' } : ''}>
        <ContainerTotal>
          <TotalLabel>Total:</TotalLabel>
          <TotalValue accessibilityLabel={`label-total-cesta`}>R$ {Utils.formatoMoeda(subTotal)}</TotalValue>
        </ContainerTotal>

        <Button accessibilityLabel={'btn-seguir-entrega'} onPress={() => alert('Pedido enviado...')}>
          <ButtonLabel>Seguir para entrega</ButtonLabel>
        </Button>
      </Modal>
    </>
  );
};
