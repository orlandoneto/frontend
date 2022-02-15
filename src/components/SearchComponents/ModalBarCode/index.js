import React, { useState, useEffect, useRef } from 'react';
import {
  Modal,
  Keyboard,
  Alert,
  Animated,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Titulo, ContainerModalHeader, BackButton, ContainerBarCode } from './styles';
import ArrowLeft from '~/assets/svg/arrow-left-white.svg';

import { Creators as productActions } from '~/store/ducks/products';

export default ({ show, hide }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const screenHeight = Dimensions.get('window').height;
  const animatedHeight = useRef(new Animated.Value(0)).current;

  const { eanCodeValid, productByEan } = useSelector(state => state.products);
  const [loadingSearchProduct, setLoadingSearchProduct] = useState(false);

  const openModalEffect = () => {
    Animated.timing(animatedHeight, {
      toValue: screenHeight,
      duration: 0,
      useNativeDriver: false,
    }).start();
  };

  const processarBarcode = barcode => {
    if (barcode.data && !loadingSearchProduct) {
      setLoadingSearchProduct(true);
      dispatch(productActions.getProductByEanRequest(barcode.data));
    }
  };

  // Monitora o resultado da busca por EAN
  useEffect(() => {
    if (eanCodeValid !== null) {
      setLoadingSearchProduct(false);
      //Código de barras válido (corresponde a um produto cadastrado)
      if (eanCodeValid) {
        dispatch(productActions.setSelectedProduct(productByEan));
        dispatch(productActions.clearProductByEan());
        hide();
        Keyboard.dismiss();
        navigation.navigate('ProductsPage');
      } else {
        //dispatch(productActions.clearProductByEan());
        Alert.alert('Não localizado', 'O código de barras escaneado não foi localizado em nossa loja!', [
          {
            text: 'OK',
            onPress: () => {
              Keyboard.dismiss();

              setLoadingSearchProduct(false);
              dispatch(productActions.clearProductByEan());
            },
          },
        ]);
      }
    }
  }, [eanCodeValid, productByEan]);

  useEffect(() => {
    if (show) {
      openModalEffect();
    }
  }, [show]);

  return (
    <Modal visible={show} transparent={true} animationType='none' onRequestClose={() => hide()}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() => {
            hide();
          }}
        >
          <Animated.View
            style={[
              {
                opacity: 1,
                height: animatedHeight,
              },
            ]}
          >
            <ContainerBarCode>
              <RNCamera
                style={{
                  flex: 1,
                }}
                onBarCodeRead={barcode => processarBarcode(barcode)}
              >
                <BarcodeMask
                  width={340}
                  height={170}
                  outerMaskOpacity={0.8}
                  showAnimatedLine={true}
                  animatedLineColor={'#F9F9F9'}
                  edgeBorderWidth={5}
                  edgeColor={'#F9F9F9'}
                  edgeWidth={40}
                  edgeHeight={40}
                  animatedLineWidth={'95%'}
                  lineAnimationDuration={15000}
                />
                <ContainerModalHeader>
                  <BackButton onPress={() => hide()}>
                    <ArrowLeft width={20} height={20} stroke='#FFF' />
                  </BackButton>
                </ContainerModalHeader>

                <Titulo position={100}>Posicione a câmera</Titulo>
                <Titulo position={10}>no código de barras</Titulo>
              </RNCamera>
            </ContainerBarCode>
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
