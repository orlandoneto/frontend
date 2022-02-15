import React, { useRef, forwardRef, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import SearchIcon from '~/assets/svg/search-icon.svg';
import SearchIconWhite from '~/assets/svg/white-search-icon.svg';

import { Container, TextInput } from './styles';

const SearchInput = ({ onFocus, handleChangeText, containerStyle = {}, ...rest }, ref) => {
  const navigation = useNavigation();

  const inputElementRef = useRef(null);

  const handleInputFocus = useCallback(() => {
    onFocus();
  }, [onFocus]);

  return (
    <Container style={containerStyle}>
      <TextInput
        ref={inputElementRef}
        onFocus={handleInputFocus}
        onChangeText={text => handleChangeText(text)}
        {...rest}
      />
      <SearchIconWhite onPress={() => navigation.navigate('Search')} />
    </Container>
  );
};

export default forwardRef(SearchInput);
