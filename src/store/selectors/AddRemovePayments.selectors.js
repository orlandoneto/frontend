export const selectAllPayments = (itemsCart, cep) => {
  const items = [];
  itemsCart.map(p => {
    items.push({
      id: p.id,
      quantity: p.quantity,
      seller: p.seller,
    });
  });

  const productFinal = {
    items,
    postalCode: cep,
    country: 'BRA',
  };

  return productFinal;
};

//Remover no futuro.
export const selectGetPriceItem = payments => {
  console.log('PAYSSSS ', payments);
  if (payments.paymentData) return payments.paymentData.installmentOptions[0].value;

  return {};
};
