import React, { useCallback, useState } from 'react';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, ImageBackground } from 'react-native';
import { selectMatrizImagens } from '~/store/selectors/Product.selectors';

import {
  Container,
  ImageArea,
  ImageItemOferta,
  DescriptionAreaOferta,
  DescriptionOferta,
  ImageItem,
  DescriptionArea,
  Description,
  Header,
  Title,
  SubTitle,
  TitlesArea,
  LinkArea,
  LinkText,
  HrTitle,
} from './styles';

const horizontalMargin = 6;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth * 0.85 + horizontalMargin * 10;

const CategoriasVitrine = ({ categoriaList }) => {
  const navigation = useNavigation();

  const [activeCategoria, setActiveCategoria] = useState(0);
  const [categorias, setCategorias] = useState([]);

  React.useEffect(() => {
    setCategorias(selectMatrizImagens(categoriaList));
  }, [categoriaList]);

  const renderMainBanner = useCallback(({ item }) => {
    for (let i = 0; i < item.length; i++) {
      return (
        <>
          <ImageArea key={1} onPress={() => handleEscolheCategoriaById(item[0].id, item[0].callToActionText)}>
            {item[0].callToActionText === 'Ofertas' ? (
              <ImageBackground
                source={require('~/assets/background-ofertas.png')}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '101%',
                  height: '100%',
                  borderRadius: 15,
                }}
              >
                <DescriptionAreaOferta>
                  <DescriptionOferta>{item[0].callToActionText}</DescriptionOferta>
                </DescriptionAreaOferta>

                <ImageItemOferta
                  source={{
                    uri: item[0].mobileImageUrl,
                  }}
                  resizeMode='cover'
                />
              </ImageBackground>
            ) : (
              <>
                <DescriptionArea>
                  <Description>{item[0].callToActionText}</Description>
                </DescriptionArea>

                <ImageItem
                  source={{
                    uri: item[0].mobileImageUrl,
                  }}
                  resizeMode='cover'
                />
              </>
            )}
          </ImageArea>

          <ImageArea key={2} onPress={() => handleEscolheCategoriaById(item[1].id, item[1].callToActionText)}>
            <DescriptionArea>
              <Description>{item[1].callToActionText}</Description>
            </DescriptionArea>
            <ImageItem
              source={{
                uri: item[1].mobileImageUrl,
              }}
              resizeMode='cover'
            />
          </ImageArea>

          <ImageArea key={3} onPress={() => handleEscolheCategoriaById(item[2].id, item[2].callToActionText)}>
            <DescriptionArea>
              <Description>{item[2].callToActionText}</Description>
            </DescriptionArea>
            <ImageItem
              source={{
                uri: item[2].mobileImageUrl,
              }}
              resizeMode='cover'
            />
          </ImageArea>
        </>
      );
    }
  }, []);

  const handleEscolheCategoriaById = useCallback((id, nameCategoria) => {
    //tratamento para Ofertas
    const categoriaId = id === '613' ? 2 : id;
    console.log('categoriaId: ' + categoriaId);
    console.log('nameCategoria: ' + nameCategoria);
    navigation.dangerouslyGetParent()?.setOptions({ tabBarVisible: false });
    navigation.navigate('NossasMarcasList', { categoriaId: categoriaId, nameCategoria: nameCategoria });
  }, []);

  const handleEscolheVitrineCategoriaById = useCallback((id, nameCategoria) => {
    navigation.navigate('Vitrine', { categoriaId: id, nameCategoria });
  }, []);

  const handleHeader = () => {
    if (Object.keys(categoriaList).length > 0) {
      return (
        <Header>
          <TitlesArea>
            <Title>{categoriaList?.headline?.subTitulo}</Title>
            <SubTitle>{categoriaList?.headline?.titulo.trim()}</SubTitle>
          </TitlesArea>

          {/* <LinkArea>
            <LinkText>Ver mais</LinkText>
          </LinkArea> */}
        </Header>
      );
    }
  };

  return (
    <>
      {handleHeader()}
      <HrTitle />
      <Container>
        {Object.keys(categorias).length > 0 && (
          <>
            <Carousel
              // autoplayInterval={4000}
              // autoplay={true}
              loop={true}
              data={categorias}
              renderItem={renderMainBanner}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              enableSnap={true}
              onSnapToItem={index => {
                setActiveCategoria(index);
              }}
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
              shouldOptimizeUpdates={true}
            />
            <Pagination
              containerStyle={{ paddingVertical: 0 }}
              dotsLength={categorias.length}
              activeDotIndex={activeCategoria}
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
      </Container>
    </>
  );
};

export default CategoriasVitrine;
