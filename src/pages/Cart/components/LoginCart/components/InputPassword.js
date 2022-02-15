import React, { useState } from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

const AreaFieldPassword = styled.View`
  width: 88%;
`;
const InputPasswordArea = styled.View`
  flex-direction: row;
  height: 45px;
  background: #ffffff;
  opacity: 0.8;
  border: ${props => props.borderColor};
  border-radius: 4px;
  padding-left: 10px;
`;
const IconEye = styled.Image`
  width: 20px;
  height: 20px;
`;
const FieldPassword = styled.TextInput`
  margin-top: ${Platform.OS === 'ios' ? '12px' : 0};
`;

const ButtonEyeArea = styled.TouchableOpacity`
  justify-content: center;
`;
const ButtonEye = styled.TouchableOpacity``;

export default InputPasswordSecurity = ({
  refInput,
  placeholder,
  value,
  onChangeText,
  onBlur,
  onFocus,
  borderColor,
  placeholderTextColor,
  returnKeyType,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [typeEye, setTypeEyer] = useState(false);

  const onIconPress = () => {
    setSecureTextEntry(secureTextEntry => !secureTextEntry);
    setTypeEyer(typeEye => !typeEye);
  };

  return (
    <InputPasswordArea borderColor={borderColor}>
      <AreaFieldPassword>
        <FieldPassword
          ref={refInput}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          onBlur={onBlur}
          onFocus={onFocus}
          returnKeyType={returnKeyType}
          accessibilityLabel={'input-senha'}
        />
      </AreaFieldPassword>

      <ButtonEyeArea>
        <ButtonEye onPress={onIconPress}>
          <IconEye
            resizeMode='contain'
            source={typeEye ? require('~/assets/login/eye-unlock.png') : require('~/assets/login/eye-lock.png')}
          />
        </ButtonEye>
      </ButtonEyeArea>
    </InputPasswordArea>
  );
};
