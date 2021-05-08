import React, { useState } from 'react';
import {SafeAreaView, View, TouchableWithoutFeedback, Text} from 'react-native';
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Mask from '../../components/Mask';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Scanner = () => {
  const navigation = useNavigation();
  const [camera, setCamera] = useState<RNCamera>();

  const barcodeRecognized = ({data}: BarCodeReadEvent) => {
    console.warn(data);

    const [latitude, longitude] = data.split(',');
    console.warn({latitude, longitude});
  }

  return (
    <SafeAreaView style={styles.container}>
      <RNCamera 
        ref= {(camera: RNCamera) => {setCamera(camera)}}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        onBarCodeRead={ barcodeRecognized }
      >
        <Mask />
        
        <TouchableWithoutFeedback 
          onPress={() => {
            navigation.navigate('Dashboard'); 
          }}>
          <View style={styles.backButton}>
            <AntDesign name="left" size={16} color="#fff"/>
          </View>
        </TouchableWithoutFeedback>

        <Text style={styles.text}>Escaneando ...</Text>

      </RNCamera>
    </SafeAreaView>
  );
};

export default Scanner;
