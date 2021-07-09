import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';
import {AsyncStorage} from 'react-native';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
}

interface AuthState {
  user: User;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  name: string;
  cpf: string;
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  token: string;
  isLoading: boolean;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signUp: (credentials: SignUpCredentials) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStoredData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@CZ:token',
        '@CZ:user',
      ]);

      if (token[1] && user[1]) {
        setData({token: JSON.parse(token[1]), user: JSON.parse(user[1])});;;;;;
      }
    }

    setIsLoading(false);
    loadStoredData();
  }, []);

  const signIn = useCallback(async (credentials: SignInCredentials) => {
    try {
      const {email, password} = credentials;
      console.log(email, password);

      const res = await api.post('auth', {email, password});
      console.log(res.data)

      const {accessToken, user, refreshToken} = res.data;
      console.log({accessToken, user, refreshToken});
      
      await AsyncStorage.multiSet([
        ['@CZ:token', accessToken],
        ['@CZ:refreshToken', refreshToken],
        ['@CZ:user', JSON.stringify(user)],
      ])

      api.defaults.headers.authorization = `Bearer ${accessToken}`
      setData({token: accessToken, user});
    } catch(err) {
      console.log(err);
      throw new Error("User is not Authenticated");      
    }
  }, []);

  const signUp = useCallback(async (credentials: SignUpCredentials) => {
    try {
      const { name, cpf, email, password } = credentials;

      await api.post('users', {
        name,
        cpf,
        email,
        password
      })
    } catch (err) {
      console.log(err)
      throw new Error(err as string)
    }
  }, []);

  const signOut = useCallback(async () => {
    console.log('signing out')
    await AsyncStorage.multiRemove(['@CZ:token', '@CZ:user'])

    setData({} as AuthState)
  }, [])


  return (
    <AuthContext.Provider value={{
      user: data.user,
      signIn,
      signUp,
      token: data.token,
      signOut,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
};


const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be wrapped inside an AuthProvider')
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth }
