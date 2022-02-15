import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #ffffff;
  padding: 20px 0px 12px 12px;
  flex-direction: row;
  align-items: center;
`;

export const SearchContainer = styled.View`
  background-color: #ffffff;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const SearchBox = styled.View`
  align-items: center;
  flex-direction: row;
  background-color: #ffffff;
  width: 85%;
  height: 42px;
  border: 2px solid #007dc5;
  border-radius: 10px;
`;

export const SearchButtonTitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${props => props.color};
`;

export const HrTitle = styled.Text`
  background: #d9d9d9;
  position: relative;
  border-radius: 1px;
  width: 2px;
  height: 35px;
`;
