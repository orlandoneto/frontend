import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  Modal,
  KeyboardAvoidingView,
  Platform,
  Animated,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { appleAuth } from '@invertase/react-native-apple-authentication';

import Const from '~/constants/Login';
import Utils from '~/utils/Login';
import Colors from '~/styles/colors';

import InputPassword from './components/InputPassword';

import {
  ModalContainer,
  Title,
  InputLabel,
  InputEmail,
  OrArea,
  OrLeftArea,
  OrTextArea,
  OrText,
  OrRightArea,
  FormContainer,
  BottonsArea,
  BottonGoogleArea,
  BottonGoogle,
  BottonAppleArea,
  BottonApple,
  BottonCodEmail,
  BottonCodEmailArea,
  BottonsAreaGoogle,
  ButtonCad,
  ButtonCadLabel,
  ButtonCadLabel2,
  ButtonRecPassword,
  ButtonRecPasswordLabel,
  ButtonLogin,
  ButtonLoginLabel,
  ButtonVoltar,
  ButtonVoltarLabel,
  ErrorArea,
  ErrorIcon,
  ErrorText,
} from './styles';

import BtnGoogle from '~/assets/login/buttom-google.svg';
import BtnApple from '~/assets/login/apple-signin.svg';
import BtnCodeMailIOS from '~/assets/login/button-cod-email.svg';
import BtnCodeMailAndroid from '~/assets/login/button-cod-email2.svg';

import { Creators as LoginActions } from '~/store/ducks/login';
import { Creators as userCheckCreators } from '~/store/ducks/userCheck';
import { Creators as orderFormActions } from '~/store/ducks/orderForm';

