import React, { useState, useMemo } from 'react';
import { CategoryBox, Container } from './styles';
// import Highlighted from '../../assets/svg/categories/highlighted-icon.svg';
import Offers from '../../assets/svg/categories/offers-icon-red.svg';
import OurBrands from '../../assets/svg/categories/our-brands-icon.svg';
import SpecialMedications from '../../assets/svg/categories/special-medications-icon.svg';
import Manipulated from '../../assets/svg/categories/manipulated-icon.svg';
import MedicinesAndHealth from '../../assets/svg/categories/medicines-and-health-icon.svg';
import HygieneAndBeauty from '../../assets/svg/categories/hygiene-and-beauty-icon.svg';
import Convenience from '../../assets/svg/categories/convenience-icon.svg';
import Dermocosmetics from '../../assets/svg/categories/dermocosmetics-icon.svg';
import MomAndBaby from '../../assets/svg/categories/mom-and-baby-icon.svg';
import FitnessAndNutrition from '../../assets/svg/categories/fitness-and-nutrition-icon.svg';
import LaboratoryTestBlood from '../../assets/svg/categories/laboratory-test-blood-sugar.svg';

// import HighlightedSelected from '../../assets/svg/categories/highlighted-icon-selected.svg';
import OffersSelected from '../../assets/svg/categories/offers-icon-red-selected.svg';
import OurBrandsSelected from '../../assets/svg/categories/our-brands-icon-selected.svg';
import SpecialMedicationsSelected from '../../assets/svg/categories/special-medications-icon-selected.svg';
import ManipulatedSelected from '../../assets/svg/categories/manipulated-icon-selected.svg';
import MedicinesAndHealthSelected from '../../assets/svg/categories/medicines-and-health-icon-selected.svg';
import HygieneAndBeautySelected from '../../assets/svg/categories/hygiene-and-beauty-icon-selected.svg';
import ConvenienceSelected from '../../assets/svg/categories/convenience-icon-selected.svg';
import DermocosmeticsSelected from '../../assets/svg/categories/dermocosmetics-icon-selected.svg';
import MomAndBabySelected from '../../assets/svg/categories/mom-and-baby-icon-selected.svg';
import FitnessAndNutritionSelected from '../../assets/svg/categories/fitness-and-nutrition-icon-selected.svg';
import LaboratoryTestBloodSelected from '../../assets/svg/categories/laboratory-test-blood-sugar-selected.svg';

const mapCategoriesIcons = {
  // 'Em destaque': <Highlighted />,
  Ofertas: <Offers />,
  'Agendamento de serviços': <LaboratoryTestBloodSelected />,
  'Nossas marcas': <OurBrands />,
  Dermocosméticos: <Dermocosmetics />,
  Conveniência: <Convenience />,
  'Fitness e nutrição': <FitnessAndNutrition />,
  'Cuidados pessoais e beleza': <HygieneAndBeauty />,
  'Mamães e bebês': <MomAndBaby />,
  Manipulação: <Manipulated />,
  'Medicamentos e saúde': <MedicinesAndHealth />,
  'Medicamentos especiais': <SpecialMedications />,
};

const mapSelectedCategoryIcons = {
  // 'Em destaque': <HighlightedSelected />,
  Ofertas: <OffersSelected />,
  'Agendamento de serviços': <LaboratoryTestBlood />,
  'Nossas marcas': <OurBrandsSelected />,
  Dermocosméticos: <DermocosmeticsSelected />,
  Conveniência: <ConvenienceSelected />,
  'Fitness e nutrição': <FitnessAndNutritionSelected />,
  'Cuidados pessoais e beleza': <HygieneAndBeautySelected />,
  'Mamães e bebês': <MomAndBabySelected />,
  Manipulação: <ManipulatedSelected />,
  'Medicamentos e saúde': <MedicinesAndHealthSelected />,
  'Medicamentos especiais': <SpecialMedicationsSelected />,
};

const MenuCategory = ({ categories, handleSelectedCategory, selectedCategory }) => {
  const [categoryPressed, setCategoryPressed] = useState(null);
  const filteredCategories = useMemo(() => {
    return categories.filter(item => item.nome !== 'Em destaque');
  }, [categories]);

  const onHideUnderlay = () => setCategoryPressed(null);
  const onShowUnderlay = categoryName => setCategoryPressed(categoryName);

  const handleChangeColor = (selectedCategory, category) => {
    if (selectedCategory?.id === category.id)
      if (category.id === 85) {
        return '#ED1D24';
      } else {
        return '#007DC5';
      }
    return 'white';
  };

  return (
    <Container>
      {filteredCategories.map(category => (
        <CategoryBox
          key={category.id}
          selected={handleChangeColor(selectedCategory, category)}
          onPress={() => handleSelectedCategory(category)}
          underlayColor={handleChangeColor(selectedCategory, category)}
          onHideUnderlay={() => onHideUnderlay()}
          onShowUnderlay={() => onShowUnderlay(category.nome)}
        >
          {categoryPressed === category.nome || selectedCategory?.id === category.id
            ? mapSelectedCategoryIcons[category.nome]
            : mapCategoriesIcons[category.nome]}
        </CategoryBox>
      ))}
    </Container>
  );
};

export default MenuCategory;
