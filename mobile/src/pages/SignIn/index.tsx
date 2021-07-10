import React, { useCallback } from 'react';
import {
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  TextInput,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../components/Input';

import LoginImage from '../../assets/images/login_image.svg';
import {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../hooks/auth';

const SignIn = () => {
  const {signIn, user} = useAuth();
  const navigation = useNavigation();

  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);
  const [message, setMessage] = useState(String);

  const [inputTextOne, setInputTextOne] = useState<TextInput | null>();
  const [inputTextTwo, setInputTextTwo] = useState<TextInput | null>();

  const handleSignIn = useCallback( async () => {
    if (email == '' || password == '') {
      setMessage('Insira todos os dados corretamente.');
      return;
    }

    try {
      await signIn({email, password});
      console.log(user);

      navigation.navigate('Dashboard');
    } catch(err) {
      console.log(err);
    }
    
  }, [email, password, signIn, user]);

  return (
    <SafeAreaView style={styles.background}>
      <KeyboardAvoidingView style={styles.linearGradient} behavior="position">
        <LinearGradient
          colors={['#FEBDB1', '#FF5555']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.linearGradient}>
          <LoginImage />

          <View style={styles.titleContainer}>
            <Text style={styles.textTitle}>COVID ZONE</Text>
          </View>

          <Input
            textRef={setInputTextOne}
            change={setEmail}
            placeholder="Digite seu email"
            value={email}
            key='next'
            type="email-address"
            onSubmitEditing={() => inputTextTwo?.focus()}
          />

          <Input
            textRef={setInputTextTwo}
            placeholder="Digite sua senha"
            value={password}
            change={setPassword}
            isPassword
            key='go'
            type="default"
            onSubmitEditing={handleSignIn}
          />

          {message != '' && <Text style={styles.message}>{message}</Text>}
        </LinearGradient>
      </KeyboardAvoidingView>

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

      <TouchableWithoutFeedback onPress={handleSignIn}>
        <View style={styles.buttonLogin}>
          <Text style={styles.buttonLoginText}>Login</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignIn;
