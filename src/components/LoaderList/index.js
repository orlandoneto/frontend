import React from 'react';
import { useSelector } from 'react-redux';
import { LoadingContainer } from './styles';
import LottieView from 'lottie-react-native';

const LoaderList = () => {
  const { isLoading } = useSelector(state => state.loaderList);

  return (
    <LoadingContainer visible={isLoading}>
      {isLoading && (
        <LottieView
          source={require('~/assets/animations/Loadercruzazul.json')}
          style={{ width: 80, height: 80 }}
          autoPlay
          loop={true}
        />
      )}
    </LoadingContainer>
  );
};

export default LoaderList;
