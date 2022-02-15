import React from 'react';
import MCReactModule from 'react-native-marketingcloudsdk';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { View, StatusBar, Text, TextInput, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { store, persistor } from './store';
import Routes from './routes';

const App = () => {
  // Desabilitando o FontScaling do iOS
  // (Evitar aumento de fonte devido configuracoes do usuario)
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;

  MCReactModule.enablePush();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{ flex: 1 }}>
            <StatusBar translucent barStyle='dark-content' />
            <Routes />
          </View>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
