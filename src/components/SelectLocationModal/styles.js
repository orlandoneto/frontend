import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

// 5.94%
const verticalPadding = Dimensions.get('window').height * 0.0594;
// 4.17%
const horizontalPadding = Dimensions.get('window').width * 0.0417;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: ${verticalPadding}px ${horizontalPadding}px;
`;

export const Content = styled.View`
  max-width: 100%;
  max-height: 100%;

  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  padding-bottom: 2px;
`;

export const Header = styled.View`
  padding: 16px 14px 12px 16px;
`;

export const HeaderTitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 18px;
  line-height: 21px;
  color: #007dc5;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 4px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  height: 42px;
  border-radius: 10px;

  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
`;
export const SearchInput = styled.TextInput`
  font-family: 'Roboto-Regular';
  color: #666666;
  font-size: 14px;
  padding: 13px 12px;
  line-height: 16px;
  width: 80%;
`;

export const SearchButton = styled.TouchableOpacity`
  padding: 13px 12px;
`;
export const LocationContainer = styled.TouchableOpacity`
  width: 100%;
  border-top-width: 0.95px;

  border-color: #e8e8e8;
  padding: 10px 19px;
`;
export const LocationTitle = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 18px;
  line-height: 21px;
  color: #666666;
  padding: 0;
`;
