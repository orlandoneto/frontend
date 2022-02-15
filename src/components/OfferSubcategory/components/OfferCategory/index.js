import React, { useState, useEffect, useCallback } from 'react';
import { Modal, Image, Dimensions } from 'react-native';
import ProductCard from './ProductCard';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import {
  Container,
  SEPARATOR_WIDTH,
  Header,
  Title,
  SubTitleVitrine,
  TitlesArea,
  HrTitle,
  ContainerModal,
} from './style';

const imageWidth = Dimensions.get('screen').width * 0.6;
const sliderWidth = Dimensions.get('window').width;

const OfferCategory = ({ title, data, subtitle }) => {
  const [activeBanner, setActiveBanner] = useState(0);
  const [chamaAnimacao, setChamaAnimacao] = useState(false);
  let timer;

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

  const renderImage = useCallback(({ item }) => {
    return (
      <ProductCard
        contentContainerStyle={{
          marginTop: 11,
          marginLeft: 2,
          marginRight: 0,
        }}
        callAnimation={handleInicioAnimacao}
        product={item}
      />
    );
  }, []);

  return (
    <Container>
      <Header>
        <TitlesArea>
          <Title>{subtitle}</Title>
          <SubTitleVitrine>{title}</SubTitleVitrine>
        </TitlesArea>
      </Header>
      <HrTitle></HrTitle>

      <Carousel
        autoplayInterval={4000}
        autoplay={true}
        loop={true}
        data={data?.productItems}
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
        dotsLength={data?.productItems?.length}
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

      {chamaAnimacao && (
        <Modal transparent={true} visible={true}>
          <ContainerModal>
            <Image source={require('~/assets/animations/Cesta1GIF.gif')} style={{ width: 434, height: 434 }} />
          </ContainerModal>
        </Modal>
      )}
    </Container>
  );
};

export default OfferCategory;
