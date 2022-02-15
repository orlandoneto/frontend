import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const SEPARATOR_WIDTH = Dimensions.get('window').width * 0.04;

export const Container = styled.View`
  padding-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const Touch = styled.TouchableWithoutFeedback``;
export const ContainerCategory = styled.View`
  width: 62px;
  height: 60px;
  flex: 1;
`;

export const ModalContainerCategory = styled.View`
  width: 80px;
  height: 60px;
  align-items: center;
`;

export const SeparatorView = styled.View`
  width: ${SEPARATOR_WIDTH}px;
`;

export const Header = styled.View`
  margin: 15px;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;

  color: #666666;
`;

export const Contador = styled.Text`
  margin: 2px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;

  color: #bababa;
`;

export const TitlesAreaVerMais = styled.View`
  margin-top: 10px;
  margin-left: 10px;
  flex-direction: row;
`;

export const TextoBotao = styled.Text`
  font-size: 12px;
  font-family: Roboto-Medium;
  width: 50px;
  color: #007dc5;
  text-align: center;
  margin-right: 5px;
`;
export const VerMaisTouch = styled.TouchableOpacity``;

export const SubcategoryArea = styled.View`
  flex-direction: row;
`;

export const HrTitle = styled.Text`
  background: #d9d9d9;
  border-radius: 1px;
  margin-left: 10px;
  height: 48px;
  width: 1px;
  margin-top: -10px;
`;

export const ContainerModal = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: 'rgba(0,0,0,.5)';
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
  margin: 20px 0px 0px 20px;
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
  margin: 0px 0px 15px 45px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #8c8c8c;
`;

export const IconView = styled.View`
  margin-right: 5px;
`;
