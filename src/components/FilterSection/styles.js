import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.14);
  border-radius: 5px;
  ${css`
    elevation: 1;
  `}
  margin-top: 15px;
`;

export const SectionHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  padding: 0px 6px 0px 12px;
  border-bottom-width: ${(props) => (props.borderBottom ? '1px' : 0)};
  border-bottom-color: ${(props) =>
    props.borderBottom ? '#E8E8E8' : 'transparent'};
`;

export const HeaderLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 14px;
  color: #666666;
  margin-left: 8px;
`;

export const RightButton = styled.TouchableOpacity`
  padding: 6px;
`;
