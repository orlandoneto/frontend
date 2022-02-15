import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  background-color: #ffffff;
  border: 3px solid #f7f7f7;
  border-radius: 5px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 14px;
`;
export const StoreTitle = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 14px;
  color: #666666;
  line-height: 16px;
`;

export const StoreInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const AddressContainer = styled.View`
  margin-top: 6px;
  margin-bottom: 2px;
`;
export const AddressText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #8c8c8c;
  margin-bottom: 6px;
  padding: 0;
  line-height: 14px;
`;
export const DistanceContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;
export const DistanceText = styled.Text`
  font-family: 'Roboto-Medium';
  color: #666666;
  font-size: 14px;
  text-align: center;
  line-height: 16px;
`;
export const IsOpenText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  text-align: center;
  color: ${props => (props.isOpen ? '#00A02A' : '#ED1D24')};
  line-height: 14px;
`;

export const SeeRouteButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
export const SeeRouteButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  color: #007dc5;
  font-size: 14px;
  padding-left: 0;
  margin-left: 10px;
`;
