import React from 'react';
import { FlatList } from 'react-native';

import ServiceScheduling from '../ServiceScheduling';
import ListProductsSubcategories from '../ListProductsSubcategories';
import ProductsSlider from '../ProductsSliderSubcategory';
import Slider from '../ProductsSliderSubcategory/Slider';
import LottieView from 'lottie-react-native';

import { Container, LoadingArea } from './styles';
import SubcategorySliderIcon from '../subcategorySliderIcon';
import SubcategorySliderOfferAndBrandIcon from '~/components/subcategorySliderOfferAndBrandIcon';

const MenuSubcategory = ({ selectedCategory, productsCategory, subCategoriesOffer, subCategoriesBrand }) => {
  const PageSubcategory = () => {
    if (selectedCategory?.nome === 'Agendamento de serviços') {
      return <ServiceScheduling />;
    } else {
      return (
        <>
          {Object.keys(productsCategory).length > 0 && (
            <SubcategorySliderIcon data={productsCategory} category={selectedCategory} />
          )}

          <FlatList
            data={productsCategory}
            keyExtractor={item => String(item.id)}
            renderItem={({ item, index }) => <ProductsSlider subCategory={item} index={index} />}
            initialNumToRender={5}
            maxToRenderPerBatch={3}
          />
        </>
      );
    }
  };

  const PageSubcategoryOffer = () => {
    return (
      <>
        <SubcategorySliderOfferAndBrandIcon category={selectedCategory} />
        <FlatList
          data={subCategoriesOffer}
          keyExtractor={item => String(item.colletionId)}
          renderItem={({ item }) => <Slider subCategory={item} title='oferta' />}
          initialNumToRender={5}
          maxToRenderPerBatch={3}
        />
      </>
    );
  };

  const PageSubcategoryBrand = () => {
    return (
      <>
        <SubcategorySliderOfferAndBrandIcon data={subCategoriesBrand} category={selectedCategory} />
        <FlatList
          data={subCategoriesBrand}
          keyExtractor={item => String(item.colletionId)}
          renderItem={({ item }) => <Slider subCategory={item} title='marcas' />}
          initialNumToRender={5}
          maxToRenderPerBatch={3}
        />
      </>
    );
  };

  const Main = () => {
    if (
      subCategoriesOffer !== undefined &&
      JSON.stringify(subCategoriesOffer) !== '[]' &&
      selectedCategory?.nome === 'Ofertas'
    ) {
      return <PageSubcategoryOffer />;
    } else if (
      subCategoriesBrand !== undefined &&
      JSON.stringify(subCategoriesBrand) !== '[]' &&
      selectedCategory?.nome === 'Nossas marcas'
    ) {
      return <PageSubcategoryBrand />;
    } else if (selectedCategory?.nome === 'Medicamentos especiais') {
      return <ListProductsSubcategories selectedCategory={selectedCategory} />;
    } else if (selectedCategory?.nome !== 'Ofertas' && selectedCategory?.nome !== 'Nossas marcas') {
      return <PageSubcategory />;
    } else {
      return (
        <LoadingArea>
          <LottieView source={require('~/assets/animations/cruzSimples.json')} autoPlay loop={true} />
        </LoadingArea>
      );
    }
  };

  return <Container>{Main()}</Container>;
};

export default MenuSubcategory;
