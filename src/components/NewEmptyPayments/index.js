import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  AddCardArea,
  AddCardButton,
  ButtonText, 
  BackgroundImageArea,
  TextArea,
  BackgroundText,
} from './styles';

import BackgroundImage from '~/assets/svg/payments/add-cards';

const NewEmptyPayments = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <AddCardArea>
        <BackgroundImageArea>
          <BackgroundImage />
          <TextArea>
            <BackgroundText>Adicione seu cartão para</BackgroundText>
            <BackgroundText>pagar online! :)</BackgroundText>
          </TextArea>
        </BackgroundImageArea>
        <AddCardButton onPress={() => navigation.navigate('MyNewCard', { listPaymentCard: true })}>
          <ButtonText>Adicionar cartão</ButtonText>
        </AddCardButton>
      </AddCardArea>
    </Container>
  );
};

export default NewEmptyPayments;
