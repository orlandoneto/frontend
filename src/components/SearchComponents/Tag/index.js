import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Container, Title, ViewCloseIcon } from './styles';
import CloseIcon from '~/assets/svg/search/close-icon.svg';

const Tag = ({ name, onDelete, ...rest }) => (
  <Container {...rest}>
    <Title>{name}</Title>
    <TouchableHighlight onPress={onDelete}>
      <ViewCloseIcon>
        <CloseIcon />
      </ViewCloseIcon>
    </TouchableHighlight>
  </Container>
);

export default Tag;
