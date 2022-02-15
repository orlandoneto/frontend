import React, { useCallback } from 'react';
import { Platform } from 'react-native';

import { useDispatch } from 'react-redux';
import {
  ContainerProduct,
  ShadowContainer,
  ProductArea,
  TextProductArea,
  DescriptionProduct,
  ProductImage,
  InfoProduct,
  DiscountProductArea,
  DiscountProduct,
  ValuePriceArea,
  AreaButton,
  LabelTotal,
  ButtonPlus,
  ButtonSubtract,
  ValueArea,
  ValueProduct,
  ButtonCloseArea,
  ButtonClose,
  DiscountContainer,
  PriceWithoutDiscountText,
  SignatureProduct,
  SignatureTouch,
  HeaderDiscountAppContainer,
  AppDiscountText,
} from './styles';

import AddIcon from '~/assets/svg/cart/add';
import TrashIcon from '~/assets/svg/cart/trash';
import SubtractIcon from '~/assets/svg/cart/subtract';

import Utils from '~/utils/helpers/utils';

import { Creators as cartActions } from '~/store/ducks/cart';

export default ({ index, items, cartProduct, totalProducts }) => {
  const dispatch = useDispatch();

  const handleCountSubtract = useCallback(
    product => {
      const item = items.filter(i => i.id === product.id)[0];
      if (product.quantity !== 1) {
        product.price -= item.price;
        product.quantity -= 1;
        dispatch(cartActions.getUpdateProductToCart(product));
      }
    },
    [cartProduct]
  );

  const handleCountPlus = useCallback(
    product => {
      const item = items.filter(i => i.id === product.id)[0];
      product.price += item.price;
      product.quantity += 1;
      dispatch(cartActions.getUpdateProductToCart(product));
    },
    [cartProduct]
  );


  const handleRemoveItem = useCallback(
    product => {
      dispatch(cartActions.getRemoveProductToCart(product));
    },
    [cartProduct]
  );


  return (
    <>
      <ContainerProduct accessibilityLabel={`product-index-${index}`}>
        <ShadowContainer style={Platform.OS !== 'ios' ? { elevation: 1, shadowColor: 'rgba(0, 0, 0, 0.1)' } : ''}>
          <ProductArea accessibilityLabel={`product-index-${index}`}>
            <ProductImage source={{ uri: cartProduct?.image }} resizeMode='contain' />
            <TextProductArea>
              <DescriptionProduct>{cartProduct?.title}</DescriptionProduct>
            </TextProductArea>
            <ButtonCloseArea>
              <ButtonClose accessibilityLabel='btn-exclui-produto' onPress={() => handleRemoveItem(cartProduct)}>
                <TrashIcon width='25' height='25' />
              </ButtonClose>
            </ButtonCloseArea>
          </ProductArea>

          <ValuePriceArea>
            <AreaButton style={Platform.OS !== 'ios' ? { elevation: 1, shadowColor: '#000' } : ''}>
              <ButtonSubtract accessibilityLabel='btn-retira-produto' onPress={() => handleCountSubtract(cartProduct)}>
                <SubtractIcon width='14' height='14' />
              </ButtonSubtract>

              <LabelTotal accessibilityLabel={`${cartProduct?.quantity}_prod_${index}`}>
                {cartProduct?.quantity}
              </LabelTotal>

              <ButtonPlus accessibilityLabel={'btn-add-produto'} onPress={() => handleCountPlus(cartProduct)}>
                <AddIcon width='14' height='14' />
              </ButtonPlus>
            </AreaButton>

            <ValueArea>
              {cartProduct?.price > 0 && <ValueProduct>R$ {Utils.formatoMoeda(cartProduct?.price)}</ValueProduct>}
            </ValueArea>
          </ValuePriceArea>
        </ShadowContainer>
      </ContainerProduct>
    </>
  );
};
