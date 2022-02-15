import React, { useState, useRef, useEffect } from 'react';
import { Animated, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  SeparatorView,
  SEPARATOR_WIDTH,
  ContainerCard,
  NomeCategoria,
  ContainerCategory,
  Touch,
  ContainerModal,
  OverlayCloseButton,
  OverlayBackground,
  ModalView,
  HeaderModal,
  TitleModal,
  SubTitleModal,
  IconView,
  ModalContainerCategory,
  TextoBotao,
  VerMaisTouch,
  SubcategoryBox,
} from './styles';

//CategoriasModal
import ConvenienciaModal from '~/assets/svg/categories/icons/Conveniencia.svg';
import DesmocosmeticosModal from '~/assets/svg/categories/icons/Desmocosmeticos.svg';
import FitnessModal from '~/assets/svg/categories/icons/Fitness.svg';
import MamaeBebeModal from '~/assets/svg/categories/icons/MamaeBebe.svg';
import MedicamentosSaudeModal from '~/assets/svg/categories/icons/MedicamentosSaude.svg';
import HigieneBelezaModal from '~/assets/svg/categories/icons/HigieneBeleza.svg';

// Categorias
import AgendamentoServicos from '~/assets/svg/categoryIcons/agendamentoServicos.svg';
import Conveniencia from '~/assets/svg/categoryIcons/conveniencia.svg';
import Dermacosmeticos from '~/assets/svg/categoryIcons/dermacosmeticos.svg';
import FitnessNutricao from '~/assets/svg/categoryIcons/fitnessNutricao.svg';
import HigieneBeleza from '~/assets/svg/categoryIcons/higieneBeleza.svg';
import MamaeBebe from '~/assets/svg/categoryIcons/mamaeBebe.svg';
import Manipulados from '~/assets/svg/categoryIcons/manipulados.svg';
import MedicamentosEspeciais from '~/assets/svg/categoryIcons/medicamentosEspeciais.svg';
import MedicamentosSaude from '~/assets/svg/categoryIcons/medicamentosSaude.svg';
import NossasMarcas from '~/assets/svg/categoryIcons/nossasMarcas.svg';
import Ofertas from '~/assets/svg/categoryIcons/ofertas.svg';

