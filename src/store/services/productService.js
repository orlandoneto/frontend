import axios from 'axios';

const base = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const getAllProductsServices = async () => {
  const reqUrl = '/products';
  const response = await base.get(reqUrl);
  if (response.data && response.data.length === 0) return [];

  const newItems = [];
  response.data &&
    response.data.map(item => {
      newItems.push({
        ...item,
        quantity: 0,
      });
    });
  return newItems;
};

export const getSingleProductsServices = async id => {
  const reqUrl = `/products/${id}`;
  const response = await base.get(reqUrl);
  if (Object.keys(response.data).length === 0) return [];
  response.data.quantity = 0;
  return response;
};
