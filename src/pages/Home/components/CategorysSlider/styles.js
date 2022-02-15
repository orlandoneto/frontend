import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

export const SEPARATOR_WIDTH = Dimensions.get('window').width * 0.035;

export const Container = styled.View`
  margin-top: 10px;
  /* margin-bottom: 10px; */

  height: 80px;
`;

export const Touch = styled.TouchableWithoutFeedback``;

export const ContainerCategory = styled.View`
  width: 72px;
  flex: 1;
`;

export const ContainerCard = styled.View``;

export const SeparatorView = styled.View`
  width: ${SEPARATOR_WIDTH}px;
`;

export const NomeCategoria = styled.Text`
  flex-shrink: 1;
  margin-top: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  height: 40px;
  width: 79px;

  color: #666666;
`;

export const ContainerModal = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: 'rgba(0,0,0,.5)';
`;

export const ModalContainerCategory = styled.View`
  width: 80px;
  height: 60px;
  align-items: center;
`;

export const OverlayCloseButton = styled.TouchableWithoutFeedback``;
export const OverlayBackground = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ModalView = styled.View`
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const HeaderModal = styled.View`
  flex-direction: row;
  margin: 20px 0px 0px 10px;
`;

export const TitleModal = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  color: #666666;
`;

export const SubTitleModal = styled.Text`
  margin: 0px 0px 15px 35px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #8c8c8c;
`;

export const IconView = styled.View`
  margin-right: 5px;

  margin-top: 3px;
`;

export const TextoBotao = styled.Text`
  font-size: 12px;
  font-family: Roboto-Medium;
  width: 60px;
  color: #007dc5;
  text-align: center;
  margin-right: 5px;
  font-weight: 700;
`;
export const VerMaisTouch = styled.TouchableOpacity`
  position: absolute;
  right: 7px;
`;

export const SubcategoryBox = styled.View`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  ${css`
    elevation: 1;
  `}
`;
