import Utils from '~/utils/helpers/utils';

export const selectAllCartByCoupon = (productsList, textCoupon) => {
  let items = [];
  productsList.map(p => {
    items.push({
      id: p.id,
      quantity: p.quantity,
      seller: p.seller,
    });
  });

  let productFinal = {
    items,
    marketingData: {
      coupon: textCoupon,
    },
    country: 'BRA',
  };

  return productFinal;
};

export const selectBuildCartProduct = (product, itemsSimulation) => {
  let productCardList = [];
  itemsSimulation?.items?.map(item => {
    productCardList.push({
      serialID: Utils.generateUniqueKey(),
      item,
      product: product.find(p => p.productId == item.id),
    });
  });

  return productCardList;
};

export const selectQtdeProdutos = products => {
  if (Object.keys(products).length > 0) {
    const sum = products?.items?.reduce((prevVal, item) => prevVal + item.quantity, 0);
    return sum;
  }

  return 0;
};

export const selectTotalFinal = productsList => {
  if (productsList.length > 0) {
    let count = 0;
    productsList.map(p => {
      p.items.map(i => {
        i.sellers.map(s => {
          count += s.commertialOffer.price;
        });
      });
    });

    return count;
  } else return 0;
};

export const selectAtualizaQtdeItemCesta = (items, itemsSimulation, product, count) => {
  let itemList = itemsSimulation?.items.filter(i => i.id == product.productId);

  if (itemList?.length > 1) {
    const total = itemList?.reduce((prevVal, item) => prevVal + item.quantity, 0);
    for (let i in itemList) itemList[i].quantity = total + count;

    return buildItems(items, [
      {
        id: itemList[0].id,
        quantity: itemList[0].quantity,
        seller: itemList[0].seller,
      },
    ]);
  } else {
    let item = itemsSimulation.items.find(i => i.id == product.productId);
    return buildItems(items, [
      {
        id: item.id,
        quantity: item.quantity + count,
        seller: item.seller,
      },
    ]);
  }
};

export const selectValidateCoupon = products => {
  if (Utils.isKey(products, 'marketingData')) {
    if (products.marketingData === null) {
      return [0, 'Cupom inválido.'];
    }
  }

  if (Utils.isKey(products.marketingData, 'coupon')) {
    if (products.marketingData.coupon === null) {
      let message = products.messages.find(m => {
        return m.text.includes('Cupom') || m.text.includes('cupom');
      });

      return [0, message.text];
    }
  }

  return [1];
};

// Methods not exported

function buildItems(oldItems, product) {
  let items = [];
  oldItems?.map(oldItem => {
    if (oldItem.id == product[0].id) {
      items.push({
        id: Number(product[0].id),
        quantity: product[0].quantity,
        seller: Number(product[0].seller),
      });
    } else {
      items.push({
        id: oldItem.id,
        quantity: oldItem.quantity,
        seller: oldItem.seller,
      });
    }
  });
  return items;
}
