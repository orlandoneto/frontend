import React from 'react';
import { useSelector } from 'react-redux';

import CartProduct from './components/CartProduct';
import FooterCart from './components/FooterCart';
import EmptyCart from './components/EmptyCart';

import { Container, ProductScroll } from './styles';

export default () => {
  const { cartItems, items, totalProducts } = useSelector(state => state.cart);

  return (
    <>
      <Container>
        {cartItems?.length === 0 ? (
          <EmptyCart />
        ) : (
          <ProductScroll>
            {cartItems.map((cartProduct, index) => (
              <CartProduct
                key={index}
                index={index}
                items={items}
                cartProduct={cartProduct}
                totalProducts={totalProducts}
              />
            ))}
          </ProductScroll>
        )}
        {cartItems && cartItems?.length > 0 && <FooterCart />}
      </Container>
    </>
  );
};
