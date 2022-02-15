import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-bottom: 10px;
`;
export const Indicator = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 90px;
  margin-right: 8px;
  background-color: #d9d9d9;
`;
export const ActivatedIndicator = styled.View`
  height: 6px;
  border-radius: 90px;
  width: 28px;
  margin-right: 8px;
  background-color: #007dc5;
`;
