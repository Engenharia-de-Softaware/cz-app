import React from 'react';
import styles from './styles';
import { useState } from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback, TextInput, TouchableOpacity, Alert} from 'react-native';
import SignUpImage from '../../assets/images/logo.svg';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import { color } from 'react-native-reanimated';

const SignUp = () =>{

  const navigation = useNavigation();

  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);
  const [password2, setPassword2] = useState(String);
  const [name, setName] = useState(String)
  const [cpf, setCpf] = useState(String);

  const [eyeState1, setEyeState1] = useState(true);
  const [eyeState2, setEyeState2] = useState(true);

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!name.trim()) {
      //alert('Please Enter Name');
      return;
    }
    //Check for the Email TextInput
    if (!email.trim()) {
      
      return;
    }

    if(!password.trim() || !password2.trim()){

      return;
    }
    
    if(!cpf.trim()){
      return;
    }
    //Checked Successfully
    //Do whatever you want
    //alert('Success');
  };


  return(
    <SafeAreaView style={styles.background}>
      
      <TouchableWithoutFeedback onPress={() => { navigation.navigate('SignIn'); } }>
        <View style={styles.buttonBackContainer}>
          <Text style={styles.buttonBack}>{`<`}</Text>
        </View>        
      </TouchableWithoutFeedback>


      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>Crie a sua conta</Text>
      </View>

      <SignUpImage style={styles.singupImage}/>

      <View style={styles.singUpInputContainer}>

        <TextInput 
          style={styles.inputContainer}
          value = {name}
          placeholder = "Digite seu nome"
          onChangeText = {setName}
        />

        <TextInput 
          style={styles.inputContainer}
          value = {email}
          placeholder = "Digite seu email"
          onChangeText = {setEmail}
        />

        <TextInput 
          style={styles.inputContainer}
          value = {cpf}
          placeholder = "Digite seu CPF"
          onChangeText = {setCpf}
        />
        <View>
          <TextInput 
            style={styles.inputContainer}
            value = {password}
            placeholder = "Digite sua senha"
            onChangeText = {setPassword}
            secureTextEntry = {eyeState1}
          />
          
          <TouchableOpacity style={styles.eye} onPress={() => setEyeState1(!eyeState1)}>
              { eyeState1 
                ? <Entypo name="eye" size={30} color="#000" />
                : <Entypo name="eye-with-line" size={30} color="#000" />
              }
          </TouchableOpacity>  
        </View>
        
        <View>
          <TextInput 
            style={styles.inputContainer}
            value = {password2}
            placeholder = "Digite novamente sua senha"
            onChangeText = {setPassword2}
            secureTextEntry = {eyeState2}
          />
          
          <TouchableOpacity style={styles.eye} onPress={() => setEyeState2(!eyeState2)}>
              { eyeState2 
                ? <Entypo name="eye" size={30} color="#000" />
                : <Entypo name="eye-with-line" size={30} color="#000" />
              }
          </TouchableOpacity>  
        </View>

      </View>

      <TouchableOpacity onPress={checkTextInput}>
        <View style={styles.buttonRegisterContainer}>
          <Text style={{color: '#fff'}}>Cadastrar</Text>
        </View>
      </TouchableOpacity>


    </SafeAreaView>
  )
}

export default SignUp;
