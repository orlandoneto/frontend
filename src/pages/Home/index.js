import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, StatusBar, View } from 'react-native';
import { Creators as productActions } from '~/store/ducks/products';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import BannerCarousel from '../../components/BannerCarousel';
import ProductsSlider from './components/ProductsSlider';

import Gradiente from '~/assets/svg/home/gradiente';

import { ViewGradiente } from './styles';

const mainBannersList = [
  {
    image:
      'https://paguemenos.vtexassets.com/assets/vtex.file-manager-graphql/images/57847803-4846-48cb-903e-311828a26279___884276f1afae8c2f167d700effcf10f3.jpg',
    mobileImage: '',
    description: '703',
  },
  {
    image:
      'https://paguemenos.vtexassets.com/assets/vtex.file-manager-graphql/images/b798a9dc-53e9-406c-9ad1-907579307675___cdfd8ce3e6cd849817f38aeadbd9269b.jpg',
    mobileImage: '',
    description: '875',
  },
  {
    image:
      'https://paguemenos.vtexassets.com/assets/vtex.file-manager-graphql/images/3b292969-726d-4c68-978f-f3350c9eb9aa___3918c9194ff742aecf90727c863c9c48.jpg',
    mobileImage: '',
    description: '322',
  },
];

const primarySubBannersList = [
  {
    image:
      'https://paguemenos.vtexassets.com/assets/vtex.file-manager-graphql/images/145209ea-8fdf-49ca-84a2-927cd1220d9e___39a636d4393c207fbecaab9f6b8492bc.jpg',
    mobileImage: '',
    description: '893',
  },
  {
    image:
      'https://paguemenos.vtexassets.com/assets/vtex.file-manager-graphql/images/3b5106c7-520f-4b9a-8d81-fba044a01741___414bffcc4fb0fff2c5793a7a0bc9cf94.jpg',
    mobileImage: '',
    description: '861',
  },
  {
    image:
      'https://paguemenos.vtexassets.com/assets/vtex.file-manager-graphql/images/0640cc0a-035e-4a41-86f6-1651ad4628e5___58673f4db5c9769a61e7ef128ae53b2c.jpg',
    mobileImage: '',
    description: '889',
  },
];

const secundarySubBannersList = [
  {
    image:
      'https://paguemenos.vtexassets.com/assets/vtex.file-manager-graphql/images/9be99bd5-4a94-4165-af98-e2eef2f3b90e___642919fea3f971c458159cc3db773479.jpg',
    mobileImage: '',
    description: '864',
  },
  {
    image:
      'https://paguemenos.vtexassets.com/assets/vtex.file-manager-graphql/images/9b9fcd63-9c9e-4a6c-b38c-08b51fc89cc3___a19abdb2d3fa6aa3b131e2764af6e936.jpg',
    mobileImage: '',
    description: '556',
  },
  {
    image:
      'https://paguemenos.vtexassets.com/assets/vtex.file-manager-graphql/images/aab2bbf7-5b5b-43d9-a7c1-f87daeb3cde7___88bb35f434f1fadc63ff5217654d159e.jpg',
    mobileImage: '',
    description: '556',
  },
  {
    image:
      'https://paguemenos.vtexassets.com/assets/vtex.file-manager-graphql/images/dd88d6b5-d134-4406-a9c6-dd6dbc55f8b6___f6043885210a4ba99a4ef2364cef7105.jpg',
    mobileImage: '',
    description: '',
  },
  {
    image:
      'https://paguemenos.vtexassets.com/assets/vtex.file-manager-graphql/images/df9ad313-62fa-4c20-a322-b5122a393a5c___1513e77c2d237318e195e0788e9a1c95.png',
    mobileImage: '',
    description: '847',
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { productList } = useSelector(state => state.products);

  console.log(JSON.stringify(secundarySubBannersList));

  useEffect(() => {
    dispatch(productActions.getAllProductsRequest());
  }, [dispatch]);

  useFocusEffect(
    useCallback(() => {
      navigation.dangerouslyGetParent()?.setOptions({ tabBarVisible: true });
    }, [navigation])
  );

  return (
    <View>
      <ScrollView contentContainerStyle={{ backgroundColor: '#fff' }}>
        <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />

        <ViewGradiente>
          <Gradiente />
        </ViewGradiente>
        <BannerCarousel bannerList={mainBannersList} main />

        {Object.keys(productList).length > 0 && (
          <ProductsSlider subtitle={'As Melhores Ofertas em'} title={' Minha vitrine'} data={productList} />
        )}

        {Object.keys(productList).length > 0 && (
          <ProductsSlider subtitle={'As Melhores Ofertas em'} title={' Minha vitrine'} data={productList} />
        )}

        <BannerCarousel bannerList={primarySubBannersList} main={false} />

        {Object.keys(productList).length > 0 && (
          <ProductsSlider subtitle={'As Melhores Ofertas em'} title={' Minha vitrine'} data={productList} />
        )}

        {Object.keys(productList).length > 0 && (
          <ProductsSlider subtitle={'As Melhores Ofertas em'} title={' Minha vitrine'} data={productList} />
        )}

        <BannerCarousel bannerList={secundarySubBannersList} main={true} />
      </ScrollView>
    </View>
  );
};
export default Home;
