import React, { useState, useMemo } from 'react';
import { TextInput, Modal, FlatList, Text } from 'react-native';
import SearchIcon from '~/assets/svg/search-icon-medium.svg';
import CloseIcon from '~/assets/svg/close-icon.svg';

import {
  Container,
  Content,
  Header,
  HeaderTitleContainer,
  Title,
  CloseButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  LocationContainer,
  LocationTitle,
} from './styles';

const SelectLocationModal = ({
  title,
  searchPlaceholder,
  list,
  handleSelectItem,
  modalVisible,
  closeModal,
}) => {
  const [searchText, setSearchText] = useState('');

  const filteredList = useMemo(() => {
    return list.filter((item) => {
      const itemName = `${item
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase()}`;
      return itemName.indexOf(searchText.toUpperCase()) > -1;
    });
  }, [list, searchText]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      closeModal={closeModal}
    >
      <Container>
        <Content>
          <Header>
            <HeaderTitleContainer>
              <Title>{title}</Title>
              <CloseButton onPress={() => closeModal()}>
                <CloseIcon />
              </CloseButton>
            </HeaderTitleContainer>
            <SearchContainer>
              <SearchInput
                placeholder={searchPlaceholder}
                placeholderTextColor="#666666"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
              />
              <SearchButton>
                <SearchIcon />
              </SearchButton>
            </SearchContainer>
          </Header>
          <FlatList
            data={filteredList}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return (
                <LocationContainer onPress={() => handleSelectItem(item)}>
                  <LocationTitle>{item}</LocationTitle>
                </LocationContainer>
              );
            }}
            numColumns={null}
          />
        </Content>
      </Container>
    </Modal>
  );
};

export default SelectLocationModal;
