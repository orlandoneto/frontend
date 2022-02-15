import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from 'react';
import AlertCircle from '~/assets/svg/alert-circle.svg';

import {
  Container,
  LabelText,
  InputText,
  ErrorContainer,
  ErrorText,
} from './styles';

const Input = (
  { handleChangeText, label, error, errorText, containerStyle = {}, ...rest },
  ref
) => {
  const inputElementRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  return (
    <Container style={containerStyle}>
      <LabelText isFocused={isFocused} isErrored={!!error}>
        {label}
      </LabelText>
      <InputText
        ref={inputElementRef}
        error={error}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        isErrored={!!error}
        onChangeText={(text) => handleChangeText(text)}
        {...rest}
      />
      {error && errorText && (
        <ErrorContainer>
          <AlertCircle />
          <ErrorText>{errorText}</ErrorText>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default forwardRef(Input);
