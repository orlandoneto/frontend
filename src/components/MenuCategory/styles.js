import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  width: 100px;
  background-color: transparent;
`;

export const CategoryBox = styled.TouchableHighlight`
  background-color: ${props => props.selected};
  width: 100px;
  height: 80px;
  margin-bottom: 1px;
  align-items: center;
  justify-content: center;
`;
