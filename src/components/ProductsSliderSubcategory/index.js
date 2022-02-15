import React, { useState, useEffect, useCallback } from 'react';
import { Dimensions } from 'react-native';
import ProductCard from './ProductCard';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-native-snap-carousel';

import Acessorios from '~/assets/svg/subcategories/icons/Acessorios.svg';
import Absorventes from '~/assets/svg/subcategories/icons/Absorventes.svg';
import Alimentos from '~/assets/svg/subcategories/icons/Alimentos.svg';
import AlimentosBebidas from '~/assets/svg/subcategories/icons/AlimentosBebidas.svg';
import Alergias from '~/assets/svg/subcategories/icons/Alergias.svg';
import Antitabagismo from '~/assets/svg/subcategories/icons/Antitabagismo.svg';
import AparelhosParaSaude from '~/assets/svg/subcategories/icons/AparelhosParaSaude.svg';
import Banho from '~/assets/svg/subcategories/icons/Banho.svg';
import Brinquedos from '~/assets/svg/subcategories/icons/Brinquedos.svg';
import CalmantesNaturais from '~/assets/svg/subcategories/icons/CalmantesNaturais.svg';
import CereaisFibras from '~/assets/svg/subcategories/icons/CereaisFibras.svg';
import ColesterolTriglicerídios from '~/assets/svg/subcategories/icons/ColesterolTriglicerídios.svg';
import CuidadosCabelos from '~/assets/svg/subcategories/icons/CuidadosCabelos.svg';
import Contraceptivos from '~/assets/svg/subcategories/icons/Contraceptivos.svg';
import CuidadosIntimos from '~/assets/svg/subcategories/icons/CuidadosIntimos.svg';
import CuidadosPesMao from '~/assets/svg/subcategories/icons/CuidadosPesMao.svg';
import CuidadosCirculacao from '~/assets/svg/subcategories/icons/CuidadosCirculacao.svg';
import CuidadosCorpo from '~/assets/svg/subcategories/icons/CuidadosCorpo.svg';
import CuidadosRosto from '~/assets/svg/subcategories/icons/CuidadosRosto.svg';
import Descolorantes from '~/assets/svg/subcategories/icons/Descolorantes.svg';
import Dermatologicos from '~/assets/svg/subcategories/icons/Dermatologicos.svg';
import Diabetes from '~/assets/svg/subcategories/icons/Diabetes.svg';
import Diet from '~/assets/svg/subcategories/icons/Diet.svg';
import DisfuncaoEretil from '~/assets/svg/subcategories/icons/DisfuncaoEretil.svg';
import Desodorantes from '~/assets/svg/subcategories/icons/Desodorantes.svg';
import DorFebreInflamacao from '~/assets/svg/subcategories/icons/DorFebreInflamacao.svg';
import Emagrecedores from '~/assets/svg/subcategories/icons/Emagrecedores.svg';
import EnergeticosIsotonicos from '~/assets/svg/subcategories/icons/EnergeticosIsotonicos.svg';
import Fraldas from '~/assets/svg/subcategories/icons/Fraldas.svg';
import FitoterapicosNaturais from '~/assets/svg/subcategories/icons/FitoterapicosNaturais.svg';
import GastrointestinaisHepaticos from '~/assets/svg/subcategories/icons/GastrointestinaisHepaticos.svg';
import Genericos from '~/assets/svg/subcategories/icons/Genericos.svg';
import Geriatrico from '~/assets/svg/subcategories/icons/Geriatrico.svg';
import GripesResfriados from '~/assets/svg/subcategories/icons/GripesResfriados.svg';
import HigieneBucal from '~/assets/svg/subcategories/icons/HigieneBucal.svg';
import Homem from '~/assets/svg/subcategories/icons/Homem.svg';
import Maquiagem from '~/assets/svg/subcategories/icons/Maquiagem.svg';
import MedicamentosAZ from '~/assets/svg/subcategories/icons/MedicamentosAZ.svg';
import Oftalmico from '~/assets/svg/subcategories/icons/Oftalmico.svg';
import Osteoporose from '~/assets/svg/subcategories/icons/Osteoporose.svg';
import Ortopedicos from '~/assets/svg/subcategories/icons/Ortopedicos.svg';
import Papelaria from '~/assets/svg/subcategories/icons/Papelaria.svg';
import ParaMamae from '~/assets/svg/subcategories/icons/ParaMamae.svg';
import PerfumesColonias from '~/assets/svg/subcategories/icons/PerfumesColonias.svg';
import PrimeirosSocorros from '~/assets/svg/subcategories/icons/PrimeirosSocorros.svg';
import ProtecaoSolar from '~/assets/svg/subcategories/icons/ProtecaoSolar.svg';
import ReeducadoresIntestinais from '~/assets/svg/subcategories/icons/ReeducadoresIntestinais.svg';
import Repelentes from '~/assets/svg/subcategories/icons/TrocaFraldas.svg';
import Roupas from '~/assets/svg/subcategories/icons/Roupas.svg';
import RoupasAcessorios from '~/assets/svg/subcategories/icons/RoupasAcessorios.svg';
import Suplementos from '~/assets/svg/subcategories/icons/Suplementos.svg';
import TrocaFraldas from '~/assets/svg/subcategories/icons/TrocaFraldas.svg';
import UtilidadesOutros from '~/assets/svg/subcategories/icons/UtilidadesOutros.svg';
import VitaminasMinerais from '~/assets/svg/subcategories/icons/VitaminasMinerais.svg';
import ArrowRightBlueIcon from '~/assets/svg/arrow-right-blue';

import {
  Container,
  Header,
  SubTitleVitrine,
  TitlesArea,
  HrTitle,
  TextoBotao,
  TitlesAreaVerMais,
  VerMaisTouch,
  IconView,
  ArrowArea,
} from './styles';

