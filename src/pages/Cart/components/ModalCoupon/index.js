import React, { useState, useEffect, useRef } from 'react';
import { Animated, KeyboardAvoidingView, Dimensions, Modal, Keyboard } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  ModalView,
  IndicatorStart,
  Button,
  ButtonLabel,
  TitleArea,
  Title,
  DescriptionArea,
  Description,
  InputDiscountArea,
  InputDiscount,
  OverlayCloseButton,
  OverlayBackground,
} from './styles';

import Colors from '~/styles/colors';

import { Creators as cartCreators } from '~/store/ducks/cart';
import { Creators as orderFormActions } from '~/store/ducks/orderForm';

export default ({ show, close }) => {
  const { primary, secundary } = Colors;

  const [couponField, setCouponField] = useState('');
  const [isActiveCoupon, setActiveCoupon] = useState(true);
  const [isCoupon, setIsCoupon] = useState(true);
  const [isValidCoupon, setIsValidCoupon] = useState(true);

  const { items } = useSelector(state => state.cart);
  const { emailsList } = useSelector(state => state.userCheck);

  const animatedHeight = useRef(new Animated.Value(0)).current;

  const dispatch = useDispatch();

  const handleApplyCoupon = text => {
    setCouponField(text);
    if (text.length > 30) setIsCoupon(false);
    if (text.length <= 0) setIsCoupon(true);

    if (text.length > 30) setActiveCoupon(false);
    if (text.length <= 0) setActiveCoupon(true);
  };

  const changeColorActiveCoupon = () => (isCoupon ? secundary.gray04 : primary.red80);

  const changeColorValidate = () => (isActiveCoupon ? secundary.gray04 : primary.red80);

  const handleCloseModal = async close => {
    setIsValidCoupon(true);
    dispatch(orderFormActions.setCupom(couponField));
    dispatch(cartCreators.cartSimularItemRequest(items, emailsList[0]?.document, '', '', couponField));
    closeModalEffect();
  };

  const openModalEffect = () => {
    Animated.timing(animatedHeight, {
      toValue: 250,
      duration: 550,
      useNativeDriver: false,
    }).start();
  };

  const closeModalEffect = () => {
    Keyboard.dismiss();
    Animated.timing(animatedHeight, {
      toValue: 0,
      duration: 750,
      useNativeDriver: false,
    }).start(close);
  };

  useEffect(() => {
    if (show) openModalEffect();
    else closeModalEffect();
  }, [dispatch, show]);

  return (
    <Modal visible={show} transparent={true} animationType='none'>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Container>
          <OverlayCloseButton onPress={close}>
            <OverlayBackground />
          </OverlayCloseButton>
          <ModalView>
            <IndicatorStart />
            <TitleArea>
              <Title>Aplicar cupom de desconto</Title>
            </TitleArea>
            <DescriptionArea>
              <Description color={changeColorActiveCoupon}>Possui um cupom? Insira abaixo:</Description>
            </DescriptionArea>

            <InputDiscountArea>
              <InputDiscount
                color={changeColorValidate}
                placeholder='CUPOM'
                placeholderTextColor='#8C8C8C'
                value={couponField}
                onChangeText={text => handleApplyCoupon(text)}
                autoCapitalize='characters'
                accessibilityLabel='input-cupom'
              />
            </InputDiscountArea>
            <Button
              valid={isActiveCoupon ? '#00a02a' : '#E8E8E8'}
              onPress={() => handleCloseModal(close)}
              disabled={!isActiveCoupon}
              accessibilityLabel='btn-aplicar'
            >
              <ButtonLabel>Aplicar</ButtonLabel>
            </Button>
          </ModalView>
        </Container>
      </KeyboardAvoidingView>
    </Modal>
  );
};
