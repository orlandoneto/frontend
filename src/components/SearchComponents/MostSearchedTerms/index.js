import React from 'react';
import { FlatList } from 'react-native';
import { Container, TitleText, NumberText, ResultText, ContainerResults } from './styles';

const MostSearchedTerms = ({ setSearchText }) => {
  const mostSearchedTerms = [
    {
      id: '1º',
      name: 'Genéricos',
    },
    {
      id: '2º',
      name: 'Protetor solar facial',
    },
    {
      id: '3º',
      name: 'Máscara',
    },
    {
      id: '4º',
      name: 'Fralda XG',
    },
    {
      id: '5º',
      name: 'Pampers fralda',
    },
    {
      id: '6º',
      name: 'Fraldas Huggies',
    },
    {
      id: '7º',
      name: 'Neutrogena',
    },
    {
      id: '8º',
      name: 'Ofertas',
    },
    {
      id: '9º',
      name: 'Dorflex',
    },
    {
      id: '10º',
      name: 'Dipirona',
    },
  ];

  return (
    <Container>
      <TitleText>Termos mais buscados</TitleText>
      <FlatList
        data={mostSearchedTerms}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => {
          return (
            <ContainerResults onPress={() => setSearchText(item.name)}>
              <NumberText>{item.id}</NumberText>
              <ResultText>{item.name}</ResultText>
            </ContainerResults>
          );
        }}
        numColumns={null}
        showsVerticalScrollIndicator={true}
      />
    </Container>
  );
};

export default MostSearchedTerms;
