import React, { useEffect, useState, useCallback } from 'react';
import { Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import LottieView from 'lottie-react-native';
import ShoppingBasketIcon from '~/assets/svg/shopping-basket-icon.svg';
import { Container, BadgeContainer, BadgeValue } from './styles';
import ShoppingBasketIconWhite from '~/assets/svg/shopping-basket-icon-white.svg';

import { Creators as cartActions } from '~/store/ducks/cart';

const BasketShopIconButton = ({ ...rest }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { items } = useSelector(state => state.cart);


  const [componenteCriado, setComponenteCriado] = useState(false);
  const [ativaAnimacao, setAtivaAnimacao] = useState(false);
  let timer;



  const handleNavigationToCart = () => {
    // dispatch(cartActions.cartSimularItemRequest(items, emailsList[0]?.document));
    navigation.navigate('Cart');
  };

  useEffect(() => {
    if (items.length > 0 && componenteCriado) {
      setAtivaAnimacao(true);

      // Controla a animação GIF via Timer
      timer = setTimeout(() => {
        handleFimAnimacao();
      }, 1000);
    } else {
      setComponenteCriado(true);
    }
  }, [items]);

  const handleFimAnimacao = () => {
    setAtivaAnimacao(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const cestaColor = useCallback(() => {
    if (rest.isWhite) return <ShoppingBasketIconWhite />;
    else return <ShoppingBasketIcon />;
  }, [rest.isWhite]);

  return (
    <Container accessibilityLabel='btn-cesta-home' onPress={handleNavigationToCart} {...rest}>
      {(!ativaAnimacao && cestaColor()) ||
        (ativaAnimacao && (
          <Image
            source={require('~/assets/animations/BasketShopIconAnimatedGIF.gif')}
            style={{ width: 27, height: 27 }}
          />
        ))}
      {items && items.length > 0 && !ativaAnimacao && (
        <BadgeContainer isBig={100}>
          <BadgeValue>{items.length}</BadgeValue>
        </BadgeContainer>
      )}
    </Container>
  );
};

export default BasketShopIconButton;
