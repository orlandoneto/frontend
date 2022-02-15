import Utils from '~/utils/helpers/utils';

export const selectAllLogistics = (itemsCart, cep, email) => {
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
    clientProfileData: {
      email: email,
    },
  };

  return productFinal;
};

export const selectAllAddressStores = items => {
  if (items && items?.logisticsInfo) {
    const storeAddress = [];
    items.logisticsInfo[0]?.slas.map(sla => {
      if (sla.pickupStoreInfo.friendlyName !== null && !sla.pickupStoreInfo.friendlyName.includes('Locker')) {
        storeAddress.push(getList(items, sla));
      }
    });
    return storeAddress;
  }
  return [];
};

export const selectAllLockers = items => {
  if (items && items?.logisticsInfo) {
    const storeAddress = [];
    items.logisticsInfo[0]?.slas.map(sla => {
      if (sla.pickupStoreInfo.friendlyName !== null && sla.pickupStoreInfo.friendlyName.includes('Locker')) {
        storeAddress.push(getList(items, sla));
      }
    });

    return storeAddress;
  }
  return [];
};

export const selectAllDeliveryChannel = items => {
  if (Object.keys(items)?.length > 0) {
    // todos os fretes
    const allDelivery = [];
    // um tipo de cada frete
    const listIncludes = [];
    // um tipo de cada frete somado
    const storeAddress = [];

    items.logisticsInfo?.map(item => {
      item.slas?.map(sla => {
        if (sla.deliveryChannel !== 'pickup-in-point') {
          allDelivery.push(sla);
        }
      });
    });

    allDelivery.map(sla => {
      if (!listIncludes.includes(sla.name)) {
        listIncludes.push(sla.name);
      }
    });

    listIncludes.map(entrega => {
      const frete = allDelivery.filter(t => t.name === entrega);
      let price = 0;
      frete.map(item => {
        price += Number(item.price);
      });
      storeAddress.push({
        itemIndex: 0,
        name: frete[0].name,
        deliveryChannel: frete[0].deliveryChannel,
        shippingEstimate: frete[0].shippingEstimate,
        price,
      });
    });
    return storeAddress;
  }
  return [];
};

// Methods not exportable

function getList(items, sla) {
  return {
    itemIndex: 0,
    name: sla.name,
    addressId: Utils.isNull(sla.pickupStoreInfo.address, 'addressId'),
    addressType: Utils.isNull(sla.pickupStoreInfo.address, 'addressType'),
    deliveryChannel: sla.deliveryChannel,
    storeHours: getHoursStore(items, Utils.extractIdOfName(sla.name)),
    price: Number(sla.price),
    shippingEstimate: sla.shippingEstimate,
    pickupDistance: Utils.unitConversionKm(sla.pickupDistance),
    friendlyName: sla.pickupStoreInfo.friendlyName,
    additionalInfo: Utils.isNull(sla.pickupStoreInfo, 'additionalInfo'),
    city: Utils.isNull(sla.pickupStoreInfo.address, 'city'),
    state: Utils.isNull(sla.pickupStoreInfo.address, 'state'),
    street: Utils.isNull(sla.pickupStoreInfo.address, 'street'),
    cep: Utils.isNull(sla.pickupStoreInfo.address, 'postalCode'),
    complement: Utils.isNull(sla.pickupStoreInfo.address, 'complement'),
    number: Utils.isNull(sla.pickupStoreInfo.address, 'number'),
    neighborhood: Utils.isNull(sla.pickupStoreInfo.address, 'neighborhood'),
    latitude: Utils.isNullIndex(sla.pickupStoreInfo.address, 'geoCoordinates', 0),
    longitude: Utils.isNullIndex(sla.pickupStoreInfo.address, 'geoCoordinates', 1),
  };
}

function getHoursStore(items, id) {
  const object = items.pickupPoints.filter(p => Utils.extractIdOfString(p.id) === id);
  return object[0].businessHours;
}
