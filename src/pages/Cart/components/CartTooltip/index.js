import React from 'react';
import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native';
import { StyleNative } from './styles';

const CartTooltip = ({ itemsSimulation, modalVisible, handleCloseModal }) => {
  return (
    <View style={StyleNative.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <View style={StyleNative.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={StyleNative.centeredView}>
          <View style={StyleNative.modalView}>
            <Text style={StyleNative.modalText}>Valor desconto</Text>
            {itemsSimulation.ratesAndBenefitsData &&
              itemsSimulation.ratesAndBenefitsData.rateAndBenefitsIdentifiers.map(
                (benefit, index) => (
                  <View key={index}>
                    <Text style={StyleNative.modalText}>{benefit.name}</Text>
                  </View>
                )
              )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CartTooltip;
