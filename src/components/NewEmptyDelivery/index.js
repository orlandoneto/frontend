import React, { useCallback } from 'react';

import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Container, InfoArea, Info, Button, ButtonLabel, ButtonArea } from './styles';

import GpsIcon from '~/assets/svg/withdrawalStoreLocker/gps.svg';
import { Creators as withdrawalActions } from '~/store/ducks/withdrawalStoreLocker';

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAddNewAddress = useCallback(() => {
    dispatch(withdrawalActions.setAddress(null));
    dispatch(withdrawalActions.setEditAddress(null));
    navigation.navigate('MyNewAddress');
  }, [dispatch]);

  return (
    <Container>
      <Image
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          resizeMode: 'stretch',
        }}
        source={require('~/assets/svg/withdrawalStoreLocker/bg.png')}
      />

      <InfoArea>
        <GpsIcon />
        <Info>Você ainda não possui</Info>
        <Info>endereços cadastrados.</Info>
      </InfoArea>

      <ButtonArea>
        <Button onPress={handleAddNewAddress}>
          <ButtonLabel>Adicionar endereço</ButtonLabel>
        </Button>
      </ButtonArea>
    </Container>
  );
};
