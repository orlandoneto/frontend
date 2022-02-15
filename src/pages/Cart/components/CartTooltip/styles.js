import { StyleSheet } from 'react-native';

export const StyleNative = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    /*backgroundColor: 'rgba(0,0,0,0.5)',*/
  },
  modalView: {
    width: 260,
    bottom: 80,
    position: 'absolute',
    fontSize: 50,
    backgroundColor: '#8C8C8C',
    borderRadius: 5,
    padding: 15,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
    color: '#FFF',
    fontWeight: '500',
  },
});
