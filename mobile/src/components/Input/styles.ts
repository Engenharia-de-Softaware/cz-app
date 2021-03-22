import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    width: Dimensions.get('window').width * 0.8,
    height: 40,
    backgroundColor: '#fff',

    borderRadius: 10,
    marginTop: 20,

    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },

  inputStyle: {
    width: '100%',
  },

  inputStylePassword: {
    width: '80%',
  },

  eye: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default styles;
