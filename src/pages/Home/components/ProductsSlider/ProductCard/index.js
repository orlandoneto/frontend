import React, { useMemo, useCallback } from 'react';
import { Platform } from 'react-native';

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
  TextCouponLeve,
  TextCouponValor,
  DiscountKitContainer,
  TextUnit,
  ViewPrice,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';


import { Creators as productActions } from '~/store/ducks/products';
import { Creators as cartActions } from '~/store/ducks/cart';

import formatTwoDecimal from '~/utils/helpers/formatTwoDecimal';

const ProductCard = ({ product, contentContainerStyle = {} }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const productPrice = useMemo(() => {
    return product?.price;
  }, [product]);

  const mainProductImageUrl = useMemo(() => {
    return product?.image;
  }, [product]);

  const productNotPrice = useMemo(() => {
    return productPrice === 0;
  }, [product]);

  const handleGoToProductDetails = useCallback(() => {
    dispatch(productActions.getSingleProductsRequest(product.id));
    navigation.navigate('ProductsPage');
  }, [dispatch, navigation, product]);

  const handleAddProductToCart = useCallback(
    product => {
      dispatch(cartActions.getAddProductToCart(product));
    },
    [product]
  );

  return (
    <Container onPress={() => handleGoToProductDetails()}>
      <Content style={[contentContainerStyle, Platform.OS !== 'ios' ? { elevation: 2, shadowColor: '#000' } : '']}>
        <ProductImageContainer>
          <ProductImage source={{ uri: mainProductImageUrl }} />
        </ProductImageContainer>

        <ProductName numberOfLines={2}>
          {product?.title?.length < 65 ? `${product?.title}` : `${product?.title.substring(0, 65)}...`}
        </ProductName>

        <ViewPrice>
          <ProductPriceText lineThrough={productNotPrice ? 'line-through' : 'none'}>
            <PriceSign>R$</PriceSign> {formatTwoDecimal(productPrice)}
          </ProductPriceText>
        </ViewPrice>

        <AddToCardButton opacity={1} disabled={productNotPrice} onPress={() => handleAddProductToCart(product)}>
          <AddToCardButtonText accessibilityLabel={`btn-add-produto`}>Adicionar</AddToCardButtonText>
        </AddToCardButton>
      </Content>
    </Container>
  );
};

export default ProductCard;
