import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import { Container } from './style';

const SliderBanners = ({ data }) => {
  const imagesUrls = React.useMemo(() => {
    return data.map((item) => item.image);
  }, [data]);

  return (
    <Container>
      <SliderBox
        images={imagesUrls}
        dotColor="#3376B8"
        inactiveDotColor="#90A4AE"
        autoplay
        circleLoop
        resizeMethod="resize"
        resizeMode="contain"
        paginationBoxStyle={{
          position: 'absolute',
          bottom: 0,
          padding: 0,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
        }}
        dotStyle={{
          width: 7,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: 'rgba(128, 128, 128, 0.92)',
        }}
        ImageComponentStyle={{
          borderRadius: 10,
          width: '90%',
          marginTop: -15,
        }}
        imageLoadingColor="#2196F3"
      />
    </Container>
  );
};

export default SliderBanners;
