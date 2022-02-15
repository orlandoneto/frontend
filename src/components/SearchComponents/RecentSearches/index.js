import React, { useEffect, useState } from 'react';

import { Container, TitleText, ContainerResults, SeeMore, ContainerHeader } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { TouchableHighlight, TouchableOpacity } from 'react-native';

import Tag from '../Tag';
import { Footer } from '../Tag/styles';

import { Creators as searchActions } from '~/store/ducks/search';
import { Creators as loaderCreators } from '~/store/ducks/loader';
import { Creators as productActions } from '~/store/ducks/products';

const RecentSearches = ({ setSearchText }) => {
  const dispatch = useDispatch();
  const { recentSearches } = useSelector(state => state.search);

  const [search, setSearch] = useState([]);

  const pressSeeMore = () => {};

  const handleOnTagDelete = tag => {
    dispatch(searchActions.deleteRecentSearch(tag));
  };

  const handleSearchProductByTag = tag => {
    setSearchText(tag);
    dispatch(productActions.getBuscarMarcaPorNomeProdutoRequest(tag));
    dispatch(loaderCreators.stop());
  };

  useEffect(() => {
    let searchList = recentSearches?.filter(function (e) {
      return e.replace(/(\r\n|\n|\r)/gm, '');
    });
    setSearch(searchList);
  }, [recentSearches]);

  return (
    <>
      {search && search?.length > 0 && (
        <Container>
          <ContainerHeader>
            <TitleText>Pesquisas recentes</TitleText>
            <TouchableHighlight onPress={() => pressSeeMore()}>
              <SeeMore>Ver todos</SeeMore>
            </TouchableHighlight>
          </ContainerHeader>
          <ContainerResults>
            {search.map((recentSearch, index) => (
              <TouchableOpacity key={index} onPress={() => handleSearchProductByTag(recentSearch)}>
                <Tag name={recentSearch} onDelete={() => handleOnTagDelete(recentSearch)} />
              </TouchableOpacity>
            ))}
          </ContainerResults>
          <Footer />
        </Container>
      )}
    </>
  );
};

export default RecentSearches;
