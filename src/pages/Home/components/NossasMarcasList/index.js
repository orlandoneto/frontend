import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { Creators as productActions } from '~/store/ducks/products';

import { PRODUCT_CARD_WIDTH, SEPARATOR_WIDTH, HeaderMenus, ListLength } from './styles';
import ProductShimeCard from '~/components/ProductShimeCard';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import ProductCard from '~/components/ProductCard';
import FilterButton from '~/components/FilterButton';

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
  {
    productId: '4',
    shime: true,
  },
  {
    productId: '5',
    shime: true,
  },
  {
    productId: '6',
    shime: true,
  },
];

const NossasMarcasList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.dangerouslyGetParent()?.setOptions({ tabBarVisible: false });
  }, [navigation]);

  const [productsList, setProductList] = useState([]);

  const {
    marcaList,
    totalMarcaListProducts,
    marcaListPage,

    categoryProducts,
    categoryProductsPage,
    totalCategoryProducts,

    productsLoading,
    lastPage,
  } = useSelector(state => state.products);

  const {
    orderByFilter,
    ameDiscount,
    PBM,
    brandsPagueMenos,
    freeShipping,
    category,
    subCategories,
    priceRange,
    brands,
    numberOfFilters,
  } = useSelector(state => state.filters);

  const handleOnPressFilterButton = useCallback(() => {
    navigation.navigate('Filters');
  }, [navigation]);

  const handleOnEndReached = useCallback(() => {
    // Buscas por marca
    if (route.params.nomeMarca) {
      if (!productsLoading && !lastPage && numberOfFilters > 0) {
        dispatch(
          productActions.getBuscarMarcaPorNomeProdutoByFiltersRequest(
            {
              orderByFilter,
              ameDiscount,
              PBM,
              brandsPagueMenos,
              freeShipping,
              category,
              subCategories,
              priceRange,
              brands,
            },
            marcaListPage + 1
          )
        );
      } else if (!productsLoading && !lastPage) {
        dispatch(productActions.getBuscarMarcaPorNomeProdutoRequest(route.params.nomeMarca, marcaListPage + 1));
      }
    } else {
      //Buscas por categoria
      if (!productsLoading && !lastPage && numberOfFilters > 0) {
        dispatch(
          productActions.getCategoryProductsByFiltersRequest(
            {
              orderByFilter,
              ameDiscount,
              PBM,
              brandsPagueMenos,
              freeShipping,
              category,
              subCategories,
              priceRange,
              brands,
            },
            categoryProductsPage + 1
          )
        );
      } else if (!productsLoading && !lastPage) {
        // Trata a busca por Medicamentos Especiais
        if (route.params.categoriaId === '267') {
          dispatch(productActions.getCategoryProductsRequest(null, categoryProductsPage + 1, null, null, 267));
        } else if (route.params.categoriaId === 2) {
          dispatch(
            productActions.getCategoryProductsRequest(
              {
                id: 2,
                nome: 'Ofertas',
                queryField: '613',
              },
              categoryProductsPage + 1
            )
          );
        } else {
          dispatch(
            productActions.getCategoryProductsRequest(null, categoryProductsPage + 1, route.params.categoriaId, null)
          );
        }
      }
    }
  }, [
    PBM,
    ameDiscount,
    brands,
    brandsPagueMenos,
    category,
    categoryProductsPage,
    marcaListPage,
    dispatch,
    freeShipping,
    lastPage,
    numberOfFilters,
    orderByFilter,
    priceRange,
    productsLoading,
    route,
    subCategories,
  ]);

  const renderItemFunction = useCallback(
    ({ item, index }) => {
      return item.shime ? (
        <ProductShimeCard key={index} side={index % 2 === 0 ? 'left' : 'right'} />
      ) : (
        <ProductCard
          contentContainerStyle={{
            marginTop: 11,
            marginLeft: 2,
            marginRight: 5,
          }}
          product={item}
        />
      );
    },
    [categoryProducts?.length]
  );

  useEffect(() => {
    if (route.params.nomeMarca !== undefined) {
      navigation.setOptions({
        title: route.params.nomeMarca,
      });

      dispatch(productActions.getBuscarMarcaPorNomeProdutoRequest(route.params.nomeMarca));
    } else if (route.params.categoriaId !== undefined) {
      navigation.setOptions({
        title: route.params.nameCategoria,
      });

      // Trata a busca por ofertas -- Minha análise indica que não funciona corretamente
      if (route.params.categoriaId === 2) {
        dispatch(
          productActions.getCategoryProductsRequest(
            {
              id: 2,
              nome: 'Ofertas',
              queryField: '613',
            },
            categoryProductsPage + 1
          )
        );
        // Trata a busca por Medicamentos Especiais
      } else if (route.params.categoriaId === '267') {
        dispatch(productActions.getCategoryProductsRequest(null, 1, null, null, 267));
      } else {
        dispatch(productActions.getCategoryProductsRequest(null, 1, route.params.categoriaId, null));
      }
    }
  }, [dispatch, route]);

  // Busca por id da categoria ou Medicamentos Especiais
  useEffect(() => {
    if (
      categoryProducts !== undefined &&
      Object.keys(categoryProducts).length > 0 &&
      route.params.categoriaId !== undefined
    ) {
      setProductList(categoryProducts);
    }
  }, [categoryProducts]);

  // Busca por nome da marca
  useEffect(() => {
    if (marcaList !== undefined && Object.keys(marcaList).length > 0 && route.params.nomeMarca !== undefined) {
      setProductList(marcaList);
    }
  }, [marcaList]);

  useEffect(() => {
    if (route.params.categoriaId) {
      dispatch(productActions.clearCategoryProducts());
      dispatch(productActions.resetCategoryProductsPage());
    } else if (route.params.nomeMarca) {
      dispatch(productActions.clearMarcaList());
      dispatch(productActions.resetMarcaListPage());
    }
  }, [route.params.categoriaId, route.params.nomeMarca]);

  return (
    <>
      {productsList?.length > 0 && (
        <>
          <HeaderMenus>
            <FilterButton handleOnPress={handleOnPressFilterButton} numberOfFilters={numberOfFilters} />
            <ListLength>
              {(route.params.categoriaId ? totalCategoryProducts : totalMarcaListProducts) || 0} produtos
            </ListLength>
          </HeaderMenus>
          <FlatList
            initialNumToRender={6}
            onEndReachedThreshold={1.2}
            onEndReached={handleOnEndReached}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
            data={shimeProducts && !lastPage ? [...productsList, ...shimeProducts] : productsList}
            contentContainerStyle={{
              marginLeft: SEPARATOR_WIDTH,
              paddingRight: 30,
            }}
            keyExtractor={item => String(item.productId)}
            decelerationRate='normal'
            snapToInterval={PRODUCT_CARD_WIDTH + SEPARATOR_WIDTH + 2}
            renderItem={renderItemFunction}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ width: 14 }} />}
          />
        </>
      )}
    </>
  );
};

export default NossasMarcasList;
