import { createActions, createReducer } from 'reduxsauce';

const initialState = {
  items: [],
  cartItems: [],
  totalProducts: 0,
  subTotal: 0,
};

export const { Types, Creators } = createActions({
  getAddProductToCart: ['product'],
  getRemoveProductToCart: ['product'],
  getUpdateProductToCart: ['product'],
});

const getAddProductToCart = (state = initialState, { product }) => {
  const existingProduct = state.cartItems.filter(p => p.id === product.id);
  let cart = [];

  if (existingProduct && existingProduct.length === 0) {
    const obj = { ...product, quantity: 1 };
    cart = [...state.cartItems, obj];

    const subTotal = cart.reduce((prevVal, item) => prevVal + item.price, 0);

    return {
      ...state,
      cartItems: cart,
      items: [...state.items, product],
      totalProducts: [...state.items, product].length,
      subTotal: subTotal,
    };
  } else {
    const atualValue = (existingProduct[0].price += product.price);
    const atualQuantity = (existingProduct[0].quantity += 1);

    existingProduct.filter(p => p.id === product.id)[0].price = atualValue;
    existingProduct.filter(p => p.id === product.id)[0].quantity = atualQuantity;
    state.cartItems.filter(p => p.id === existingProduct.id)[0] = existingProduct;

    const subTotal = state.cartItems.reduce((prevVal, item) => prevVal + item.price, 0);

    return {
      ...state,
      cartItems: state.cartItems,
      items: [...state.items, product],
      subTotal: subTotal,
    };
  }
};

const getUpdateProductToCart = (state = initialState, { product }) => {
  state.cartItems.filter(p => p.id === product.id)[0] = product;
  const subTotal = state.cartItems.reduce((prevVal, item) => prevVal + item.price, 0);

  return {
    ...state,
    cartItems: state.cartItems,
    subTotal: subTotal,
  };
};

const getRemoveProductToCart = (state = initialState, { product }) => {
  for (let i = 0; i < state.cartItems.length; i++) {
    if (state.cartItems[i].id === product.id) {
      state.cartItems.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < state.items.length; i++) {
    if (state.items[i].id === product.id) {
      state.items.splice(i, 1);
      i--;
    }
  }
  const subTotal = state.cartItems.reduce((prevVal, item) => prevVal + item.price, 0);

  return {
    ...state,
    cartItems: state.cartItems,
    items: state.items,
    subTotal: subTotal,
  };
};

const cartHandlers = {
  [Types.GET_ADD_PRODUCT_TO_CART]: getAddProductToCart,
  [Types.GET_UPDATE_PRODUCT_TO_CART]: getUpdateProductToCart,
  [Types.GET_REMOVE_PRODUCT_TO_CART]: getRemoveProductToCart,
};

export default createReducer(initialState, cartHandlers);
