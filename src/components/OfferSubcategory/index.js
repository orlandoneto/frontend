import React, { useEffect, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as productsActions } from '~/store/ducks/products';
import { useRoute } from '@react-navigation/native';

import OfferCategory from './components/OfferCategory';

const Index = () => {
  const dispatch = useDispatch();
  const route = useRoute();

  const { offerCollectionsName } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(productsActions.getOfferCollectionNameByIdRequest(1));
  }, [route, dispatch]);

  const carroselList = useCallback(() => {
    if (offerCollectionsName?.length === 0) return <></>;
    else {
      return offerCollectionsName.map((item, index) => (
        <OfferCategory
          key={index}
          subtitle={item.collectionName}
          title={item.collectionName}
          data={item}
        />
      ));
    }
  }, [offerCollectionsName]);

  return <>{carroselList()}</>;
};
export default Index;
