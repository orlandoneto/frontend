import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const SEPARATOR_WIDTH = Dimensions.get('window').width * 0.045;
export const Container = styled.View``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;

export const TitlesArea = styled.View``;

export const HrTitle = styled.Text`
  background: #d9d9d9;
  border-radius: 1px;
  width: 45px;
  margin-left: 20px;
  height: 3px;
  margin-top: -15px;
`;
export const Title = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;

  margin-bottom: 5px;
  color: #007dc5;
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
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  margin-left: -5px;
  color: #666666;
`;

export const ContainerModal = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.5);
  align-items: center;
  justify-content: center;
`;
