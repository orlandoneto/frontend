import React from 'react';

import {
  Container,
  ProductImageContainer,
  ProductImage,
  ProductName,
  DiscountContainer,
} from './styles';

const ProductCard = ({ side }) => {
  return (
    <Container side={side}>
      <ProductImageContainer>
        <ProductImage />
      </ProductImageContainer>
      <ProductName />
      <DiscountContainer />
    </Container>
  );
};

export default ProductCard;
