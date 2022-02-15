import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

const horizontalMargin = 6;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth * 0.85 + horizontalMargin * 2;

export const Container = styled.View`
  flex: 1;
  width: ${screenWidth}px;
  height: 260px;
  margin-bottom: 10px;
  border-radius: 6px;
`;
export const HrTitle = styled.Text`
  background: #d9d9d9;
  border-radius: 1px;
  width: 45px;
  margin-left: 15px;
  margin-bottom: 10px;
  height: 3px;
  margin-top: -15px;
`;
export const ImageArea = styled.TouchableOpacity`
  margin: 0 15px;
  background-color: red;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
  padding-right: ${horizontalMargin}px;
  box-shadow: 0px 0px 4.5px rgba(0, 0, 0, 0.12);
  ${css`
    elevation: 1;
  `}

  border-radius: 5px;
  background-color: #ffffff;
`;

export const ImageItemOferta = styled.Image`
  width: ${screenWidth * 0.18}px;
  height: ${screenWidth * 0.14}px;
  margin-right: 40px;
`;

export const DescriptionAreaOferta = styled.View`
  margin-right: 8px;
  margin-left: 15px;
`;

export const DescriptionOferta = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

export const ImageItem = styled.Image`
  width: ${screenWidth * 0.18}px;
  height: ${screenWidth * 0.14}px;
  margin-right: 40px;
`;

export const DescriptionArea = styled.View`
  margin-right: 8px;
  margin-left: 15px;
`;

export const Description = styled.Text`
  font-size: 18px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px;
`;

export const TitlesArea = styled.View``;

export const LinkArea = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 15px;
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

  color: #666666;
`;

export const LinkText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;

  color: #007dc5;
`;
