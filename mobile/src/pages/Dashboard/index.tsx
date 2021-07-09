import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  Modal,
  View,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Evilcons from 'react-native-vector-icons/EvilIcons';

import GetLocation from 'react-native-get-location';
import api from '../../services/api';

import marker_atention from '../../assets/images/marker_atention.png';
import marker_danger from '../../assets/images/marker_danger.png';

interface MarkerProps {
  latitude: string;
  longitude: string;
  quantidade: number;
}

// {
//   "-1.87648,15.7866": 50,
//   "-23.9990,17.9996": 78,
//   "-16.65785,19.00978": 102,
// }

const Dashboard = () => {
  // const {} = useAuth();
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [latitude, setLatitude] = useState(Number);
  const [longitude, setLongitude] = useState(Number);
  const [markers, setMarkers] = useState<MarkerProps[]>();

  const renderMakers = () => {
    console.log(markers);
    return markers?.map((marker: MarkerProps, count) => (
      <Marker
        key={count}
        coordinate={{
          latitude: Number(marker.latitude),
          longitude: Number(marker.longitude),
        }}
        image={marker.quantidade > 1 ? marker_danger : marker_atention}
      />
    ));
  };

  //   {establishment.map(stablishment => (
  //     <Marker
  //         title={stablishment.name}
  //         description={String(stablishment.current_stocking)}
  //         key={stablishment.name}
  //         onCalloutPress={() => { ShowMarkerModal({ ...stablishment }) }}
  //         coordinate={{
  //             latitude: Number(stablishment.latitude),
  //             longitude: Number(stablishment.longitude),
  //         }}
  //         image={marker_pin}
  //     />
  // ))}

  useEffect(() => {
    const getMarkers = async () => {
      console.log('entrando aqui');
      const response = await api.get('getmarkers');
      const {data} = response;
      console.log(data);
      setMarkers(data);
    };

    getMarkers();
  }, []);

  useEffect(() => {
    const getLocation = () => {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      })
        .then(location => {
          // console.warn(location);
          setLatitude(location.latitude);
          setLongitude(location.longitude);
        })
        .catch(error => {
          const {code, message} = error;
          console.warn(code, message);
        });
    };
    getLocation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        style={styles.map}>
        {renderMakers()}
      </MapView>

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
