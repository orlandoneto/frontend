import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: 'rgba(0,0,0,.5)';
`;

export const ModalView = styled.View`
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const IndicatorStart = styled.View`
  width: 50px;
  height: 5px;
  background-color: transparent;
  border-radius: 50px;
  align-self: center;
  margin-top: 5px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;

  background-color: ${props => props.valid};
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
`;

export const ButtonLabel = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const TitleArea = styled.View`
  margin-top: 14px;
  margin-bottom: 10px;
`;
export const Title = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;

  color: #007dc5;
`;

export const DescriptionArea = styled.View`
  margin-top: 10px;
  margin-bottom: 5px;
`;
export const Description = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;

  color: ${props => props.color};
`;

export const InputDiscountArea = styled.View`
  height: 25px;
`;

export const InputDiscount = styled.TextInput`
  height: 45px;
  padding-left: 10px;

  background: #ffffff;
  opacity: 0.8;
  border: 2px solid ${props => props.color};

  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
`;

export const ValidDiscount = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  width: 300px;
  margin-top: 25px;
`;

export const ValidDiscountArea = styled.View`
  width: 20px;
`;

export const TextDiscountArea = styled.View``;

export const TextDiscount = styled.Text`
  font-size: 14px;
  color: #f14a50;
`;

export const OverlayCloseButton = styled.TouchableWithoutFeedback``;

export const OverlayBackground = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /*background-color: rgba(0,0,0,0.5);,*/
`;

/** * Native Styles ** */
export const NativeStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
  },
  modal: {
    bottom: 0,
    position: 'absolute',
    height: '32%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
});
