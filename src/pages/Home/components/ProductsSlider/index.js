import React, { useState, useEffect } from 'react';
import { FlatList, Modal, Image } from 'react-native';
import ProductCard from './ProductCard';
import Indicator from './Indicator';

import {
  SEPARATOR_WIDTH,
  SeparatorView,
  Container,
  Header,
  Title,
  SubTitleVitrine,
  TitlesArea,
  HrTitle,
  ContainerModal,
} from './styles';

const ProductsSlider = ({ title, data, subtitle }) => {
  const [index, setIndex] = useState(0);
  const [chamaAnimacao, setChamaAnimacao] = useState(false);
  let timer;

  const onViewRef = React.useRef(({ changed }) => {
    if (changed[0]?.isViewable) {
      const currentIndex = changed[0].index;
      if (currentIndex || currentIndex === 0) setIndex(currentIndex);
    }
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

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
    <Container>
      <Header>
        <TitlesArea>
          <Title>{subtitle}</Title>
          <SubTitleVitrine>{title}</SubTitleVitrine>
        </TitlesArea>
      </Header>
      <HrTitle></HrTitle>

      <FlatList
        initialNumToRender={2}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        contentContainerStyle={{
          marginLeft: SEPARATOR_WIDTH,
          paddingRight: 30,
        }}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        keyExtractor={item => String(item.id)}
        pagingEnabled
        decelerationRate='normal'
        snapToInterval={2}
        renderItem={({ item }) => (
          <ProductCard
            contentContainerStyle={{
              marginTop: 11,
              marginLeft: 2,
              marginRight: 0,
            }}
            callAnimation={handleInicioAnimacao}
            product={item}
          />
        )}
        ItemSeparatorComponent={() => <SeparatorView />}
      />
      <Indicator itemCount={data.length} currentIndex={index} />

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

export default ProductsSlider;
