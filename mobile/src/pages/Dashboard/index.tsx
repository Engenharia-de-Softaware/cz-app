import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  Modal,
  View,
} from 'react-native';
import MapView from 'react-native-maps';
import {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Evilcons from 'react-native-vector-icons/EvilIcons';

const initialRegion = {
  latitude: -27.2092052,
  longitude: -49.6401092,
  latitudeDelta: 0.008,
  longitudeDelta: 0.008,
};

const Dashboard = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

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
        style={styles.map}
      />

      <TouchableWithoutFeedback
        onPress={() => {
          setVisible(true);
        }}>
        <View style={styles.backButton}>
          <Entypo name="dots-three-vertical" size={16} color="#fff" />
        </View>
      </TouchableWithoutFeedback>

      <Modal
        animationType={'slide'}
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}>
        <View style={styles.modal}>
          <TouchableWithoutFeedback
            onPress={() => {
              setVisible(false);
            }}>
            <View style={styles.closeModal}>
              <Evilcons name="close" size={16} color="#fff" />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              setVisible(false);
              navigation.navigate('SignIn');
            }}>
            <Text style={styles.text}>Sair</Text>
          </TouchableWithoutFeedback>
        </View>
      </Modal>

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
