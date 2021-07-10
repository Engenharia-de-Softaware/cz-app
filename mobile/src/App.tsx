import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import Routes from './Routes';
import AppProvider from './hooks';

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
