import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Animated, Modal, FlatList } from 'react-native';

import {
  Container,
  SeparatorView,
  SEPARATOR_WIDTH,
  Header,
  Title,
  Contador,
  ContainerCategory,
  Touch,
  TitlesAreaVerMais,
  TextoBotao,
  VerMaisTouch,
  SubcategoryArea,
  HrTitle,
  ContainerModal,
  OverlayCloseButton,
  OverlayBackground,
  ModalView,
  TitleModal,
  SubTitleModal,
  HeaderModal,
  IconView,
  ModalContainerCategory,
} from './styles';

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
import ColesterolTriglicer√≠dios from '~/assets/svg/subcategories/ColesterolTriglicer√≠dios.svg';
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

import HigieneBelezaIcon from '~/assets/svg/categories/icons/HigieneBeleza';
import MamaeBebeIcon from '~/assets/svg/categories/icons/MamaeBebe';
import MedicamentosSaudeIcon from '~/assets/svg/categories/icons/MedicamentosSaude';

import { BoxShadow } from 'react-native-shadow';

import { Creators as categoriesActions } from '~/store/ducks/categories';
import { Creators as productActions } from '~/store/ducks/products';

const shadowOpt = {
  width: 52,
  height: 22,
  color: '#000',
  border: 6,
  radius: 6,
  opacity: 0.2,
  x: 6,
  y: 6,
};

