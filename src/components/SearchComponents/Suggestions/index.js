import React, { useMemo, useCallback } from 'react';
import { FlatList, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Container, TitleText, ResultText, ContainerResults, Line, ButtonSuggestion } from './styles';

import { Creators as searchActions } from '~/store/ducks/search';

const Suggestions = ({ searchText, suggestionProducts }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSearchSuggestion = useCallback(
    itemName => {
      dispatch(searchActions.addRecentSearch(searchText));
      navigation.navigate('SearchProductList', { searchText: itemName });
    },
    [searchText]
  );

  return (
    <Container>
      <TitleText>Sugestões</TitleText>
      <FlatList
        data={suggestionProducts}
        keyExtractor={item => String(item.productId)}
        renderItem={({ item }) => {
          return (
            <ContainerResults>
              <ButtonSuggestion onPress={() => handleSearchSuggestion(item.productName)}>
                <ResultText numberOfLines={1}>{item.productName}</ResultText>
                <Line />
              </ButtonSuggestion>
            </ContainerResults>
          );
        }}
        numColumns={null}
        showsVerticalScrollIndicator={true}
      />
    </Container>
  );
};

export default Suggestions;