//Subcategorias
import Absorventes from '~/assets/svg/subcategories/Absorventes.svg';
import Acessorios from '~/assets/svg/subcategories/Acessorios.svg';
import Alimentos from '~/assets/svg/subcategories/Alimentos.svg';
import AlimentosBebidas from '~/assets/svg/subcategories/AlimentosBebidas.svg';
import Alergias from '~/assets/svg/subcategories/Alergias.svg';
import Antitabagismo from '~/assets/svg/subcategories/Antitabagismo.svg';
import AparelhosParaSaude from '~/assets/svg/subcategories/AparelhosParaSaude.svg';
import Banho from '~/assets/svg/subcategories/Banho.svg';
import Brinquedos from '~/assets/svg/subcategories/Brinquedos.svg';
import CalmantesNaturais from '~/assets/svg/subcategories/CalmantesNaturais.svg';
import CereaisFibras from '~/assets/svg/subcategories/CereaisFibras.svg';
import Contraceptivos from '~/assets/svg/subcategories/Contraceptivos.svg';
import ColesterolTriglicerídios from '~/assets/svg/subcategories/ColesterolTriglicerídios.svg';
import CuidadosCorpo from '~/assets/svg/subcategories/CuidadosCorpo.svg';
import CuidadosCabelos from '~/assets/svg/subcategories/CuidadosCabelos.svg';
import CuidadosIntimos from '~/assets/svg/subcategories/CuidadosIntimos.svg';
import CuidadosPesMao from '~/assets/svg/subcategories/CuidadosPesMao.svg';
import CuidadosRosto from '~/assets/svg/subcategories/CuidadosRosto.svg';
import CuidadosCirculacao from '~/assets/svg/subcategories/CuidadosCirculacao.svg';
import Descolorantes from '~/assets/svg/subcategories/Descolorantes.svg';
import Desodorantes from '~/assets/svg/subcategories/Desodorantes.svg';
import Dermatologicos from '~/assets/svg/subcategories/Dermatologicos.svg';
import Diabetes from '~/assets/svg/subcategories/Diabetes.svg';
import DisfuncaoEretil from '~/assets/svg/subcategories/DisfuncaoEretil.svg';
import Diet from '~/assets/svg/subcategories/Diet.svg';
import DorFebreInflamacao from '~/assets/svg/subcategories/DorFebreInflamacao.svg';
import Emagrecedores from '~/assets/svg/subcategories/Emagrecedores.svg';
import EnergeticosIsotonicos from '~/assets/svg/subcategories/EnergeticosIsotonicos.svg';
import Fraldas from '~/assets/svg/subcategories/Fraldas.svg';
import FitoterapicosNaturais from '~/assets/svg/subcategories/FitoterapicosNaturais.svg';
import Geriatrico from '~/assets/svg/subcategories/Geriatrico.svg';
import GastrointestinaisHepaticos from '~/assets/svg/subcategories/GastrointestinaisHepaticos.svg';
import Genericos from '~/assets/svg/subcategories/Genericos.svg';
import GripesResfriados from '~/assets/svg/subcategories/GripesResfriados.svg';
import HigieneBucal from '~/assets/svg/subcategories/HigieneBucal.svg';
import Homem from '~/assets/svg/subcategories/Homem.svg';
import Maquiagem from '~/assets/svg/subcategories/Maquiagem.svg';
import MedicamentosAZ from '~/assets/svg/subcategories/MedicamentosAZ.svg';
import Oftalmico from '~/assets/svg/subcategories/Oftalmico.svg';
import Osteoporose from '~/assets/svg/subcategories/Osteoporose.svg';
import Ortopedicos from '~/assets/svg/subcategories/Ortopedicos.svg';
import Papelaria from '~/assets/svg/subcategories/Papelaria.svg';
import ParaMamae from '~/assets/svg/subcategories/ParaMamae.svg';
import PerfumesColonias from '~/assets/svg/subcategories/PerfumesColonias.svg';
import PrimeirosSocorros from '~/assets/svg/subcategories/PrimeirosSocorros.svg';
import ProtecaoSolar from '~/assets/svg/subcategories/ProtecaoSolar.svg';
import RoupasAcessorios from '~/assets/svg/subcategories/RoupasAcessorios.svg';
import ReeducadoresIntestinais from '~/assets/svg/subcategories/ReeducadoresIntestinais.svg';
import Repelentes from '~/assets/svg/subcategories/Repelentes.svg';
import Roupas from '~/assets/svg/subcategories/Roupas.svg';
import Suplementos from '~/assets/svg/subcategories/Suplementos.svg';
import UtilidadesOutros from '~/assets/svg/subcategories/UtilidadesOutros.svg';
import TrocaFraldas from '~/assets/svg/subcategories/TrocaFraldas.svg';
import VitaminasMinerais from '~/assets/svg/subcategories/VitaminasMinerais.svg';

import { Creators as categoriesActions } from '~/store/ducks/categories';
import { Creators as productActions } from '~/store/ducks/products';

