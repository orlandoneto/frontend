import React from 'react';
import PropTypes from 'prop-types';
import formatTwoDecimal from '~/utils/helpers/formatTwoDecimal';

import RouteIcon from '~/assets/svg/route-icon.svg';

import {
  Container,
  StoreTitle,
  StoreInfoContainer,
  AddressContainer,
  AddressText,
  DistanceContainer,
  DistanceText,
  IsOpenText,
  SeeRouteButton,
  SeeRouteButtonText,
} from './styles';

const StoreCard = ({ name, mainAddressText, secondaryAddressText, isOpen, distance, handleSeeRoute }) => {
  return (
    <Container>
      <StoreTitle>{name}</StoreTitle>
      <StoreInfoContainer>
        <AddressContainer>
          <AddressText>{mainAddressText}</AddressText>
          <AddressText>{secondaryAddressText}</AddressText>
        </AddressContainer>
        <DistanceContainer>
          <DistanceText>{formatTwoDecimal(distance)}km</DistanceText>
          <IsOpenText isOpen={isOpen}>{isOpen ? 'Aberta' : 'Fechada'}</IsOpenText>
        </DistanceContainer>
      </StoreInfoContainer>
      <SeeRouteButton onPress={handleSeeRoute}>
        <RouteIcon />
        <SeeRouteButtonText>Ver rota</SeeRouteButtonText>
      </SeeRouteButton>
    </Container>
  );
};

StoreCard.propTypes = {
  name: PropTypes.string.isRequired,
  mainAddressText: PropTypes.string.isRequired,
  secondaryAddressText: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleSeeRoute: PropTypes.func.isRequired,
};

export default StoreCard;
