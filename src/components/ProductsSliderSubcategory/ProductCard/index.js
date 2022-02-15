import React, { useMemo, useCallback } from 'react';

import {
  Container,
  Content,
  ProductImageContainer,
  ProductImage,
  ProductName,
  DiscountContainer,
  PriceWithoutDiscountText,
  ProductPriceText,
  PriceSign,
  PriceDiscountSign,
  Price,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as productActions } from '~/store/ducks/products';

import formatTwoDecimal from '~/utils/helpers/formatTwoDecimal';

const ProductCard = ({ product, callAnimation }) => {
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

  const isPBM = useMemo(() => {
    return product?.pbm !== null && product?.pbm[0] === 'Sim';
  }, [product.pbm]);

  const naoApresentarPrecoDePor = useMemo(() => {
    return product.apresentarPrecoDePor && product.apresentarPrecoDePor[0] === 'Não';
  }, [product.apresentarPrecoDePor]);

  const mainProductImageUrl = useMemo(() => {
    return product?.items[0]?.images[0]?.imageUrl;
  }, [product.items]);

  const handleGoToProductDetails = useCallback(() => {
    dispatch(productActions.setSelectedProduct(product));
    navigation.navigate('ProductsPage');
  }, [dispatch, navigation, product]);

  return (
    <Container onPress={() => handleGoToProductDetails()}>
      <Content>
        <ProductImageContainer>
          <ProductImage source={{ uri: mainProductImageUrl }} />
        </ProductImageContainer>

        <ProductName numberOfLines={3}>
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
        </DiscountContainer>

        <ProductPriceText lineThrough={productNotPrice ? 'line-through' : 'none'}>
          <PriceSign>R$</PriceSign> {formatTwoDecimal(productPrice)}
        </ProductPriceText>
      </Content>
    </Container>
  );
};

export default ProductCard;
