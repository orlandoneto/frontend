import React from 'react';

import {
  Container,
  ProductImageContainer,
  ProductImage,
  ProductName,
  DiscountContainer,
  ProductPriceText,
  AddToCardButton,
} from './styles';

const ProductCard = ({ side }) => {
  return (
    <Container side={side}>
      <ProductImageContainer>
        <ProductImage />
      </ProductImageContainer>
      <ProductName />
      <DiscountContainer />

      <ProductPriceText />
      <AddToCardButton />
    </Container>
  );
};

export default ProductCard;