import ProductShimeCard from './ProductShimeCard';

import { Creators as categoriesActions } from '~/store/ducks/categories';
import { Creators as productActions } from '~/store/ducks/products';

const imageWidth = Dimensions.get('screen').width * 0.29;
const sliderWidth = Dimensions.get('window').width;

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
];

const ProductsSlider = ({ subCategory, index }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [productsList, setProductList] = useState([]);
  const { subCategoriesListSubcategories } = useSelector(state => state.categories);

  useEffect(() => {
    if (subCategoriesListSubcategories.length > 0) {
      // Teste
      if (subCategory.id == 63) {
        console.log('### -- subCategory -- ##');
        console.log(JSON.stringify(subCategory));

        console.log('### -- subCategoriesListSubcategories -- ##');
        console.log(
          JSON.stringify(subCategoriesListSubcategories.find(subCat => subCat.isCategory === subCategory.queryField))
        );
      }

      setProductList(subCategoriesListSubcategories.find(subCat => subCat.isCategory === subCategory.queryField).data);
    }
  }, [subCategoriesListSubcategories]);

  const mapSubcategoriesIcons = {
    Acessórios: <Acessorios />,
    Absorventes: <Absorventes />,
    Alimentos: <Alimentos />,
    'Alimentos e bebidas': <AlimentosBebidas />,
    Alergias: <Alergias />,
    Antitabagismo: <Antitabagismo />,
    'Aparelhos para saúde': <AparelhosParaSaude />,
    Banho: <Banho />,
    Brinquedos: <Brinquedos />,
    'Calmantes naturais': <CalmantesNaturais />,
    'Colesterol e triglicerídios': <ColesterolTriglicerídios />,
    'Cereais e fibras': <CereaisFibras />,
    'Cuidados com a circulação': <CuidadosCirculacao />,
    'Cuidados íntimos': <CuidadosIntimos />,
    'Cuidados com o corpo': <CuidadosCorpo />,
    'Cuidados com o rosto': <CuidadosRosto />,
    'Cuidados com os cabelos': <CuidadosCabelos />,
    'Cuidados com os pés e mão': <CuidadosPesMao />,
    Contraceptivos: <Contraceptivos />,
    Diabetes: <Diabetes />,
    'Disfunção erétil': <DisfuncaoEretil />,
    Desodorantes: <Desodorantes />,
    Dermatológicos: <Dermatologicos />,
    'Dor, febre e inflamação': <DorFebreInflamacao />,
    Diet: <Diet />,
    Descolorantes: <Descolorantes />,
    'Energéticos e isotônicos': <EnergeticosIsotonicos />,
    Emagrecedores: <Emagrecedores />,
    Fraldas: <Fraldas />,
    'Fitoterápicos e naturais': <FitoterapicosNaturais />,
    'Gastrointestinais e hepáticos': <GastrointestinaisHepaticos />,
    Genéricos: <Genericos />,
    'Gripes e resfriados': <GripesResfriados />,
    Geriátrico: <Geriatrico />,
    'Higiene bucal': <HigieneBucal />,
    Homem: <Homem />,
    Maquiagem: <Maquiagem />,
    'Medicamentos (A a Z)': <MedicamentosAZ />,
    Oftálmico: <Oftalmico />,
    Osteoporose: <Osteoporose />,
    'Primeiros socorros': <PrimeirosSocorros />,
    Ortopédicos: <Ortopedicos />,
    Papelaria: <Papelaria />,
    'Para a mamãe': <ParaMamae />,
    'Perfumes e colônias': <PerfumesColonias />,
    'Proteção solar': <ProtecaoSolar />,
    Roupas: <Roupas />,
    'Roupas e acessórios': <RoupasAcessorios />,
    'Reeducadores intestinais': <ReeducadoresIntestinais />,
    Repelentes: <Repelentes />,
    Suplementos: <Suplementos />,
    'Utilidades e outros': <UtilidadesOutros />,
    'Troca de fralda': <TrocaFraldas />,
    'Vitaminas e minerais': <VitaminasMinerais />,
  };

  const renderImage = useCallback(({ item }) => {
    return item.shime ? (
      <ProductShimeCard key={index} side={index % 2 === 0 ? 'left' : 'right'} />
    ) : (
      <ProductCard product={item} />
    );
  }, []);

  function handleSelectedSubcategory(subcategory) {
    dispatch(categoriesActions.setSelectedCategory(subcategory));
    navigation.dangerouslyGetParent()?.setOptions({ tabBarVisible: false });
    dispatch(productActions.clearCategoryProducts());
    navigation.navigate('CategoryList');
  }

  return (
    <Container>
      <Header>
        <TitlesArea>
          <IconView>{mapSubcategoriesIcons[subCategory.nome]}</IconView>
          <SubTitleVitrine>{subCategory.nome}</SubTitleVitrine>
        </TitlesArea>
        <TitlesAreaVerMais>
          <VerMaisTouch onPress={() => handleSelectedSubcategory(subCategory)}>
            <TextoBotao>Ver mais</TextoBotao>
            <ArrowArea>
              <ArrowRightBlueIcon width='11' height='11' />
            </ArrowArea>
          </VerMaisTouch>
        </TitlesAreaVerMais>
      </Header>
      <HrTitle></HrTitle>

      <Carousel
        data={productsList?.length ? productsList : shimeProducts}
        renderItem={renderImage}
        sliderWidth={sliderWidth}
        itemWidth={110}
        containerCustomStyle={{
          marginStart: 10,
        }}
        enableSnap={true}
        activeSlideAlignment='start'
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
    </Container>
  );
};

export default ProductsSlider;
