import React from 'react';
import PropTypes from 'prop-types';
import { Container, TouchableButton, ButtonContainer, Title } from './styles';

const OrderByButton = ({
  title,
  Icon,
  selected,
  SelectedIcon,
  onPress,
  ...rest
}) => (
  <Container>
    <TouchableButton {...rest} onPress={onPress}>
      <ButtonContainer isSelected={selected}>
        {selected ? <SelectedIcon /> : <Icon />}
      </ButtonContainer>
    </TouchableButton>
    <Title isSelected={selected}>{title}</Title>
  </Container>
);

OrderByButton.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  selected: PropTypes.bool.isRequired,
  SelectedIcon: PropTypes.elementType.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default OrderByButton;
