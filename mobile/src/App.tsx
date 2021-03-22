import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import Routes from './Routes';

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
