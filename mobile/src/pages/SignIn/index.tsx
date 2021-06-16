import React from 'react';
import {
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../components/Input';

import LoginImage from '../../assets/images/login_image.svg';
import {useState} from 'react';

import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);
  const [message, setMessage] = useState(String);

  const handleSignIn = () => {
    if (email == "" || password == "")
    {
      setMessage('Insira todos os dados corretamente.')
      return;
    }
  }

  return (
    <SafeAreaView style={styles.background}>
      <LinearGradient
        colors={['#FEBDB1', '#FF5555']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.linearGradient}>
        <LoginImage />

        <KeyboardAvoidingView style={{flex: 1}} behavior='position'>
          <View style={styles.titleContainer}>
            <Text style={styles.textTitle}>COVID ZONE</Text>
          </View>

          <Input
            change={setEmail}
            placeholder="Digite seu email"
            value={email}
          />

          <Input
            placeholder="Digite sua senha"
            value={password}
            change={setPassword}
            isPassword
          />
        </KeyboardAvoidingView>
      </LinearGradient>

      <View style={styles.buttonsContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={styles.textButton}>Cadastre-se</Text>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Text style={styles.textButton}>Esqueceu a senha?</Text>
        </TouchableWithoutFeedback>
      </View>

      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('Dashboard');
        }}>
        <View style={styles.buttonLogin}>
          <Text style={styles.buttonLoginText}>Login</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignIn;
