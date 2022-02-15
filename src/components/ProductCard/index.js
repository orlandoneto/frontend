import React, { useMemo, useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Content,
  HeaderDiscountContainer,
  LabDiscountText,
  ProductImageContainer,
  ProductImage,
  ProductName,
  DiscountContainer,
  PriceWithoutDiscountContainer,
  PriceWithoutDiscountText,
  PercentageOffContainer,
  PercentageOffText,
  ProductPriceText,
  AddToCardButton,
  AddToCardButtonText,
  HeaderDiscountAppContainer,
  AppDiscountText,
  ButtonSubtract,
  ButtonPlus,
  LabelTotal,
  AreaButton,
  TextCouponLeve,
  TextCouponValor,
  DiscountKitContainer,
  TextUnit,
  ViewPrice,
} from './styles';

import { Creators as productActions } from '~/store/ducks/products';
import { Creators as cartActions } from '~/store/ducks/cart';

import formatTwoDecimal from '~/utils/helpers/formatTwoDecimal';
import DiscountUtils from '~/utils/discounts';

import PhoneCart from '~/assets/svg/phone-action-cart.svg';
import AddIcon from '~/assets/svg/cart/add';
import SubtractIcon from '~/assets/svg/cart/subtract';
import SubtractIconBlue from '~/assets/svg/cart/subtract-blue';

