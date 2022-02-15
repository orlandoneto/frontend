import React, { useState, useCallback } from 'react';
import { Dimensions, TouchableOpacity, ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Creators as productActions } from '~/store/ducks/products';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { Container, Header, Title, SubTitle, TitlesArea, SEPARATOR_WIDTH, HrTitle, BannerImage } from './styles';

const imageWidth = Dimensions.get('screen').width * 0.45;
const sliderWidth = Dimensions.get('window').width;

const NossasMarcas = ({ nossaMarcaList }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [activeBanner, setActiveBanner] = useState(0);

  const handleGoToProductDetails = useCallback(
    item => {
      dispatch(productActions.setSelectedProduct(item));
      navigation.navigate('NossasMarcasList', { nomeMarca: item.nome });
    },
    [dispatch, navigation]
  );

  const renderImage = useCallback(({ item }) => {
    return (
      <TouchableOpacity key={item} onPress={() => handleGoToProductDetails(item)}>
        <BannerImage source={{ uri: item.imagem }} resizeMode='stretch' />
      </TouchableOpacity>
    );
  }, []);

  return (
    <Container>
      <ImageBackground
        source={require('~/assets/fundoNossasMarcas.png')}
        resizeMode='cover'
        style={{
          width: '100%',
          height: '90%',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        {Object.keys(nossaMarcaList).length > 0 && (
          <>
            <Header>
              <TitlesArea>
                <Title>{nossaMarcaList?.headline?.subTitulo}</Title>
                <SubTitle>{nossaMarcaList?.headline?.titulo}</SubTitle>
              </TitlesArea>
            </Header>
            <HrTitle></HrTitle>

            <Carousel
              autoplay={false}
              loop={false}
              data={nossaMarcaList?.marcas}
              renderItem={renderImage}
              sliderWidth={sliderWidth}
              itemWidth={imageWidth}
              enableSnap={true}
              onSnapToItem={index => setActiveBanner(index)}
              containerCustomStyle={{
                marginStart: SEPARATOR_WIDTH,
              }}
              activeSlideAlignment='start'
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
              shouldOptimizeUpdates={true}
            />
            <Pagination
              containerStyle={{ paddingVertical: 0 }}
              dotsLength={nossaMarcaList?.marcas?.length}
              activeDotIndex={activeBanner}
              dotContainerStyle={{ marginVertical: 10 }}
              dotStyle={{
                width: 28,
                height: 7,
                borderRadius: 90,
                backgroundColor: '#007dc5',
              }}
              inactiveDotStyle={{
                width: 7,
                height: 7,
                borderRadius: 90,
                backgroundColor: '#bababa',
              }}
              inactiveDotScale={1}
              inactiveDotOpacity={1}
            />
          </>
        )}
      </ImageBackground>
    </Container>
  );
};

export default NossasMarcas;
