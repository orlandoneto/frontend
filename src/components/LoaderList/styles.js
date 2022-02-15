import styled from 'styled-components/native';

const styleLoading = `
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
    z-index: 10;
    position: absolute;
    bottom: 0;
`;

export const LoadingContainer = styled.SafeAreaView`
  ${props => (props.visible ? styleLoading : null)}
`;

export const ImageLoading = styled.Image``;
