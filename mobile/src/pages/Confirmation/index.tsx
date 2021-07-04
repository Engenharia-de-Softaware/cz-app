import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import ConfirmationImage from '../../assets/images/checkin_1.svg';
import styles from './styles';


const Confirmation =() =>{
  const navigation = useNavigation();
  return(

    <SafeAreaView style={styles.background}>

      <ConfirmationImage style={styles.checkinImage}/>
        
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Check-in realizado com sucesso.</Text>
      </View>
        

      <TouchableOpacity onPress={() => {
            navigation.navigate('Dashboard'); 
          }}>
        <View style={styles.buttonContainer}>
          <Text style={{color: '#fff',fontSize:15}}>OK</Text>
        </View>
      </TouchableOpacity>  
    </SafeAreaView>
        
  )


}

export default Confirmation