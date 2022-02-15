import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const SEPARATOR_WIDTH = Dimensions.get('window').width * 0.040;
export const Container = styled.View`
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;


  margin-top: 18px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const TitlesArea = styled.View`
  flex-direction: row;
`;
export const TitlesAreaVerMais = styled.View`
  display: flex;
  justify-content: flex-end;
`;

export const HrTitle = styled.Text`
  background: #d9d9d9;
  border-radius: 1px;
  /* width: 45px; */
  margin-left: 10px;
  margin-right: 10px;

  height: 1px;
  margin-top: -15px;
`;

export const SubTitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  margin-left: -5px;
  color: #666666;
`;

export const SubTitleVitrine = styled.Text`
  margin-left: -5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
`;

export const VerMaisTouch = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextoBotao = styled.Text`
  font-size: 12px;
  font-family: Roboto-Medium;
  color: #007dc5;
`;

export const ArrowArea = styled.View`
  padding-top: 2.5px;
  margin-left: 2px;
`;

export const IconView = styled.View`
  margin-right: 8px;

`;
