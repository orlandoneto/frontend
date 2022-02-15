import React, { useRef, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Modal,
  Animated,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native';

import { ModalContainer, ContainerAnimation, Tittle, Button, ButtonLabel, TextButton, TextButtonLabel } from './styles';
import LottieView from 'lottie-react-native';

export default ({ show, hide, toggleRecording, handleSubmitEditing, isRecording }) => {
  const screenHeight = Dimensions.get('window').height * 0.835;

  const animatedHeight = useRef(new Animated.Value(0)).current;

  const openModalEffect = () => {
    Animated.timing(animatedHeight, {
      toValue: screenHeight,
      duration: 550,
      useNativeDriver: false,
    }).start();
  };

  const closeModalEffect = (callback = () => null) => {
    Animated.timing(animatedHeight, {
      //toValue: 44,
      toValue: 0,
      duration: 750,
      useNativeDriver: false,
    }).start(() => {
      hide();
      callback();
    });
  };

  const closeAndSearch = () => {
    closeModalEffect(() => handleSubmitEditing());
  };

  useEffect(() => {
    if (show) {
      openModalEffect();
      toggleRecording();
    }
  }, [show]);

  return (
    <Modal visible={show} transparent={true} animationType='none' onRequestClose={closeModalEffect}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() => {
            closeModalEffect();
          }}
        >
          <Animated.View
            style={[
              {
                backgroundColor: '#fff',
                opacity: 0.9,
                height: animatedHeight,
              },
            ]}
          >
            <TouchableWithoutFeedback>
              <ModalContainer>
                <ContainerAnimation>
                  <LottieView
                    source={require('~/assets/animations/mic.json')}
                    style={{ width: 220, height: 220 }}
                    autoPlay
                    loop={isRecording}
                  />
                </ContainerAnimation>
                <Tittle>Estou te ouvindo...</Tittle>
                <>
                  <Button onPress={() => closeAndSearch()} colorBg={'#007DC5'} accessibilityLabel={`btn-pesquisar`}>
                    <ButtonLabel>Ok, pesquisar</ButtonLabel>
                  </Button>

                  <TextButton onPress={() => closeModalEffect()} accessibilityLabel={`btn-sugestoes`}>
                    <TextButtonLabel>Ver sugestões</TextButtonLabel>
                  </TextButton>
                </>
              </ModalContainer>
            </TouchableWithoutFeedback>
          </Animated.View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
