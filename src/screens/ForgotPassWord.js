import React, {useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import ForgotPassWordStyle from '../assets/styles/forgotPassWordStyle';
import MeuButton from '../components/MeuButton';
import auth from '@react-native-firebase/auth';

const ForgotPassWord = ({navigation}) => {
  const [email, setEmail] = useState('');

  const recover = () => {
    if (email !== '') {
      console.log(email);
      auth()
        .sendPasswordResetEmail(email)
        .then(r => {
          Alert.alert(
            'Atenção:',
            'Enviamos um email de recuperação para: ' + email,
            [{text: 'OK', onPress: () => navigation.goBack()}],
          );
        })
        .catch(e => {
          console.log('ForgotPassword= erro em recover' + e);
          switch (e.code) {
            case 'auth/user-not-found':
              Alert.alert('Erro:', 'Usuário não cadastrado.');
              break;
            case 'auth/invalid-email':
              Alert.alert('Erro:', 'Email inválido.');
              break;
            case 'auth/user-disabled':
              Alert.alert('Erro:', 'Usuário desabilitado.');
              break;
          }
        });
    } else {
      Alert.alert('Atenção:', 'Por favoe, preencha o campo email.');
    }
  };

  return (
    <View style={ForgotPassWordStyle.container}>
      <TextInput
        style={ForgotPassWordStyle.input}
        placeholder="Email"
        keyboardType="email-address"
        returnKeyType="go"
        onChangeText={t => setEmail(t)}
        autoFocus={true}
      />
      <MeuButton texto="Recuperar senha" onClick={recover} />
    </View>
  );
};

export default ForgotPassWord;
