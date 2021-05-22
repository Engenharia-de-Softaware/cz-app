import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  map: {
    width: width,
    height: height,
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

  backButton: {
    position: 'absolute',
    width: 32,
    height: 32,

    backgroundColor: '#DB3828',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 20,

    right: 15,
    top: 15,
  },

  modal: {
    backgroundColor: '#fff',
    position: 'absolute',

    width: width * 0.25,
    height: height * 0.1,
    
    right: 15, 
    top: 15,

    display: 'flex',
    alignItems: 'center',
    borderRadius: 15,
  },

  closeModal: {
    width: 32,
    height: 32,

    backgroundColor: '#ff0000',
    position: 'absolute',
    right: 5,
    top: 5,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 16,
  },

  text: {
    color: '#000',
    marginTop: 40,
  },
});

export default styles;
