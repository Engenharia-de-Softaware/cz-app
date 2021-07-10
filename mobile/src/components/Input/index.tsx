import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

interface InputProps {
  placeholder: string;
  value: string;
  change: (event: string) => void;
  isPassword?: boolean;
  key: ReturnKeyTypeOptions;
  type: KeyboardTypeOptions;
  textRef: (input: TextInput | null) => void;
  onSubmitEditing: () => void;
}

const Input = ({
  placeholder,
  value,
  change,
  isPassword = false,
  key,
  type,
  textRef,
  onSubmitEditing,
}: InputProps) => {
  const [eyeState, setEyeState] = useState(true);

  return (
    <KeyboardAvoidingView behavior="padding" enabled>
      <View style={styles.inputContainer}>
        <TextInput
          ref={textRef}
          autoCapitalize="none"
          style={
            isPassword ? styles.inputStylePassword : styles.inputStyle
          }
          secureTextEntry={(isPassword) && eyeState}
          placeholder={placeholder}
          defaultValue={value}
          returnKeyType={key}
          onChangeText={change}
          keyboardType={type}
          onSubmitEditing={onSubmitEditing}
        />
        {isPassword && (
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
