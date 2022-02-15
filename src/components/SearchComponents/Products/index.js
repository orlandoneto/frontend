import React from 'react';
import { FlatList, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {
  Container,
  TitleText,
  ContainerResults,
  SeeMore,
  ContainerHeader,
  Footer,
  ProductImage,
  ProductName,
  Price,
  OtherPrice,
} from './styles';
import { Creators as productActions } from '~/store/ducks/products';
import { Creators as searchActions } from '~/store/ducks/search';

const Products = ({ showProducts, searchText }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleGoToProductDetails = React.useCallback(
    item => {
      dispatch(productActions.setSelectedProduct(item));
      dispatch(searchActions.addRecentSearch(searchText));
      navigation.navigate('ProductsPage');
    },
    [dispatch, navigation, searchText]
  );

  const handleVerTodos = React.useCallback(() => {
    dispatch(searchActions.addRecentSearch(searchText));
    navigation.navigate('SearchProductList', { searchText: searchText });
  }, [searchText]);

  return (
    <Container>
      <ContainerHeader>
        <TitleText>Produtos</TitleText>
        <TouchableOpacity onPress={() => handleVerTodos()}>
          <SeeMore>Ver todos</SeeMore>
        </TouchableOpacity>
      </ContainerHeader>
      <FlatList
        data={showProducts}
        keyExtractor={item => String(item.productName)}
        numColumns={3}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback onPress={() => handleGoToProductDetails(item)}>
              <ContainerResults>
                <ProductImage>
                  <Image source={{ uri: item?.items[0]?.images[0]?.imageUrl }} style={{ width: 70, height: 53 }} />
                </ProductImage>
                <ProductName numberOfLines={3}>{item.productName}</ProductName>
                <Price>
                  R$ {item?.items[0].sellers[0].commertialOffer?.price.toFixed(2).toString().replace('.', ',')}
                </Price>
                <OtherPrice>
                  R$ {(item?.items[0].sellers[0].commertialOffer?.listPrice).toFixed(2).toString().replace('.', ',')}
                </OtherPrice>
              </ContainerResults>
            </TouchableWithoutFeedback>
          );
        }}
      />
      <Footer />
    </Container>
  );
};

export default Products;