const CategorysSlider = ({ data }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [visibleModalSubcategory, setVisibleModalSubcategory] = useState(false);

  const { selectedCategory, subCategoriesList } = useSelector(state => state.categories);

  const animatedHeight = useRef(new Animated.Value(0)).current;

  const mapCategoriesIconsModal = {
    Conveniência: <ConvenienciaModal />,
    Dermocosméticos: <DesmocosmeticosModal />,
    'Fitness e nutrição': <FitnessModal />,
    'Mamães e bebês': <MamaeBebeModal />,
    'Medicamentos e saúde': <MedicamentosSaudeModal />,
    'Cuidados pessoais e beleza': <HigieneBelezaModal />,
  };

  const mapCategoriesIcons = {
    Ofertas: <Ofertas />,
    'Em destaque': <Ofertas />,
    'Agendamento de serviços': <AgendamentoServicos />,
    'Nossas marcas': <NossasMarcas />,
    Dermocosméticos: <Dermacosmeticos />,
    Conveniência: <Conveniencia />,
    'Fitness e nutrição': <FitnessNutricao />,
    'Cuidados pessoais e beleza': <HigieneBeleza />,
    'Mamães e bebês': <MamaeBebe />,
    Manipulação: <Manipulados />,
    'Medicamentos e saúde': <MedicamentosSaude />,
    'Medicamentos especiais': <MedicamentosEspeciais />,
  };

  const mapSubcategoriesIcons = {
    Absorventes: <Absorventes />,
    Contraceptivos: <Contraceptivos />,
    Alimentos: <Alimentos />,
    'Alimentos e bebidas': <AlimentosBebidas />,
    Acessórios: <Acessorios />,
    Banho: <Banho />,
    'Higiene bucal': <HigieneBucal />,
    Desodorantes: <Desodorantes />,
    Fraldas: <Fraldas />,
    Homem: <Homem />,
    Alergias: <Alergias />,
    Antitabagismo: <Antitabagismo />,
    'Aparelhos para saúde': <AparelhosParaSaude />,
    'Calmantes naturais': <CalmantesNaturais />,
    'Colesterol e triglicerídios': <ColesterolTriglicerídios />,
    'Cuidados com a circulação': <CuidadosCirculacao />,
    Diabetes: <Diabetes />,
    'Disfunção erétil': <DisfuncaoEretil />,
    'Dor, febre e inflamação': <DorFebreInflamacao />,
    Emagrecedores: <Emagrecedores />,
    'Fitoterápicos e naturais': <FitoterapicosNaturais />,
    'Gastrointestinais e hepáticos': <GastrointestinaisHepaticos />,
    Dermatológicos: <Dermatologicos />,
    'Gripes e resfriados': <GripesResfriados />,
    'Medicamentos (A a Z)': <MedicamentosAZ />,
    Oftálmico: <Oftalmico />,
    Osteoporose: <Osteoporose />,
    'Primeiros socorros': <PrimeirosSocorros />,
    Ortopédicos: <Ortopedicos />,
    Genéricos: <Genericos />,
    'Reeducadores intestinais': <ReeducadoresIntestinais />,
    'Fitness e nutrição': <Diabetes />,
    'Vitaminas e minerais': <VitaminasMinerais />,
    'Proteção solar': <ProtecaoSolar />,
    'Cuidados com o corpo': <CuidadosCorpo />,
    'Cuidados com o rosto': <CuidadosRosto />,
    'Cuidados com os cabelos': <CuidadosCabelos />,
    'Cuidados com os pés e mão': <CuidadosPesMao />,
    Descolorantes: <Descolorantes />,
    Maquiagem: <Maquiagem />,
    'Cereais e fibras': <CereaisFibras />,
    Diet: <Diet />,
    'Energéticos e isotônicos': <EnergeticosIsotonicos />,
    Suplementos: <Suplementos />,
    Brinquedos: <Brinquedos />,
    Papelaria: <Papelaria />,
    'Para a mamãe': <ParaMamae />,
    'Roupas e acessórios': <RoupasAcessorios />,
    'Utilidades e outros': <UtilidadesOutros />,
    'Troca de fralda': <TrocaFraldas />,
    Repelentes: <Repelentes />,
    Roupas: <Roupas />,
    'Perfumes e colônias': <PerfumesColonias />,
    Geriátrico: <Geriatrico />,
    'Cuidados íntimos': <CuidadosIntimos />,
  };

  function handleSelectedCategory(category) {
    dispatch(productActions.clearCategoryProducts());

    if (category.nome === 'Agendamento de serviços') navigation.navigate('WebviewTestCovid');
    else if (category.nome === 'Ofertas' || category.nome === 'Nossas marcas') {
      dispatch(categoriesActions.setSelectedCategory(category));
      navigation.navigate('CategoryList');
    } else {
      dispatch(categoriesActions.setSelectedCategory(category));

      if (category?.subcategorias && category?.subcategorias.length !== 0) {
        const subcategoriesQueryField = category.subcategorias.map(subcategory => subcategory.queryField);

        dispatch(categoriesActions.getProductsSubcategoriesRequest(subcategoriesQueryField));
        dispatch(categoriesActions.setSubCategories(category.subcategorias));
        setVisibleModalSubcategory(true);
      } else {
        navigation.navigate('CategoryList');
      }
    }
  }

  function handleSelectedSubcategory(subcategory) {
    closeModalEffect();
    dispatch(categoriesActions.setSelectedCategory(subcategory));
    navigation.dangerouslyGetParent()?.setOptions({ tabBarVisible: false });
    navigation.navigate('CategoryList');
  }

  function handleSelectedAllSubcategory() {
    closeModalEffect();
    dispatch(productActions.clearCategoryProducts());

    navigation.navigate('CategoryList');
  }

  const closeModalEffect = () => {
    Animated.timing(animatedHeight, {
      toValue: 0,
      duration: 750,
      useNativeDriver: false,
    }).start(setVisibleModalSubcategory(false));
  };

  const renderCategory = item => {
    return (
      <Touch onPress={() => handleSelectedCategory(item)}>
        <ContainerCategory>
          <SubcategoryBox style={[Platform.OS !== 'ios' ? { elevation: 2, shadowColor: '#000' } : '']}>
            {mapCategoriesIcons[item.nome]}
          </SubcategoryBox>
        </ContainerCategory>
      </Touch>
    );
  };

  const renderModalSubcategory = item => {
    return (
      <Touch onPress={() => handleSelectedSubcategory(item)}>
        <ModalContainerCategory>
          <SubcategoryBox style={[Platform.OS !== 'ios' ? { elevation: 2, shadowColor: '#000' } : '']}>
            {mapSubcategoriesIcons[item.nome]}
          </SubcategoryBox>
        </ModalContainerCategory>
      </Touch>
    );
  };

  return (
    <Container>
      <FlatList
        initialNumToRender={10}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        contentContainerStyle={{
          marginLeft: SEPARATOR_WIDTH,
          paddingRight: 30,
          paddingTop: 3,
        }}
        keyExtractor={item => String(item.id)}
        decelerationRate='normal'
        renderItem={({ item }) => renderCategory(item)}
        ItemSeparatorComponent={() => <SeparatorView />}
      />
      {visibleModalSubcategory && (
        <Modal visible={visibleModalSubcategory} transparent={true} animationType='none'>
          <ContainerModal>
            <OverlayCloseButton onPress={closeModalEffect}>
              <OverlayBackground />
            </OverlayCloseButton>
            <ModalView>
              <HeaderModal>
                <IconView>{mapCategoriesIconsModal[selectedCategory?.nome]}</IconView>
                <TitleModal>{selectedCategory?.nome.slice(0, 22) + '...'}</TitleModal>
                <VerMaisTouch onPress={() => handleSelectedAllSubcategory()}>
                  <TextoBotao>Ver todos</TextoBotao>
                  <TextoBotao>produtos</TextoBotao>
                </VerMaisTouch>
              </HeaderModal>
              <SubTitleModal>Subcategorias:</SubTitleModal>
              <FlatList
                numColumns={4}
                data={subCategoriesList}
                contentContainerStyle={{
                  marginLeft: SEPARATOR_WIDTH,
                  marginBottom: 30,
                  paddingTop: 3,
                }}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => renderModalSubcategory(item)}
              />
            </ModalView>
          </ContainerModal>
        </Modal>
      )}
    </Container>
  );
};

export default CategorysSlider;
