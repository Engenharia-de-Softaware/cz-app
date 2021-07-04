import { LinearGradient } from 'react-native-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
  },

  linearGradient: {
    height: Dimensions.get('window').height * 0.75,

    display: 'flex',
    alignItems: 'center',
  },

  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textTitle: {
    color: '#fff',
    width: Dimensions.get('window').width * 0.8,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontFamily: 'Bebas Neue Regular',
    fontSize: 40,
    textAlign: 'center',
  },

  buttonsContainer: {
    marginTop: 20,

    width: Dimensions.get('window').width,
    paddingLeft: 40,
    paddingRight: 40,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textButton: {
    textDecorationLine: 'underline',
    fontFamily: 'Roboto',
    fontSize: 12,
  },

  buttonLogin: {
    marginTop: 25,
    marginLeft: Dimensions.get('window').width * 0.1,
    width: Dimensions.get('window').width * 0.8,
    height: 40,
    backgroundColor: '#DB3828',
    borderRadius: 25,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    
  },

  buttonLoginText: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 16,
  },
});

export default styles;
