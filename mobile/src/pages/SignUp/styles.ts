import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height:  height,
    backgroundColor: '#fff',
  },

  singupImage: {
    marginLeft: -156,
    marginTop: 160,
    alignContent: 'center',
    position: 'absolute',
  },

  titleContainer: {
    marginTop: 110,
    marginBottom: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textTitle: {
    color: '#000',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },

  singUpInputContainer: {
    alignItems: 'center',
    fontFamily: 'Roboto',
    marginTop: 38,
  },

  buttonRegisterContainer: {
    marginTop: 40,
    // marginBottom: 12,
    marginLeft:  width * 0.1,
    width:  width * 0.8,
    height: 40,
    backgroundColor: '#282C37',
    borderRadius: 25,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonBackContainer: {
    marginTop: 25,
    marginLeft:  width * 0.05,
    width: 40,
    height: 40,
    backgroundColor: '#DB3828',
    borderRadius: 25,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },

  buttonBack: {
    fontSize: 25,
    paddingBottom: 2,
    color: '#fff',
  },

  inputContainer: {
    width:  width * 0.8,
    height: 40,
    backgroundColor: '#fff',

    borderRadius: 10,
    marginTop: 20,

    display: 'flex',
    flexDirection: 'row',

    borderStyle: 'solid',
    borderColor: '#DB3828',
    borderWidth: 1,

    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },

  eye: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginLeft:  width * 0.7,
    marginTop: 24,
  },
});

export default styles;