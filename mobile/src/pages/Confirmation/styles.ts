import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  background:{        
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
  },


  checkinImage:{
    margin: 0,
    padding: 0,  
    marginLeft: (Dimensions.get('window').width/2 - 75),
    marginTop: (Dimensions.get('window').height/2 - 200),
  },

  textContainer:{
    display: 'flex',
    alignItems: 'center',
    
    marginTop:40,
  },

  textTitle:{
    width:300,
    fontFamily: 'Roboto',
    fontWeight:'bold',
    fontSize: 25,
    textAlign: 'center'

  },

  buttonContainer: {
    marginTop: 100,
    marginLeft: Dimensions.get('window').width*0.25,
    width: Dimensions.get('window').width*0.5,
    height: 40,
    backgroundColor: '#DB3828',
    borderRadius: 25,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default styles