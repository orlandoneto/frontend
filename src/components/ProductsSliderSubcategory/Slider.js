import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Dimensions } from 'react-native';
import ProductCard from './ProductCard';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Carousel from 'react-native-snap-carousel';

import ArrowRightBlueIcon from '~/assets/svg/arrow-right-blue';

import {
  Container,
  Header,
  SubTitleVitrine,
  TitlesArea,
  HrTitle,
  TextoBotao,
  TitlesAreaVerMais,
  VerMaisTouch,
  ArrowArea,
} from './styles';

import ProductShimeCard from './ProductShimeCard';

import { Creators as categoriesActions } from '~/store/ducks/categories';
import { Creators as productActions } from '~/store/ducks/products';

const imageWidth = Dimensions.get('screen').width * 0.29;
const sliderWidth = Dimensions.get('window').width;

const shimeProducts = [
  {
    productId: '1',
    shime: true,
  },
  {
    productId: '2',
    shime: true,
  },
  {
    productId: '3',
    shime: true,
  },
];

const Slider = ({ subCategory, index, title }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const subcategoryName = useMemo(() => {
    if (subCategory?.nome?.length > 31) return subCategory.nome.slice(0, 31) + '...';
    return subCategory.nome;
  }, [subCategory.nome]);

  const renderImage = useCallback(({ item }) => {
    return item.shime ? (
      <ProductShimeCard key={index} side={index % 2 === 0 ? 'left' : 'right'} />
    ) : (
      <ProductCard
        contentContainerStyle={{
          marginTop: 11,
          marginLeft: 2,
          marginRight: 0,
        }}
        product={item}
      />
    );
  }, []);

  const handleSelectedSubcategory = useCallback(
    subcategory => {
      dispatch(categoriesActions.setSelectedCategory({ title: title, nome: 'colecao', id: subcategory.colletionId }));
      dispatch(productActions.clearCategoryProducts());
      navigation.navigate('CategoryList');
    },
    [subCategory]
  );

  return (
    <Container>
      <Header>
        <TitlesArea>
          {/* <IconView>{mapSubcategoriesIcons[subCategory.nome]}</IconView> */}
          <SubTitleVitrine>{subcategoryName}</SubTitleVitrine>
        </TitlesArea>
        <TitlesAreaVerMais>
          <VerMaisTouch onPress={() => handleSelectedSubcategory(subCategory)}>
            <TextoBotao>Ver mais</TextoBotao>
            <ArrowArea>
              <ArrowRightBlueIcon width='11' height='11' />
            </ArrowArea>
          </VerMaisTouch>
        </TitlesAreaVerMais>
      </Header>
      <HrTitle></HrTitle>
      <Carousel
        data={Object.keys(subCategory).length > 0 ? subCategory?.productItems : shimeProducts}
        renderItem={renderImage}
        sliderWidth={sliderWidth}
        itemWidth={imageWidth}
        containerCustomStyle={{
          marginStart: 10,
        }}
        enableSnap={true}
        activeSlideAlignment='start'
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
    </Container>
  );
};

export default Slider;
