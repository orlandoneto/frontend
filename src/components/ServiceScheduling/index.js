import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ImageArea,
  InfoArea,
  Info,
  InfoLabel,
  Label,
  EmptyButton,
  EmptyButtonLabel,
  ButtomArea,
} from './styles';

import ServiceSchedulingIcon from '~/assets/svg/ServiceSchedulingIcon';

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ImageArea>
        <ServiceSchedulingIcon width='200.57' height='186' />
      </ImageArea>
      <InfoArea>
        <Info>Saúde e bem estar no seu bolso!</Info>
      </InfoArea>
      <InfoArea>
        <InfoLabel>
          <Label>Os serviços que a Pague Menos oferece na palma de suas mãos</Label>
        </InfoLabel>
      </InfoArea>
      <ButtomArea>
        <InfoLabel>
          <EmptyButton onPress={() => navigation.navigate('WebviewTestCovid')}>
            <EmptyButtonLabel>Selecionar serviço</EmptyButtonLabel>
          </EmptyButton>
        </InfoLabel>
      </ButtomArea>
    </Container>
  );
};
