import React, { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Voice from '@react-native-voice/voice';
import { Container, SearchBox, SearchContainer, SearchButtonTitle, HrTitle } from './styles';

import ModalBarCode from '../ModalBarCode';

import ArrowLeft from '~/assets/svg/arrow-left.svg';
import SearchIcon from '~/assets/svg/cyan-search-icon.svg';
import AudioIcon from '~/assets/svg/search/audio-icon.svg';
import AudioEnabledIcon from '~/assets/svg/search/audio-enabled-icon.svg';
import CodeIcon from '~/assets/svg/search/code-icon.svg';
import CodeEnableIcon from '~/assets/svg/search/code-icon-red.svg';

import ImageIcon from '~/assets/svg/search/image-icon.svg';

import { Creators as searchActions } from '~/store/ducks/search';

import { useDispatch } from 'react-redux';
import { Creators as loaderCreators } from '~/store/ducks/loader';
import { Creators as productActions } from '~/store/ducks/products';
import ModalAudio from '../ModalAudio';

const SearchBar = ({ value, setValue, setSuggestionsView }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const [isRecording, setIsRecording] = useState(false);
  const [showModalBarcode, setShowModalBarcode] = useState(false);
  const [showModalAudio, setShowModalAudio] = useState(false);

  const handleSubmitEditing = useCallback(() => {
    if (value.trim().length > 0) {
      dispatch(searchActions.addRecentSearch(value.trim()));
      navigation.navigate('SearchProductList', { searchText: value.trim() });
    }
  }, [value]);

  const onCloseModal = () => {
    setShowModalAudio(false);
    setIsRecording(false);
    Voice.stop();
  };

  const onSpeechResultsHandler = e => {
    console.log('onSpeechResultsHandler', e);
    setValue(e.value[0]);
  };

  const onSpeechEndHandler = e => {
    onCloseModal();
  };

  // Inicializa a lib de reconhecimento de voz
  useEffect(() => {
    Voice.onSpeechResults = onSpeechResultsHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;

    return Voice.destroy().then(Voice.removeAllListeners);
  }, []);

  useEffect(() => {
    if (showModalBarcode || showModalAudio) setSuggestionsView(false);
    else setSuggestionsView(true);
  }, [showModalBarcode, showModalAudio]);

  // Desativa o reconhecimento de voz ao sair da tela
  useEffect(() => {
    if (!isFocused && isRecording) {
      toggleRecording();
    }
  }, [isFocused]);

  const toggleRecording = async () => {
    if (!isRecording) {
      setIsRecording(true);
      try {
        await Voice.start('pt-BR');
      } catch (error) {
        console.log('Error startRecording ', error);
        setIsRecording(false);
      }
    } else {
      setIsRecording(false);
      try {
        await Voice.stop();
      } catch (error) {
        console.log('Error stopRecording ', error);
        setIsRecording(true);
      }
    }
  };

  return (
    <>
      <Container>
        <TouchableOpacity
          onPress={() => {
            dispatch(productActions.getBuscarMarcaPorNomeProdutoRequest(null));
            dispatch(loaderCreators.stop());
            navigation.goBack();
          }}
        >
          <ArrowLeft style={{ marginLeft: 12, marginRight: 12 }} />
        </TouchableOpacity>
        <SearchBox>
          <TextInput
            accessibilityLabel='input-pesquisa'
            value={value}
            onChangeText={valor => setValue(valor)}
            // onEndEditing={() => {
            //   dispatch(productActions.getBuscarMarcaPorNomeProdutoRequest(value));
            // }}
            onSubmitEditing={() => handleSubmitEditing()}
            autoFocus
            spellCheck={false}
            style={{
              width: '85%',
              height: 38,
              backgroundColor: '#ffffff',
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              padding: 7,
              color: '#666666',
            }}
          />
          <TouchableOpacity onPress={() => handleSubmitEditing()}>
            <SearchIcon
              accessibilityLabel='btn-pesquisar-lupa'
              style={{
                marginLeft: 20,
              }}
              onPress={() => handleSubmitEditing()}
            />
          </TouchableOpacity>
        </SearchBox>
      </Container>
      <SearchContainer>
        <TouchableOpacity onPress={() => setShowModalAudio(true)} style={{ alignItems: 'center', marginLeft: 40 }}>
          {isRecording ? <AudioEnabledIcon /> : <AudioIcon />}
          <SearchButtonTitle color={isRecording ? '#EE3C3C' : '#666666'}>Busca por áudio</SearchButtonTitle>
        </TouchableOpacity>
        <HrTitle />

        <TouchableOpacity onPress={() => setShowModalBarcode(true)} style={{ alignItems: 'center', marginRight: 20 }}>
          {showModalBarcode ? <CodeEnableIcon /> : <CodeIcon />}
          <SearchButtonTitle color={showModalBarcode ? '#EE3C3C' : '#666666'}>Ler código de barras</SearchButtonTitle>
        </TouchableOpacity>
        {/* <TouchableOpacity style={{ alignItems: 'center' }}>
          <ImageIcon />
          <SearchButtonTitle color={'none'}>Busca por imagem</SearchButtonTitle>
        </TouchableOpacity> */}
      </SearchContainer>

      <ModalBarCode show={showModalBarcode} hide={() => setShowModalBarcode(false)} />
      <ModalAudio
        show={showModalAudio}
        hide={() => onCloseModal()}
        toggleRecording={toggleRecording}
        handleSubmitEditing={() => handleSubmitEditing()}
        isRecording={isRecording}
      />
    </>
  );
};

export default SearchBar;
