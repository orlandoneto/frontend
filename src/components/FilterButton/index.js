import React from 'react';
import FilterIcon from '~/assets/svg/filter-icon.svg';
import { Container, FilterText, BadgeContainer, BadgeValue } from './styles';

const FilterButton = ({ handleOnPress, numberOfFilters }) => {
  return (
    <Container onPress={handleOnPress}>
      <FilterIcon />
      <FilterText>Filtros</FilterText>
      {!!numberOfFilters && (
        <BadgeContainer isBig={numberOfFilters >= 10}> 
          <BadgeValue>{numberOfFilters}</BadgeValue>
        </BadgeContainer>
      )}
    </Container>
  );
};

export default FilterButton;
