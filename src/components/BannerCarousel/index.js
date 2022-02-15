import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import { Dimensions, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Container, BannerContainer, BannerImage } from './styles';

const horizontalMargin = 6;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth * 0.85 + horizontalMargin * 2;

const BannerCarousel = ({ bannerList, main }) => {
  const navigation = useNavigation();
  const [activeBanner, setActiveBanner] = useState(0);

  const renderMainBanner = useCallback(({ item }) => {
    return (
      <BannerContainer key={item}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Vitrine', { categoriaId: { nome: 'colecao', data: item.description } });
          }}
        >
          <BannerImage source={{ uri: item.image }} resizeMode='stretch' main={true} />
        </TouchableOpacity>
      </BannerContainer>
    );
  }, []);

  const renderSubBanner = useCallback(({ item }) => {
    return (
      <BannerContainer key={item}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Vitrine', { categoriaId: { nome: 'colecao', data: item.description } })}
        >
          <BannerImage
            width={itemWidth - horizontalMargin * 2}
            source={{ uri: item.image }}
            resizeMode='stretch'
            main={main}
          />
        </TouchableOpacity>
      </BannerContainer>
    );
  }, []);

  return (
    <Container main={main}>
      <Carousel
        autoplay={false}
        loop={true}
        data={bannerList}
        renderItem={main ? renderMainBanner : renderSubBanner}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        enableSnap={true}
        onSnapToItem={index => {
          setActiveBanner(index);
        }}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        shouldOptimizeUpdates={true}
      />
    </Container>
  );
};

BannerCarousel.propTypes = {
  bannerList: PropTypes.arrayOf(String),
  main: PropTypes.bool,
};

BannerCarousel.defaultProps = {
  bannerList: [],
  main: true,
};

export default BannerCarousel;
