import React from 'react';

import {
  Container,
  SectionHeader,
  HeaderLeft,
  Title,
  RightButton,
} from './styles';

const FilterSection = ({
  title,
  Icon,
  borderBottom,
  RightIcon,
  onRightPress,
  isOpen,
  previewText,
  children,
}) => {
  return (
    <Container>
      {title && (
        <SectionHeader borderBottom={borderBottom}>
          <HeaderLeft>
            <Icon />
            <Title>{title}</Title>
          </HeaderLeft>

          {RightIcon && (
            <RightButton onPress={onRightPress}>
              <RightIcon />
            </RightButton>
          )}
        </SectionHeader>
      )}
      {children}
    </Container>
  );
};

export default FilterSection;
