import styled from 'styled-components/native';

const styleLoading = `
    height: 100%;
    width: 100%;
    background-color: #007DC5;
    justify-content: center;
    align-items: center;
    z-index: 10;
    position: absolute;
    bottom: 0;
`;

export const LoadingContainer = styled.View`
  ${props => (props.visible ? styleLoading : null)}
`;

export const Content = styled.View``;
export const ImageLoading = styled.Image``;