const SubcategorySliderIcon = ({ data, category }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleVerTodos, setVisibleVerTodos] = useState(false);
  const [subcategoriesList, setSubcategoriesList] = useState([]);

  const animatedHeight = useRef(new Animated.Value(0)).current;

  const mapCategoriesIcons = {
    'Mam√£es e beb√™s': <MamaeBebeIcon />,
    'Cuidados pessoais e beleza': <HigieneBelezaIcon />,
    'Medicamentos e sa√ļde': <MedicamentosSaudeIcon />,
  };

  const mapSubcategoriesIcons = {
    Absorventes: <Absorventes />,
    Contraceptivos: <Contraceptivos />,
    Alimentos: <Alimentos />,
    'Alimentos e bebidas': <AlimentosBebidas />,
    Acess√≥rios: <Acessorios />,
    Banho: <Banho />,
    'Higiene bucal': <HigieneBucal />,
    Desodorantes: <Desodorantes />,
    Fraldas: <Fraldas />,
    Homem: <Homem />,
    Alergias: <Alergias />,
    Antitabagismo: <Antitabagismo />,
    'Aparelhos para sa√ļde': <AparelhosParaSaude />,
    'Calmantes naturais': <CalmantesNaturais />,
    'Colesterol e triglicer√≠dios': <ColesterolTriglicer√≠dios />,
    'Cuidados com a circula√ß√£o': <CuidadosCirculacao />,
    Diabetes: <Diabetes />,
    'Disfun√ß√£o er√©til': <DisfuncaoEretil />,
    'Dor, febre e inflama√ß√£o': <DorFebreInflamacao />,
    Emagrecedores: <Emagrecedores />,
    'Fitoter√°picos e naturais': <FitoterapicosNaturais />,
    'Gastrointestinais e hep√°ticos': <GastrointestinaisHepaticos />,
    Dermatol√≥gicos: <Dermatologicos />,
    'Gripes e resfriados': <GripesResfriados />,
    'Medicamentos (A a Z)': <MedicamentosAZ />,
    Oft√°lmico: <Oftalmico />,
    Osteoporose: <Osteoporose />,
    'Primeiros socorros': <PrimeirosSocorros />,
    Ortop√©dicos: <Ortopedicos />,
    Gen√©ricos: <Genericos />,
    'Reeducadores intestinais': <ReeducadoresIntestinais />,
    'Fitness e nutri√ß√£o': <Diabetes />,
    'Vitaminas e minerais': <VitaminasMinerais />,
    'Prote√ß√£o solar': <ProtecaoSolar />,
    'Cuidados com o corpo': <CuidadosCorpo />,
    'Cuidados com o rosto': <CuidadosRosto />,
    'Cuidados com os cabelos': <CuidadosCabelos />,
    'Cuidados com os p√©s e m√£o': <CuidadosPesMao />,
    Descolorantes: <Descolorantes />,
    Maquiagem: <Maquiagem />,
    'Cereais e fibras': <CereaisFibras />,
    Diet: <Diet />,
    'Energ√©ticos e isot√īnicos': <EnergeticosIsotonicos />,
    Suplementos: <Suplementos />,
    Brinquedos: <Brinquedos />,
    Papelaria: <Papelaria />,
    'Para a mam√£e': <ParaMamae />,
    'Roupas e acess√≥rios': <RoupasAcessorios />,
    'Utilidades e outros': <UtilidadesOutros />,
    'Troca de fralda': <TrocaFraldas />,
    Repelentes: <Repelentes />,
    Roupas: <Roupas />,
    'Perfumes e col√īnias': <PerfumesColonias />,
    Geri√°trico: <Geriatrico />,
    'Cuidados √≠ntimos': <CuidadosIntimos />,
  };

  function handleSelectedSubcategory(subcategory) {
    dispatch(productActions.clearCategoryProducts());
    closeModalEffect();
    dispatch(categoriesActions.setSelectedCategory(subcategory));
    navigation.dangerouslyGetParent()?.setOptions({ tabBarVisible: false });
    navigation.navigate('CategoryList');
  }

  const closeModalEffect = () => {
    Animated.timing(animatedHeight, {
      toValue: 0,
      duration: 750,
      useNativeDriver: false,
    }).start(setVisibleModal(false));
  };

  const renderSubcategory = item => {
    return (
      <Touch onPress={() => handleSelectedSubcategory(item)}>
        <ContainerCategory>
          <BoxShadow setting={shadowOpt}>{mapSubcategoriesIcons[item.nome]}</BoxShadow>
        </ContainerCategory>
      </Touch>
    );
  };

  const renderModalSubcategory = item => {
    return (
      <Touch onPress={() => handleSelectedSubcategory(item)}>
        <ModalContainerCategory>
          <BoxShadow setting={shadowOpt}>{mapSubcategoriesIcons[item.nome]}</BoxShadow>
        </ModalContainerCategory>
      </Touch>
    );
  };

  const renderVerTodos = () => {
    return (
      <TitlesAreaVerMais>
        <HrTitle />
        <VerMaisTouch onPress={() => setVisibleModal(true)}>
          <TextoBotao>Ver</TextoBotao>
          <TextoBotao>Todos</TextoBotao>
        </VerMaisTouch>
      </TitlesAreaVerMais>
    );
  };

  useEffect(() => {
    if (data.length > 8) {
      setSubcategoriesList(data.slice(0, 8));
      setVisibleVerTodos(true);
    } else {
      setSubcategoriesList(data);
      setVisibleVerTodos(false);
    }
  }, [data, navigation]);

  // useEffect(() => {
  //   navigation.dangerouslyGetParent()?.setOptions({ tabBarVisible: false });
  // }, [navigation]);

  return (
    <Container>
      <Header>
        <Title>Selecione uma Subcategoria</Title>
        <Contador>({data.length})</Contador>
      </Header>
      <SubcategoryArea>
        <FlatList
          initialNumToRender={2}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={subcategoriesList}
          contentContainerStyle={{
            marginLeft: 10,
            paddingRight: 30,
          }}
          keyExtractor={item => String(item.id)}
          decelerationRate='normal'
          renderItem={({ item, key }) => renderSubcategory(item, key)}
          ItemSeparatorComponent={() => <SeparatorView />}
          ListFooterComponent={visibleVerTodos ? renderVerTodos : false}
        />
      </SubcategoryArea>
      {data.length > 8 && (
        <Modal visible={visibleModal} transparent={true} animationType='none'>
          <ContainerModal>
            <OverlayCloseButton onPress={closeModalEffect}>
              <OverlayBackground />
            </OverlayCloseButton>
            <ModalView>
              <HeaderModal>
                <IconView>{mapCategoriesIcons[category?.nome]}</IconView>
                <TitleModal>{category?.nome}</TitleModal>
              </HeaderModal>
              <SubTitleModal>Subcategorias:</SubTitleModal>
              <FlatList
                numColumns={4}
                data={data}
                contentContainerStyle={{
                  marginLeft: SEPARATOR_WIDTH,
                  marginBottom: 30,
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

export default SubcategorySliderIcon;
