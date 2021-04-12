import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  button_scanner: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#DB3828',

    borderRadius: 50,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    bottom: 15,
    right: 15,
  },
});

export default styles;
