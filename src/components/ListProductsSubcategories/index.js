import React, { useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import ProductCard from '../ProductsSliderSubcategory/ProductCard';

import { Container, Tittle, ButtonAddArea, ButtonAddText, ButtonAdd } from './styles';

import { Creators as productActions } from '~/store/ducks/products';

export default ({ selectedCategory }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { categoryProducts } = useSelector(state => state.products);

  useEffect(() => {
    // Trata a busca por Medicamentos Especiais
    if (selectedCategory?.queryField === '267') {
      dispatch(productActions.getCategoryProductsRequest(null, 1, null, null, selectedCategory?.queryField));
    } else {
      dispatch(productActions.getCategoryProductsRequest(selectedCategory, 1));
    }
  }, [selectedCategory]);

  const renderImage = useCallback(item => {
    return (
      <ProductCard
        contentContainerStyle={{
          marginTop: 11,
          marginLeft: 10,
          marginRight: 0,
        }}
        product={item}
      />
    );
  }, []);

  function handleSelectedCategory() {
    dispatch(productActions.clearCategoryProducts());
    navigation.navigate('CategoryList');
  }

  return (
    <Container>
      {Object.keys(categoryProducts).length > 0 && (
        <FlatList
          initialNumToRender={6}
          scrollEnabled={true}
          nestedScrollEnabled={true}
          data={categoryProducts}
          keyExtractor={item => String(item.productId)}
          renderItem={({ item }) => renderImage(item)}
          numColumns={2}
          contentContainerStyle={{
            paddingRight: 30,
          }}
          ListHeaderComponent={<Tittle>{selectedCategory?.nome}</Tittle>}
          ListFooterComponent={
            <ButtonAddArea>
              <ButtonAdd onPress={() => handleSelectedCategory()}>
                <ButtonAddText>Ver todos</ButtonAddText>
              </ButtonAdd>
            </ButtonAddArea>
          }
        />
      )}
    </Container>
  );
};
