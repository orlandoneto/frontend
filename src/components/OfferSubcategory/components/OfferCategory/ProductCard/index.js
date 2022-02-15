import React, { useMemo, useCallback } from 'react';

import {
  Container,
  Content,
  HeaderDiscountContainer,
  LabDiscountText,
  HeaderDiscountAppContainer,
  AppDiscountText,
  ProductImageContainer,
  ProductImage,
  ProductName,
  DiscountContainer,
  PriceWithoutDiscountText,
  PercentageOffContainer,
  PercentageOffText,
  ProductPriceText,
  AddToCardButton,
  AddToCardButtonText,
  PriceSign,
  PriceDiscountSign,
  Price,
  ButtonSubtract,
  ButtonPlus,
  LabelTotal,
  AreaButton,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import PhoneCart from '~/assets/svg/phone-action-cart.svg';
import AddIcon from '~/assets/svg/cart/add';
import SubtractIcon from '~/assets/svg/cart/subtract';
import SubtractIconBlue from '~/assets/svg/cart/subtract-blue';

import { Creators as productActions } from '~/store/ducks/products';
import { Creators as cartActions } from '~/store/ducks/cart';

import formatTwoDecimal from '~/utils/helpers/formatTwoDecimal';

import DiscountUtils from '~/utils/discounts';

const ProductCard = ({ product, contentContainerStyle = {}, callAnimation }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { sessionUser, sessionUserApp, sessionGoogle, sessionIOS, email } = useSelector(state => state.login);
  const { items } = useSelector(state => state.cart);

  const isDiscount = useMemo(() => {
    return product?.items[0]?.sellers[0]?.commertialOffer?.discount;
  }, [product]);

  const productPrice = useMemo(() => {
    return product?.items[0]?.sellers[0]?.commertialOffer?.price;
  }, [product.items]);

  const productNotPrice = useMemo(() => {
    return productPrice === 0;
  }, [product.items]);

  /* Ver utilidade
  const productListPrice = useMemo(() => {
    return product?.items[0]?.sellers[0]?.commertialOffer?.listPrice;
  }, [product.items]);

  const priceWithPBMDiscount = useMemo(() => {
    return productPrice - (productPrice * product?.DescontoPBM) / 100;
  }, [product?.DescontoPBM, productPrice]);*/

  const isPBM = useMemo(() => {
    return product?.pbm !== null && product?.pbm[0] === 'Sim';
  }, [product.pbm]);

  const naoApresentarPrecoDePor = useMemo(() => {
    return product.apresentarPrecoDePor && product.apresentarPrecoDePor[0] === 'Não';
  }, [product.apresentarPrecoDePor]);

  const mainProductImageUrl = useMemo(() => {
    return product?.items[0]?.images[0]?.imageUrl;
  }, [product.items]);

  const emailResquest = useMemo(() => {
    return email || sessionUser || sessionUserApp?._user?.email;
  }, [sessionUserApp, sessionGoogle, sessionIOS]);

  const quantityInCart = useMemo(() => {
    return items.find(item => item.id === product?.productId)?.quantity || 0;
  }, [product, items, items.length, dispatch]);


  const handleDecrement = () => {
  };

  const handleGoToProductDetails = useCallback(() => {
    console.log('### -- handleGoToProductDetails(product) -- ###');
    console.log(JSON.stringify(product));
    dispatch(productActions.setSelectedProduct(product));
    navigation.navigate('ProductsPage');
  }, [dispatch, navigation, product]);

  const handleAddProductToCart = useCallback(
    product => {
    },
    [product]
  );

  return (
    <Container onPress={() => handleGoToProductDetails()}>
      <Content style={contentContainerStyle}>
        {
          product?.items[0]?.sellers[0]?.commertialOffer?.discountHighLightApp && (
            <HeaderDiscountAppContainer>
              <PhoneCart fill='#FF0000' />
              <AppDiscountText>Exclusiva no App</AppDiscountText>
            </HeaderDiscountAppContainer>
          )
          // ||
          //   (isPBM && product?.items[0]?.sellers[0]?.commertialOffer?.discountHighLight?.length == 0 && (
          //     <HeaderDiscountContainer>
          //       <LabDiscountText>Desconto de laboratório</LabDiscountText>
          //     </HeaderDiscountContainer>
          //   ))
        }
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

        <ProductImageContainer>
          <ProductImage source={{ uri: mainProductImageUrl }} />
        </ProductImageContainer>

        <ProductName numberOfLines={2}>
          {product?.productName?.length < 65
            ? `${product?.productName}`
            : `${product?.productName.substring(0, 65)}...`}
        </ProductName>

        <DiscountContainer>
          {!naoApresentarPrecoDePor && (
            <PriceWithoutDiscountText>
              <PriceDiscountSign>R$</PriceDiscountSign>{' '}
              <Price>{formatTwoDecimal(product?.items[0]?.sellers[0]?.commertialOffer?.listPrice)}</Price>
            </PriceWithoutDiscountText>
          )}
          {isDiscount.length > 0 && (
            <PercentageOffContainer style={[naoApresentarPrecoDePor && { marginLeft: 15 }]}>
              <PercentageOffText>{product?.items[0]?.sellers[0]?.commertialOffer?.discount}</PercentageOffText>
            </PercentageOffContainer>
          )}
        </DiscountContainer>

        <ProductPriceText lineThrough={productNotPrice ? 'line-through' : 'none'}>
          <PriceSign>R$</PriceSign> {formatTwoDecimal(productPrice)}
        </ProductPriceText>

        {quantityInCart === 0 ? (
          <AddToCardButton
            opacity={productNotPrice ? 0.5 : 1}
            disabled={productNotPrice}
            onPress={() => handleAddProductToCart(product)}
          >
            <AddToCardButtonText>Adicionar</AddToCardButtonText>
          </AddToCardButton>
        ) : (
          <AreaButton style={Platform.OS !== 'ios' ? { elevation: 1, shadowColor: '#000' } : ''}>
            {quantityInCart === 1 ? (
              <ButtonSubtract onPress={() => handleDecrement()}>
                <SubtractIcon width='14' height='14' />
              </ButtonSubtract>
            ) : (
              <ButtonSubtract onPress={() => handleDecrement()}>
                <SubtractIconBlue width='14' height='14' />
              </ButtonSubtract>
            )}
            <LabelTotal>{quantityInCart}</LabelTotal>
            <ButtonPlus onPress={() => handleIncrement()}>
              <AddIcon width='14' height='14' />
            </ButtonPlus>
          </AreaButton>
        )}
      </Content>
    </Container>
  );
};

export default ProductCard;
