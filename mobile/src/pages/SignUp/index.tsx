import React from 'react';
import styles from './styles';
import {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import SignUpImage from '../../assets/images/logo.svg';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);
  const [password2, setPassword2] = useState(String);
  const [name, setName] = useState(String);
  const [cpf, setCpf] = useState(String);

  const [eyeState1, setEyeState1] = useState(true);
  const [eyeState2, setEyeState2] = useState(true);

  const [inputTextOne, setInputTextOne] = useState<TextInput | null>();
  const [inputTextTwo, setInputTextTwo] = useState<TextInput | null>();
  const [inputTextThree, setInputTextThree] = useState<TextInput | null>();
  const [inputTextFour, setInputTextFour] = useState<TextInput | null>();
  const [inputTextFive, setInputTextFive] = useState<TextInput | null>();

  const handleSignUp = () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !password2.trim() ||
      !cpf.trim()
    ) {
      Alert.alert('Preencha todos os campos corretamente.');
      return;
    }

    if (password != password2) 
    {
      Alert.alert('As senhas digitadas não são iguais')
      return;
    }

    
    Alert.alert('Success');
  };

  return (
    <SafeAreaView style={styles.background}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={'position'}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <View style={styles.buttonBackContainer}>
            <Text style={styles.buttonBack}>{`<`}</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.titleContainer}>
          <Text style={styles.textTitle}>Crie a sua conta</Text>
        </View>

        <SignUpImage style={styles.singupImage} />
        <View style={styles.singUpInputContainer}>
          <TextInput
            ref={(input) => {setInputTextOne(input)}}
            style={styles.inputContainer}
            value={name}
            placeholder="Digite seu nome"
            onChangeText={setName}
            keyboardType='default'
            returnKeyType='next'
            onSubmitEditing={() => inputTextTwo?.focus()}
          />

          <TextInput
            ref={(input) => {setInputTextTwo(input)}}
            style={styles.inputContainer}
            value={email}
            placeholder="Digite seu email"
            onChangeText={setEmail}
            keyboardType='email-address'
            returnKeyType='next'
            onSubmitEditing={() => inputTextThree?.focus()}
          />

          <TextInput
            ref={(input) => {setInputTextThree(input)}}
            style={styles.inputContainer}
            value={cpf}
            placeholder="Digite seu CPF"
            onChangeText={setCpf}
            keyboardType='number-pad'
            returnKeyType='next'
            onSubmitEditing={() => inputTextFour?.focus()}
          />

          <View>
            <TextInput
              ref={(input) => {setInputTextFour(input)}}
              style={styles.inputContainer}
              value={password}
              placeholder="Digite sua senha"
              onChangeText={setPassword}
              secureTextEntry={eyeState1}
              keyboardType='default'
              returnKeyType='next'
              onSubmitEditing={() => inputTextFive?.focus()}
            />

            <TouchableOpacity
              style={styles.eye}
              onPress={() => setEyeState1(!eyeState1)}>
              {eyeState1 ? (
                <Entypo name="eye" size={30} color="#000" />
              ) : (
                <Entypo name="eye-with-line" size={30} color="#000" />
              )}
            </TouchableOpacity>
          </View>

          <View>
            <TextInput
              ref={(input) => {setInputTextFive(input)}}
              style={styles.inputContainer}
              value={password2}
              placeholder="Digite novamente sua senha"
              onChangeText={setPassword2}
              secureTextEntry={eyeState2}
              keyboardType='default'
              returnKeyType='go'
              onSubmitEditing={handleSignUp}
            />

            <TouchableOpacity
              style={styles.eye}
              onPress={() => setEyeState2(!eyeState2)}>
              {eyeState2 ? (
                <Entypo name="eye" size={30} color="#000" />
              ) : (
                <Entypo name="eye-with-line" size={30} color="#000" />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={handleSignUp}>
          <View style={styles.buttonRegisterContainer}>
            <Text style={{color: '#fff', fontFamily: 'Roboto',}}>Cadastrar</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