export default function LoginCart({ show, hide }) {
  const { sessionUserApp, sessionGoogle, sessionIOS } = useSelector(state => state.login);
  const { emailsList } = useSelector(state => state.userCheck);
  const { items } = useSelector(state => state.cart);
  const { cupom } = useSelector(state => state.orderForm);

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [validateLogin, setValidateLogin] = useState(Const.EMAIL_VALIDO);
  const [actionLogin, setActionLogin] = useState(Const.FALSE);
  const [validatePassword, setValidatePassword] = useState(Const.PASS_VALIDO);
  const [actionPassword, setActionPassword] = useState(Const.FALSE);

  const [loading, setLoading] = useState(Const.FALSE);
  const [tentativaLogin, setTentativaLogin] = useState(Const.FALSE);
  const [loadedRegisterPersonalData, setLoadedRegisterPersonalData] = useState(false);

  const animatedHeight = useRef(new Animated.Value(0)).current;
  const passInputRef = useRef(null);

  const { primary, secundary } = Colors;

  let timer;

  GoogleSignin.configure({
    webClientId: '496670811135-4pmjrhlqhesl9ftq32o9jojn8jb2jmid.apps.googleusercontent.com',
  });

  const checkInputs = (attribute, field) => {
    if (field === 'login') {
      if (attribute.length >= 1) {
        if (Utils.validateEmail(attribute)) {
          setValidateLogin(Const.FALSE);
        } else setValidateLogin(Const.TRUE);
      }
      if (attribute.length < 1) {
        setValidateLogin(Const.EMAIL_VALIDO);
      }
    }

    if (field === 'password') {
      if (attribute.length >= 1) {
        if (Utils.validatePassword(attribute)) {
          setValidatePassword(Const.FALSE);
        } else setValidatePassword(Const.TRUE);
      }
      if (attribute.length < 1) {
        setValidatePassword(Const.PASS_VALIDO);
      }
    }
  };

  const handleValueLogin = text => {
    setEmail(text);
    checkInputs(text, 'login');
  };

  const handleValuePassword = text => {
    setPassword(text);
    checkInputs(text, 'password');
  };

  const handleCadastrar = () => {
    Keyboard.dismiss();
    Animated.timing(animatedHeight, {
      toValue: 0,
      duration: 750,
      useNativeDriver: false,
    }).start(() => {
      hide();
      navigation.navigate('UserCheck');
    });
  };

  const handleRecuperarSenha = () => {
    Keyboard.dismiss();
    Animated.timing(animatedHeight, {
      toValue: 0,
      duration: 750,
      useNativeDriver: false,
    }).start(() => {
      hide();
      navigation.navigate('ForgotPassword');
    });
  };

  // Lógica de login
  const handleLogin = async () => {
    if (email != '' && password != '') {
      setLoading(Const.TRUE);
      dispatch(userCheckCreators.emailsRequest(email));
      dispatch(LoginActions.loginRequest(email, password));
      dispatch(LoginActions.setSessionUser(email, password));
      setLoading(Const.FALSE);
      setTentativaLogin(Const.TRUE);
    } else {
      alert('Preencha os campos!');
    }
  };

  const handleValidaUserLogin = () => {
    if (sessionUserApp.authStatus === 'Success' && tentativaLogin) {
      Keyboard.dismiss();
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: 750,
        useNativeDriver: false,
      }).start(() => {
        hide();
        dispatch(orderFormActions.createOrderFormItemsRequest({ sessionUserApp }, items, cupom));
        // navigation.navigate('WithdrawalStoreLocker', { userLogado: true });
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'WithdrawalStoreLocker',
              params: {
                userLogado: true,
              },
            },
          ],
        });
      });
    } else if (sessionUserApp.authStatus === 'InvalidToken' && tentativaLogin) {
      setValidatePassword(Const.PASS_INVALIDO);
    } else if (sessionUserApp.authStatus === 'WrongCredentials' && tentativaLogin) {
      setValidatePassword(Const.PASS_INVALIDO);
    }
  };

  const handleSignUpGoogle = async () => {
    try {
      setLoading(Const.TRUE);
      await onGoogleButtonPress().then(() => console.log('Signed in with Google! 2222222222'));

      dispatch(LoginActions.setSessionGoogle(user));
      setLoading(Const.FALSE);
    } catch (e) {
      console.log('error:', e);
    }
  };

  const handleSingUpApple = async () => {
    try {
      setLoading(Const.TRUE);
      await onAppleButtonPress().then(() => console.log('Apple sign-in complete!'));
      dispatch(LoginActions.setSessionIOS(user));
      setLoading(Const.FALSE);
    } catch (e) {
      console.log('error:', e);
    }
  };

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  async function onAppleButtonPress() {
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // 2). if the request was successful, extract the token and nonce
    const { identityToken, nonce } = appleAuthRequestResponse;

    // can be null in some scenarios
    if (identityToken) {
      // 3). create a Firebase `AppleAuthProvider` credential
      const appleCredential = firebase.auth.AppleAuthProvider.credential(identityToken, nonce);

      // 4). use the created `AppleAuthProvider` credential to start a Firebase auth request,
      //     in this example `signInWithCredential` is used, but you could also call `linkWithCredential`
      //     to link the account to an existing user
      const userCredential = await firebase.auth().signInWithCredential(appleCredential);

      // user is now signed in, any Firebase `onAuthStateChanged` listeners you have will trigger
      console.warn(`Firebase authenticated via Apple, UID: ${userCredential.user.uid}`);
    } else {
      // handle this - retry?
    }
  }

  useEffect(() => {
    if (Platform.OS === 'ios') {
      dispatch(LoginActions.setSessionIOS(user));
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return appleAuth.onCredentialRevoked(async () => {
        console.warn('If this function executes, User Credentials have been Revoked') || subscriber;
      });
    }

    dispatch(LoginActions.setSessionGoogle(user));
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [sessionGoogle, sessionIOS]);

  // Valida os dados pessoais do usuário
  useEffect(() => {
    if (sessionGoogle && Object.keys(sessionGoogle).length > 0) {
      if (emailsList !== undefined && Object.keys(emailsList).length == 0 && !loadedRegisterPersonalData) {
        console.log('### -- CARREGA OS DADOS DO USUÁRIO -- ###');
        dispatch(userCheckCreators.emailsRequest(sessionGoogle.email));
        setLoadedRegisterPersonalData(true);
      }

      if (emailsList.length !== undefined && emailsList.length > 0) {
        console.log('-- Usuário com dados registrados --');
        closeModalEffect();
        dispatch(orderFormActions.createOrderFormItemsRequest({ sessionUserApp }, items, cupom));
        navigation.navigate('WithdrawalStoreLocker', { userLogado: true });
      } else if (emailsList.length !== undefined && emailsList.length === 0) {
        console.log('-- Usuário sem dados registrados --');
        closeModalEffect();
        navigation.navigate('RegisterPersonalData', { redirectTo: 'WithdrawalStoreLocker' });
      }
    } else if (sessionIOS && Object.keys(sessionIOS).length > 0) {
      if (emailsList !== undefined && Object.keys(emailsList).length == 0 && !loadedRegisterPersonalData) {
        console.log('### -- CARREGA OS DADOS DO USUÁRIO -- ###');
        dispatch(userCheckCreators.emailsRequest(sessionIOS.email));
        setLoadedRegisterPersonalData(true);
      }

      if (emailsList.length !== undefined && emailsList.length > 0) {
        console.log('-- Usuário com dados registrados --');
        closeModalEffect();
        dispatch(orderFormActions.createOrderFormItemsRequest({ sessionUserApp }, items, cupom));
        navigation.navigate('WithdrawalStoreLocker', { userLogado: true });
      } else if (emailsList.length !== undefined && emailsList.length === 0) {
        console.log('-- Usuário sem dados registrados --');
        closeModalEffect();
        navigation.navigate('RegisterPersonalData', { redirectTo: 'WithdrawalStoreLocker' });
      }
    }
  }, [sessionGoogle, emailsList, sessionIOS]);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    handleValidaUserLogin();
  }, [sessionUserApp]);

  const loginButtonDisabled = useMemo(() => {
    if (
      !validateLogin &&
      !validatePassword &&
      email !== undefined &&
      email.length > 0 &&
      password !== undefined &&
      password.length > 0
    ) {
      return false;
    }

    return true;
  }, [validateLogin, validatePassword, email, password]);

  // Controla as cores dos campos
  const changeColorLogin = () => {
    if (validateLogin) return !actionLogin ? secundary.gray04 : primary.red80;
    else return !actionLogin ? secundary.gray04 : primary.lightBlue100;
  };

  const changeColorPassword = () => {
    if (validatePassword) {
      return !actionPassword ? secundary.gray04 : primary.red80;
    } else return !actionPassword ? secundary.gray04 : primary.lightBlue100;
  };

  // Efeitos de abertura/Fechamento
  const openModalEffect = () => {
    Animated.timing(animatedHeight, {
      toValue: 450,
      duration: 550,
      useNativeDriver: false,
    }).start();
  };

  const closeModalEffect = () => {
    Keyboard.dismiss();
    Animated.timing(animatedHeight, {
      toValue: 0,
      duration: 750,
      useNativeDriver: false,
    }).start(hide);
  };

  useEffect(() => {
    if (show) {
      openModalEffect();
    }
  }, [show]);

  function redirectPageSendCodeByEmail() {
    hide();
    navigation.navigate('LoginCodeScreen', { screen: 'SendMailLogin' });
  }

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
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                height: animatedHeight,
              },
            ]}
          >
            <TouchableWithoutFeedback>
              <ModalContainer>
                <Title>Faça o login para continuar</Title>

                <InputLabel action={changeColorLogin}>E-mail</InputLabel>
                <InputEmail
                  action={changeColorLogin}
                  placeholder='Informe seu e-mail'
                  placeholderTextColor='#8C8C8C'
                  value={email}
                  onChangeText={text => handleValueLogin(text)}
                  onBlur={() => setActionLogin(Const.FALSE)}
                  onFocus={() => setActionLogin(Const.TRUE)}
                  blurOnSubmit={Const.FALSE}
                  keyboardType='email-address'
                  autoCapitalize='none'
                  autoCorrect={false}
                  returnKeyType='next'
                  onSubmitEditing={() => passInputRef.current.focus()}
                  accessibilityLabel={'input-email'}
                />
                {validateLogin && (
                  <ErrorArea>
                    <ErrorIcon
                      style={{ width: 15, height: 15, marginTop: 2 }}
                      source={require('~/assets/login/icon-error.png')}
                    />
                    <ErrorText>Por favor, informe um e-mail válido.</ErrorText>
                  </ErrorArea>
                )}

                <InputLabel action={changeColorPassword}>Senha</InputLabel>
                <InputPassword
                  refInput={passInputRef}
                  borderColor={changeColorPassword}
                  placeholder='Digite sua senha'
                  placeholderTextColor='#8C8C8C'
                  value={password}
                  onChangeText={text => handleValuePassword(text)}
                  onBlur={() => setActionPassword(Const.FALSE)}
                  onFocus={() => setActionPassword(Const.TRUE)}
                  returnKeyType='done'
                />
                {validatePassword && (
                  <ErrorArea>
                    <ErrorIcon
                      style={{ width: 15, height: 15, marginTop: 2 }}
                      source={require('~/assets/login/icon-error.png')}
                    />
                    <ErrorText>E-mail ou senha incorretos.</ErrorText>
                  </ErrorArea>
                )}

                <ButtonRecPassword accessibilityLabel='input-esqueci-senha' onPress={() => handleRecuperarSenha()}>
                  <ButtonRecPasswordLabel>Esqueci minha senha</ButtonRecPasswordLabel>
                </ButtonRecPassword>

                <OrArea>
                  <OrLeftArea />
                  <OrTextArea>
                    <OrText>Ou</OrText>
                  </OrTextArea>
                  <OrRightArea />
                </OrArea>

                {Platform.OS === 'ios' ? (
                  <FormContainer>
                    {/* <BottonsArea>
                      <BottonGoogleArea>
                        <BottonGoogle onPress={handleSignUpGoogle}>
                          <BtnGoogle />
                        </BottonGoogle>
                      </BottonGoogleArea>
                      <BottonAppleArea>
                        <BottonApple onPress={handleSingUpApple}>
                          <BtnApple />
                        </BottonApple>
                      </BottonAppleArea>
                    </BottonsArea> */}
                    <BottonsArea>
                      <BottonCodEmailArea>
                        <BottonCodEmail onPress={redirectPageSendCodeByEmail}>
                          <BtnCodeMailIOS />
                        </BottonCodEmail>
                      </BottonCodEmailArea>
                    </BottonsArea>
                  </FormContainer>
                ) : (
                  <FormContainer>
                    <BottonsAreaGoogle>
                      <BottonGoogleArea>
                        <BottonGoogle onPress={handleSignUpGoogle}>
                          <BtnGoogle />
                        </BottonGoogle>
                      </BottonGoogleArea>
                      <BottonCodEmailArea>
                        <BottonCodEmail onPress={redirectPageSendCodeByEmail}>
                          <BtnCodeMailAndroid />
                        </BottonCodEmail>
                      </BottonCodEmailArea>
                    </BottonsAreaGoogle>
                  </FormContainer>
                )}

                <ButtonCad accessibilityLabel={'btn-cadastrar'} onPress={() => handleCadastrar()}>
                  <ButtonCadLabel>
                    Não tem conta? <ButtonCadLabel2>Cadastre-se</ButtonCadLabel2>
                  </ButtonCadLabel>
                </ButtonCad>

                <ButtonLogin
                  accessibilityLabel={'btn-continuar'}
                  disabled={loginButtonDisabled}
                  onPress={() => handleLogin()}
                >
                  <ButtonLoginLabel>Continuar</ButtonLoginLabel>
                </ButtonLogin>

                <ButtonVoltar accessibilityLabel={'btn-voltar'} onPress={() => closeModalEffect()}>
                  <ButtonVoltarLabel>Voltar</ButtonVoltarLabel>
                </ButtonVoltar>
              </ModalContainer>
            </TouchableWithoutFeedback>
          </Animated.View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,.4)',
  },
});