const ProductCard = ({ product, side, lastItem, contentContainerStyle = {}, callAnimation, offer }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { items } = useSelector(state => state.cart);
  const { sessionUser, sessionUserApp, sessionGoogle, sessionIOS, email } = useSelector(state => state.login);
  const [cardKit, setCardKit] = useState([]);

  const productPrice = useMemo(() => {
    return product?.items[0]?.sellers[0]?.commertialOffer?.price;
  }, [product.items]);

  const productLastPrice = useMemo(() => {
    return product?.items[0]?.sellers[0]?.commertialOffer?.listPrice;
  }, [product.items]);

  const productNotPrice = useMemo(() => {
    return productPrice === 0;
  }, [product.items]);

  const haveCardKit = useMemo(() => {
    if (product.items[0]?.sellers[0]?.commertialOffer?.teasers[0]?.value.toLowerCase().split(' ')[0].includes('leve')) {
      setCardKit(product.items[0]?.sellers[0]?.commertialOffer?.teasers[0]?.value.toLowerCase().split(' '));
      return true;
    } else return false;
  }, [product]);

  const valueCardKit = useMemo(() => {
    if (haveCardKit)
      return parseFloat((productPrice * Number(cardKit[1]?.slice(-1))) / Number(cardKit[0]?.slice(-1)))
        .toFixed(2)
        .replace('.', ',');
    else return '0,00';
  }, [cardKit]);

  const priceWithPBMDiscount = useMemo(() => {
    return productPrice - (productPrice * product.DescontoPBM) / 100;
  }, [product.DescontoPBM, productPrice]);

  const apresentarPrecoDePor = useMemo(() => {
    return product.apresentarPrecoDePor && product.apresentarPrecoDePor[0] === 'Sim';
  }, [product.apresentarPrecoDePor]);

  const isPBM = useMemo(() => {
    return product?.pbm && product.pbm[0] === 'Sim';
  }, [product]);

  const isPBMDiscount = useMemo(() => {
    return product?.pbm && product?.DescontoPBM > 0;
  }, [product]);

  const mainProductImageUrl = useMemo(() => {
    return product?.items[0]?.images[0]?.imageUrl;
  }, [product.items]);

  const emailResquest = useMemo(() => {
    return email || sessionUser || sessionUserApp?._user?.email;
  }, [sessionUserApp, sessionGoogle, sessionIOS]);

  const quantityInCart = useMemo(() => {
    return items.find(item => item.id === product?.productId)?.quantity || 0;
  }, [product, items, items.length, dispatch]);


  const handleGoToProductDetails = useCallback(() => {
    dispatch(productActions.setSelectedProduct(product));
    navigation.navigate('ProductsPage');
  }, [dispatch, navigation, product]);



  return (
    <Container accessibilityLabel={`btn-detalhes-produto`} onPress={() => handleGoToProductDetails()}>
      <Content style={contentContainerStyle} side={side} lastItem={lastItem}>
        {product?.items[0]?.sellers[0]?.commertialOffer?.teasers[0] ? (
          <HeaderDiscountContainer>
            <LabDiscountText>
              {DiscountUtils.friendlyDiscountText(product?.items[0]?.sellers[0]?.commertialOffer?.teasers[0]?.value)}
            </LabDiscountText>
          </HeaderDiscountContainer>
        ) : null}

        {product?.items[0]?.sellers[0]?.commertialOffer?.discountHighLight[0] ? (
          <HeaderDiscountContainer>
            <LabDiscountText>
              {DiscountUtils.friendlyDiscountText(
                product?.items[0]?.sellers[0]?.commertialOffer?.discountHighLight[0]?.value
              )}
            </LabDiscountText>
          </HeaderDiscountContainer>
        ) : null}

        {product?.items[0]?.sellers[0]?.commertialOffer?.discountHighLightApp && (
          <HeaderDiscountAppContainer>
            <PhoneCart fill='#FF0000' />
            <AppDiscountText>Exclusiva no App</AppDiscountText>
          </HeaderDiscountAppContainer>
        )}
        <ProductImageContainer>
          <ProductImage source={{ uri: mainProductImageUrl }} resizeMode='contain' />

        </ProductImageContainer>
        <ProductName numberOfLines={2}>
          {product.productName?.length < 38 ? `${product.productName}` : `${product.productName.substring(0, 60)}...`}
        </ProductName>

        {/* {isPBM && product?.DescontoPBM > 0 && (
          <DiscountContainer>
            <>
              <PriceWithoutDiscountText>R${formatTwoDecimal(productPrice)}</PriceWithoutDiscountText>
              <PercentageOffContainer>
                <PercentageOffText>{product.DescontoPBM}% OFF</PercentageOffText>
              </PercentageOffContainer>
            </>
          </DiscountContainer>
        )} */}

        <PriceWithoutDiscountContainer>
          {!isPBM && haveCardKit && (
            <DiscountKitContainer>
              <TextCouponLeve>Leve {!!cardKit.length ? cardKit[0].slice(-1) : ''} pague</TextCouponLeve>
              <TextCouponValor> R$ {valueCardKit} </TextCouponValor>
              <TextCouponLeve>cada</TextCouponLeve>
            </DiscountKitContainer>
          )}

          {!isPBM && !haveCardKit && apresentarPrecoDePor && (
            <PriceWithoutDiscountText>R$ {formatTwoDecimal(productLastPrice)}</PriceWithoutDiscountText>
          )}
        </PriceWithoutDiscountContainer>

        {isPBM && product.items[0].sellers[0].commertialOffer.discountHighLight.length == 0 && (
          <ProductPriceText>R$ {formatTwoDecimal(productPrice)}</ProductPriceText>
        )}

        {!isPBM && (
          <ViewPrice>
            <ProductPriceText lineThrough={productNotPrice ? 'line-through' : 'none'}>
              R$ {formatTwoDecimal(productPrice)}
            </ProductPriceText>
            {haveCardKit && <TextUnit>1 unid.</TextUnit>}
          </ViewPrice>
        )}

        {quantityInCart === 0 ? (
          <AddToCardButton
            opacity={productNotPrice ? 0.5 : 1}
            disabled={productNotPrice}
            onPress={() => (haveCardKit ? handleGoToProductDetails() : handleAddProductToCart(product))}
            accessibilityLabel={`btn-add-produto`}
          >
            {haveCardKit ? (
              <AddToCardButtonText accessibilityLabel={`btn-ver-mais-produto`}>Ver mais</AddToCardButtonText>
            ) : (
              <AddToCardButtonText accessibilityLabel={`btn-add-produto`}>Adicionar</AddToCardButtonText>
            )}
          </AddToCardButton>
        ) : (
          <AreaButton style={Platform.OS !== 'ios' ? { elevation: 1, shadowColor: '#000' } : ''}>
            {quantityInCart === 1 ? (
              <ButtonSubtract onPress={() => handleDecrement()} accessibilityLabel='btn-retira-produto'>
                <SubtractIcon width='14' height='14' />
              </ButtonSubtract>
            ) : (
              <ButtonSubtract onPress={() => handleDecrement()} accessibilityLabel='btn-retira-produto'>
                <SubtractIconBlue width='14' height='14' />
              </ButtonSubtract>
            )}
            <LabelTotal>{quantityInCart}</LabelTotal>
            <ButtonPlus onPress={() => handleIncrement()} accessibilityLabel='btn-add-produto'>
              <AddIcon width='14' height='14' />
            </ButtonPlus>
          </AreaButton>
        )}
      </Content>
    </Container>
  );
};

export default ProductCard;
