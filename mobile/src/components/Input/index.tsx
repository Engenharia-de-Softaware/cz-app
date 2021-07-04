import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

interface InputProps {
  placeholder: string;
  value: string;
  change: (event: string) => void;
  isPassword?: boolean;
}

const Input = (props: InputProps) => {
  const [eyeState, setEyeState] = useState(true);

  return (
    <KeyboardAvoidingView behavior="padding" enabled>
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize="none"
          style={
            props.isPassword ? styles.inputStylePassword : styles.inputStyle
          }
          secureTextEntry={(props.isPassword as boolean) && eyeState}
          placeholder={props.placeholder}
          defaultValue={props.value}
          onChangeText={props.change}
        />
        {props.isPassword && (
          <TouchableOpacity
            style={styles.eye}
            onPress={() => setEyeState(!eyeState)}>
            {eyeState ? (
              <Entypo name="eye" size={30} color="#000" />
            ) : (
              <Entypo name="eye-with-line" size={30} color="#000" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Input;
