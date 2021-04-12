import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableWithoutFeedback, View} from 'react-native';
import MapView from 'react-native-maps';
import {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const initialRegion = {
  latitude: -27.2092052,
  longitude: -49.6401092,
  latitudeDelta: 0.008,
  longitudeDelta: 0.008,
};

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: -7.172038,
          longitude: -34.8347068,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        style={styles.map}>
        <Text>sdfga</Text>
      </MapView>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('Scanner');
        }}>
        <View style={styles.button_scanner}>
          <MaterialIcons name="qr-code-scanner" size={30} color="#fff" />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Dashboard;
