import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-content: center;
  padding-bottom: 100px;
  background-color: #f9f9f9;
`;

export const ContainerLoading = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-content: center;
  background: #f9f9f9;
`;

export const ProductScroll = styled.ScrollView`
  flex: 1;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;

  margin-bottom: ${Platform.OS === 'ios' ? '120px' : '0px'};
`;

export const AreaButton = styled.View`
  flex-direction: row;
  justify-content: space-evenly;

  width: 120px;
  height: 38px;

  margin-top: 8px;
  padding: 5px;
  margin-left: 10px;

  background-color: #ffffff;
  border: 2px solid rgba(243, 243, 243, 10);
  border-radius: 2px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16);
`;
