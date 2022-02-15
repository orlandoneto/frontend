import React from 'react';
import { FlatList, View, Modal, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import {
  ListHeader,
  ListLength,
  ContainerHeader,
  HeaderMenus,
  HeaderBanners,
  BannersArea,
  ContainerModal,
} from './styles';
import { Creators as productActions } from '~/store/ducks/products';
import { Creators as searchActions } from '~/store/ducks/search';

import FilterButton from '~/components/FilterButton';

import ProductCard from '~/components/ProductCard';
import ProductShimeCard from '~/components/ProductShimeCard';

import SliderBanners from './components/SliderBanners';

const SeacrhProducts = ({ showProducts, searchText }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [chamaAnimacao, setChamaAnimacao] = useState(false);
  let timer;

  const selectedBanners = useSelector(state => state.banners);

  // const { numberOfFilters } = useSelector((state) => state.filters);

  const { marcaList, productsLoading } = useSelector(state => state.products);

  const handleGoToProductDetails = React.useCallback(
    item => {
      dispatch(productActions.setSelectedProduct(item));
      dispatch(searchActions.addRecentSearch(searchText));
      navigation.navigate('ProductsPage');
    },
    [dispatch, navigation, searchText]
  );

  const SearchProductListLength = React.useMemo(() => {
    return marcaList.totalProdutos?.length;
  }, [marcaList.totalProdutos]);

  const handleOnPressFilterButton = React.useCallback(() => {
    navigation.navigate('Filters');
  }, [navigation]);

  const renderItemFunction = React.useCallback(
    ({ item, index }) => {
      return item.shime ? (
        <ProductShimeCard key={index} side={index % 2 === 0 ? 'left' : 'right'} />
      ) : (
        <ProductCard
          key={index}
          product={item}
          side={index % 2 === 0 ? 'left' : 'right'}
          lastItem={index % 2 === 0 && index === marcaList?.length - 1}
          callAnimation={handleInicioAnimacao}
        />
      );
    },
    [marcaList?.length]
  );

  const handleInicioAnimacao = () => {
    setChamaAnimacao(true);
    timer = setTimeout(() => {
      setChamaAnimacao(false);
    }, 1500);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <ListHeader>
            <ContainerHeader>
              <HeaderMenus>
                <FilterButton
                // handleOnPress={handleOnPressFilterButton}
                // numberOfFilters={numberOfFilters}
                />
                <ListLength>{productsLoading ? 0 : SearchProductListLength} produtos</ListLength>
              </HeaderMenus>
              <HeaderBanners>
                <BannersArea>
                  {selectedBanners.mainBannersList.length > 0 ? (
                    <SliderBanners data={selectedBanners.primarySubBannersList} />
                  ) : null}
                </BannersArea>
              </HeaderBanners>
            </ContainerHeader>
          </ListHeader>
        }
        initialNumToRender={6}
        // onEndReached={handleOnEndReached}
        onEndReachedThreshold={0.7}
        scrollEnabled={true}
        data={showProducts}
        keyExtractor={item => String(item.productId)}
        renderItem={renderItemFunction}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={{ width: 14 }} />}
      />
      {chamaAnimacao && (
        <Modal transparent={true} visible={true}>
          <ContainerModal>
            <Image source={require('~/assets/animations/Cesta1GIF.gif')} style={{ width: 434, height: 434 }} />
          </ContainerModal>
        </Modal>
      )}
    </>
  );
};

export default SeacrhProducts;
