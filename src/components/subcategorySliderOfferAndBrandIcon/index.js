import React, { useCallback } from 'react';
import { Container, Header, Title, Contador } from './styles';

const SubcategorySliderOfferAndBrandIcon = ({ data, category }) => {
  const Main = useCallback(() => {
    return (
      <Container>
        <Header>
          {category?.nome === 'Ofertas' ? (
            <Title>Aproveite nossas melhores ofertas</Title>
          ) : category?.nome === 'Nossas marcas' ? (
            <>
              <Title>Selecione uma de nossas marcas</Title>
              <Contador>({data?.length})</Contador>
            </>
          ) : null}
        </Header>
      </Container>
    );
  }, []);
  return Main();
};

export default SubcategorySliderOfferAndBrandIcon;
